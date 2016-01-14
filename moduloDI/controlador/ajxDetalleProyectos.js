// Función de inicialización de la vista

function detalleProyectosInicializar() {

	var crearWidgets = function () {
		$("#jqxButtonGroup_SNI").jqxButtonGroup({ mode: 'RadioButtons', theme: 'energyblue' });

		var jqxNumberInputConfig = {
			width: '150px',
			height: '28px',
			inputMode: 'simple',
			spinButtons: true,
			min: 0,
			digits: 3,
			decimalDigits: 0,
			theme: 'energyblue'
		};
		$('.jqxNumberInput_ValidacionProyectos').jqxNumberInput(jqxNumberInputConfig);

		var jqxDateTimeInputConfig = {
			width: '100%',
			theme: 'energyblue',
			allowNullDate: true,
			culture: 'es-MX',
			showWeekNumbers: false,
			todayString: 'Hoy',
			value: null
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
			width: '100%',
			theme: 'energyblue'
		});
	};

	var agregarEventos = function () {

		$("#jqxButtonGroup_SNI").on('buttonclick', function (event) {
			var clickedButton = event.args.button;
			$('.btnActivo').removeClass('btnActivo btnCorrecto btnPeligro');

			if (clickedButton[0].id == 'btnSNI_Si') {
				$('#'+clickedButton[0].id).addClass('btnActivo btnCorrecto');

				$('#hdnSNI').val(1).trigger('change');
			} else if (clickedButton[0].id == 'btnSNI_No') {
				$('#'+clickedButton[0].id).addClass('btnActivo btnPeligro');
				$('#hdnSNI').val(0).trigger('change');
			} else {
				$('#hdnSNI').val('').trigger('change');
			}
		});

		$('#hdnSNI').change(function() {
			var val = $('#hdnSNI').val();
			if (val==1) {
				$('#SNI_CamposAdicionales').slideDown();
			} else {
				$('#SNI_CamposAdicionales').slideUp();
				//Borrar campos
				$('#jqxDateTimeInput_FechaInicio').val(null);
				$('#jqxDateTimeInput_FechaTermino').val(null);
			}
		});

		$("#btnGuardar").on("click", function (event) {
			//Reemplazar texto por "Guardando..."
			var elemento = $(this),
				txtOriginal = $(elemento).html();
			$(this).html("Guardando...");

			// Guarda en la BD

			//Envio exitoso
			//Actualizar datos después de agregar patente...

			window.setTimeout(function() {
				//Restarurar texto original
				$(elemento).html(txtOriginal);
			}, 1500);
		});

		$("#btnCancelar").on("click", function (event) {
			Docentes_ValidacionDatos_TablaCargar("#jqxGrid_Docentes");
		});

	};

	crearWidgets();
	agregarEventos();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido

function ProyectosEliminarRegistro(objeto) {
	if (confirm('¿Estás seguro que deseas eliminar esta proyecto?') ) {
		// Eliminando... simular proceso
		window.setTimeout(function() {
			$(objeto).parent().parent().nextAll().html('<div class="jqx-grid-cell-middle-align" style="margin-top: 11px;">Eliminando...</div>');
		}, 1000);

		// Eliminar de la base de datos

		// Ocultar amigablemente el objeto
		window.setTimeout(function() {
			$(objeto).parent().parent().parent().slideUp();
		}, 2000);

		//Eliminar del DOM
		window.setTimeout(function() {
			$(objeto).parent().parent().parent().remove()
		}, 3000);
	}
}