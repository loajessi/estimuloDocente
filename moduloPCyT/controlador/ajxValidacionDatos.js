// Funci�n de inicializaci�n de la vista

function validacionDatosInicializar() {

	var crearWidgets = function () {
		$('#jqxSplitter_Principal').jqxSplitter({
			height: '460px',
			width: '100%',
			resizable: false,
			theme: 'energyblue',
			//panels: [{size: '41%', min: '41.1%'}, {size: '59%', min: '30%'}]
			panels: [{size: '41%'}, {size: '59%'}]
		});

		// Eliminar bot�n de colapso para evitar error en grid
		$('.jqx-splitter-collapse-button-vertical').remove();
	};

	var agregarEventos = function () {
/*

		$("#btnCancelar").on("click", function (event) {
			Docentes_ValidacionDatos_TablaCargar("#jqxGrid_Docentes");
		});*/



	};

	crearWidgets();
	agregarEventos();
	ParqueCientificoTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicializaci�n de contenido
