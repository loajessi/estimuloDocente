// Función de inicialización de la vista

function validacionDatosInicializar() {

	var crearWidgets = function () {
		$('#jqxSplitter_Principal').jqxSplitter({
			height: '460px',
			width: '100%',
			resizable: false,
			theme: 'energyblue',
			panels: [{size: '42%'}, {size: '58%'}]
		});

		// Eliminar botón de colapso para evitar error en grid
		$('.jqx-splitter-collapse-button-vertical').remove();
	};

	var agregarEventos = function () {

	};

	crearWidgets();
	agregarEventos();
	EvaluacionTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido