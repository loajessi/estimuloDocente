// Función de inicialización de la vista

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

		// Eliminar botón de colapso para evitar error en grid
		$('.jqx-splitter-collapse-button-vertical').remove();
	};

	var agregarEventos = function () {

		/*console.info('Cambio para intercambiar el texto del boton automaticamente');
		$('#btnGuardar').click(function () {

			//Reemplazar texto por "Guardando..."
			var elemento = $(this),
				txtOriginal = $(elemento).html();
			$(this).html("Guardando...");

			// Guarda en la BD
			//docente_ValidacionDatosCambiarEstado(idEstimuloLista);

			//Simular envío de datos
			window.setTimeout(function () {
				//Restarurar texto original
				$(elemento).html(txtOriginal);
			}, 2000);
		});*/

		$("#btnCancelar").on("click", function (event) {
			Docentes_ValidacionDatos_TablaCargar("#jqxGrid_Docentes");
		});

//    $('#jqxButtonGroup_Estado').on('selected', function () {
//    });

	};

	crearWidgets();
	agregarEventos();
	Docentes_ValidacionDatos_TablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido
