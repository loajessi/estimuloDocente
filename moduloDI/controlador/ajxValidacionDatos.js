// Función de inicialización de la vista

function validacionDatosInicializar() {

	var crearWidgets = function () {
		$('#jqxSplitter_Principal').jqxSplitter({
			height: '460px',
			width: '100%',
			resizable: false,
			theme: 'energyblue',
			//panels: [{size: '41%', min: '41.1%'}, {size: '59%', min: '30%'}]
			panels: [{size: '45%'}, {size: '55%'}]
		});

		// Eliminar botón de colapso para evitar error en grid
		$('.jqx-splitter-collapse-button-vertical').remove();
	};

	var agregarEventos = function () {

	};

	crearWidgets();
	agregarEventos();
	InvestigacionTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido
