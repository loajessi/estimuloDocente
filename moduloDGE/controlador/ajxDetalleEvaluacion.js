// Función de inicialización de la vista

function detalleEvaluacionInicializar() {

	var crearWidgets = function () {

		var source = {
			datatype: "json",
			datafields: [{ name: 'valor', type: 'int' }, { name: 'nivel', type: 'string' }],
			localdata: [
				{valor: 0, nivel: '0'},
				{valor: 1, nivel: '1'},
				{valor: 2, nivel: '2'},
				{valor: 3, nivel: '3'},
				{valor: 4, nivel: '4'},
				{valor: 5, nivel: '5'},
				{valor: 6, nivel: '6'},
				{valor: 7, nivel: '7'},
				{valor: 8, nivel: '8'},
				{valor: 9, nivel: '9'},
				{valor: 10, nivel: '10'},
				{valor: 11, nivel: '11'},
				{valor: 12, nivel: '12'},
				{valor: 13, nivel: '13'},
				{valor: 14, nivel: '14'},
				{valor: 15, nivel: '15'},
				{valor: 16, nivel: '16'},
				{valor: 17, nivel: '17'},
				{valor: 18, nivel: '18'}
			]};

		$("#jqxDropDownList_innovacion, #jqxDropDownList_tics").jqxDropDownList({
			source: new $.jqx.dataAdapter(source),
			displayMember: 'nivel',
			valueMember: 'valor',
			dropDownHeight: '190px',
			placeHolder: 'Seleccione...',
			width: '100%',
			theme: 'energyblue'
		});

		$("#jqxDropDownList_calidad").jqxDropDownList({
			//source: new $.jqx.dataAdapter(source),
			autoDropDownHeight: true,
			placeHolder: 'Seleccione nivel EGEL',
			disabled: true,
			width: '100%',
			dropDownWidth: 280,
			theme: 'energyblue'
		});
	};

	var agregarEventos = function () {

		$('#jqxDropDownList_calidad').on('change', function (e) {
			if (e.args) {
				if (e.args.item != null) {
					$('#hdnCalidad').val(e.args.item.value).trigger('change');
				} else {
					$('#hdnCalidad').val('').trigger('change');
				}
			}
		});

		$('#jqxDropDownList_innovacion').on('change', function (e) {
			if (e.args) {
				$('#hdnInnovacion').val(e.args.item.value).trigger('change');
			}
		});

		$('#jqxDropDownList_tics').on('change', function (e) {
			if (e.args) {
				$('#hdnTICs').val(e.args.item.value).trigger('change');
			}
		});

		$('#botonesEGEL button').on('click', function (e) {
			$('#hdnEGEL').val( $(this).attr('data-valor') ).trigger('change');
			$('#hdnCalidad').val('').trigger('change');

			//Boton activo
			$('#botonesEGEL .btn.btnActivo').removeClass('btnActivo');
			$(this).addClass('btnActivo');

			var calidad = [];

			calidad[1] = {
				'Estandar Académico EGEL 1 CENEVAL': 'Estandar Académico EGEL 1 CENEVAL',
				'SNB 1': 'SNB 1',
				'PNPC Internacional': 'PNPC Internacional'
			};

			calidad[2] = {
				'EGEL - Institucional': 'EGEL - Institucional',
				'SNB 2': 'SNB 2',
				'PNPC Consolidado': 'PNPC Consolidado'
			};

			calidad[3] = {
				'Estandar Académico EGEL 2 CENEVAL': 'Estandar Académico EGEL 2 CENEVAL',
				'SNB 3': 'SNB 3',
				'PNPC en desarrollo': 'PNPC en desarrollo'
			};

			var nivel = parseInt( $(this).html() );

			//Habilitar dropDownList
			if (nivel > 0) {
				$("#jqxDropDownList_calidad").jqxDropDownList({
					source: calidad[nivel],
					placeHolder: 'Seleccione...',
					selectedIndex: -1,
					disabled: false
				});
				$('#hdnCalidad').attr('required','required').trigger('change');
			} else {
				$("#jqxDropDownList_calidad").jqxDropDownList({
					placeHolder: 'No aplica para Nivel 0',
					selectedIndex: -1,
					disabled: true
				});
				$('#hdnCalidad').removeAttr('required').trigger('change');
			}

		});

		$('#frmDetalleEvaluacion').on('submit', function (e) {
			e.preventDefault();
			//e.stopPropagation();

			if ( $('#frmDetalleEvaluacion')[0].checkValidity() ) {
				// Comprobación del navegador correcta
				evaluacionAgregarModificar( $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex') );
			}else console.error('Error en formulario');
		});

		$("#btnGuardar").on("click", function (event) {
			if (!$('#frmDetalleEvaluacion')[0].checkValidity()) {
				notif({msg: 'Todos los campos son requeridos', type: 'warning', position: 'right', width: 400});
			} else {
				$('#frmDetalleEvaluacion').submit();
			}
		});


		$("#btnCancelar").on("click", function (event) {
			$('#detalleEvaluacion > .animated').removeClass('slideInLeft').addClass('slideOutLeft');

			notif({msg: 'Cambios cancelados', type: 'info', position: 'right', width: 200});
			var datarow = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex') );

			//window.setTimeout(function() {
				Docentes_DetalleEvaluacion_CargarVista(datarow);
			//}, 800);
		});

		//Limitar input
		$('#frmDetalleEvaluacion input[type="number"]').change(function() {
			var valor = $(this).val(),
				max = parseInt( $(this).attr('max') );

			if (valor.indexOf(".")!=-1) { //Decimal
				valor = Math.floor(valor);
			}

			if (valor>max) {
				$(this).val(max);
			} else if (valor<0) {
				$(this).val(0);
			} else {
				$(this).val(valor);
			}

		});
	};

	crearWidgets();
	agregarEventos();
	programasEducativosEgelConsultar( $('#hdnNumeroEmpleado').val() );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido

function programasEducativosEgelConsultar(numeroEmpleado){

	var dataAdapter = datos_horario_empleadoCargar(numeroEmpleado),
		arrListaPE = [],
		listaPE = "<ul>",
		elem = 0;

	dataAdapter.dataBind();
	registros = dataAdapter.records;

	for (var i = 0; i < registros.length; i++) {
		var plan_estudios = $.trim(registros[i].plan_estudios).toUpperCase();
		if ($.inArray(plan_estudios, arrListaPE) == -1) {
			listaPE += "<li>" + plan_estudios + "</li>";
			arrListaPE[elem] = plan_estudios;
			elem++;
		}
	}

	listaPE += "</ul>";

	//$("#divListaProgramasEducativosDeCalidad").html("Planes de estudio en los que imparte clases: <br/>"+listaPE+"<br /><br />");
	$("#ListaProgramasEducativosEmpleado").html(listaPE);
}