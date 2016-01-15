// Funci�n de inicializaci�n de la vista

function validacionDatosInicializar() {

	var crearWidgets = function () {

	};

	var agregarEventos = function () {

		$("#btnGuardar").on("click", function (event) {
			//Reemplazar texto por "Guardando..."
			var elemento = $(this),
				txtOriginal = $(elemento).html();
			$(this).html("Guardando...");

			// Guarda en la BD

			//Envio exitoso
			//Actualizar datos despu�s de agregar patente...

			window.setTimeout(function() {
				//Restarurar texto original
				$(elemento).html(txtOriginal);
			}, 1500);
		});

		$("#btnCancelar").on("click", function (event) {
			EvaluacionTablaCargar("#jqxGrid_Docentes");
		});

	};

	crearWidgets();
	agregarEventos();
	EvaluacionTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicializaci�n de contenido

