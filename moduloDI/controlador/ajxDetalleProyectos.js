// Función de inicialización de la vista

function detalleProyectosInicializar() {

	var crearWidgets = function () {
		$("#jqxButtonGroup_SNI").jqxButtonGroup({ mode: 'RadioButtons', theme: 'energyblue' });

		var jqxDateTimeInputConfig = {
			width: '140px',
			theme: 'energyblue',
			allowNullDate: true,
			culture: 'es-MX',
			showWeekNumbers: false,
			todayString: 'Hoy',
			value: null,
			formatString: 'MM/dd/yyyy'
		};
		$("#jqxDateTimeInput_FechaInicioSNI").jqxDateTimeInput(jqxDateTimeInputConfig);
		$("#jqxDateTimeInput_FechaTerminoSNI").jqxDateTimeInput(jqxDateTimeInputConfig);

		var source = {
			datatype: "json",
			datafields: [{ name: 'valor', type: 'int' }, { name: 'nivel', type: 'string' }],
			localdata: [
				{valor: 0, nivel: 'Candidato'},
				{valor: 1, nivel: 'Nivel I'},
				{valor: 2, nivel: 'Nivel II'},
				{valor: 3, nivel: 'Nivel III'}
			]};
		//var dataAdapter = new $.jqx.dataAdapter(source);
		$("#jqxComboBox_NivelSNI").jqxComboBox({
			source: new $.jqx.dataAdapter(source),
			displayMember: 'nivel',
			valueMember: 'valor',
			autoDropDownHeight: true,
			width: '140px',
			theme: 'energyblue'
		});
	};

	var agregarEventos = function () {

		$('#frmModalAgregarProyecto').on('submit', function (e) {
			e.preventDefault();
			e.stopPropagation();

			if ( $('#frmModalAgregarProyecto')[0].checkValidity() ) {
				// Comprobación del navegador correcta

				// Guarda en la BD
				investigacionAgregarModificar();
			}else console.error('Error en formulario');
		});

		$("#jqxButtonGroup_SNI").on('buttonclick', function (event) {
			var clickedButton = event.args.button;
			$('.btnActivo').removeClass('btnActivo btnCorrecto btnPeligro');

			if (clickedButton[0].id == 'btnSNI_Si') {
				$('#'+clickedButton[0].id).addClass('btnActivo btnCorrecto');
				$('#hdnBotonSNI').val(1).trigger('change');
			} else if (clickedButton[0].id == 'btnSNI_No') {
				$('#'+clickedButton[0].id).addClass('btnActivo btnPeligro');
				$('#hdnBotonSNI').val(0).trigger('change');
			} else {
				$('#hdnBotonSNI').val('').trigger('change');
			}
		});

		$('#hdnBotonSNI').change(function() {
			var val = $('#hdnBotonSNI').val();
			if (val==1) {
				$('#SNI_CamposAdicionales').slideDown();
			} else {
				$('#SNI_CamposAdicionales').slideUp();
				//Borrar campos
				$('#jqxDateTimeInput_FechaInicioSNI').val(null);
				$('#jqxDateTimeInput_FechaTerminoSNI').val(null);
				$("#jqxComboBox_NivelSNI").jqxComboBox('clearSelection');
			}
		});

		$("#btnCancelar").on("click", function (event) {
			$('#detalleDatosProyecto > .animated').removeClass('slideInLeft').addClass('slideOutLeft');

			notif({msg: 'Cambios cancelados', type: 'info', position: 'right', width: 200});
			var datarow = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex') );

			Docentes_DetalleProyectos_CargarVista(datarow);
		});

		//Limitar input
		$('#frmModalAgregarProyecto input[type="number"]').change(function() {
			var valor = $(this).val();
			if (valor.indexOf(".")!=-1) { //Decimal
				valor = Math.floor(valor);
			}

			if (valor>999) {
				$(this).val(999);
			} else if (valor<0) {
				$(this).val(0);
			} else {
				$(this).val(valor);
			}

		});

		//Mostrar botones al editar algun dato
		$('#frmModalAgregarProyecto input').change(function () {
			$('.barraSuperiorAcciones').fadeIn();
		});
	};

	crearWidgets();
	agregarEventos();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido
