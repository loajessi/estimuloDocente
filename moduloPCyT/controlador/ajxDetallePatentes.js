// Función de inicialización de la vista

function detallePatentesInicializar() {

	var crearWidgets = function () {

		Docentes_DetallePatentes_TablaCargar('#jqxGrid_DetallePatentes');
		Docentes_DetallePatentes_ComboCargar('#jqxComboBox_idEstadoPatente');

		$('#jqxWindow_ModalAgregarPatente').jqxWindow({
			resizable: false,
			draggable: false,
			cancelButton: $('#btnCancelarAgregarPatente'),
			isModal: true,
			showCloseButton: false,
			autoOpen: false,
			theme: 'energyblue',
			width: '600px',
			height: '240px'
		});

	};

	var agregarEventos = function () {

		console.info('Cambio para intercambiar el texto del boton automaticamente');
		$('#btnOkAgregarPatente').click(function () {

			//Validar datos
			var nombrePatente = $('#txtPatente').val(),
				estadoPatente = $('#jqxComboBox_idEstadoPatente').jqxComboBox('getSelectedIndex');

			if (estadoPatente != null && nombrePatente != "") {

				//TODO: Validar formulario antes de enviar

				/*if (estadoPatente == -1 || typeof estadoPatente.value == 'undefined') {
					alert('Los dos campos son requeridos, por favor completa el formulario.');
					return;
				}*/
				//alert(estadoPatente.value);

				//Reemplazar texto por "Guardando..."
				var elemento = $(this),
					txtOriginal = $(elemento).html();
				$(this).html("Guardando...");

				// Guarda en la BD

				//Simular envío de datos
				window.setTimeout(function () {
					//Envio exitoso
					//Actualizar datos después de agregar patente...

					//TODO: Quitar... refrescar vista para emular inserción de datos
					$('#jqxGrid_Docentes').trigger('getrowdata');

					//TODO: Quitar...

					//Cerrar modal y limpiar formulario
					$('#jqxWindow_ModalAgregarPatente').jqxWindow('close');
					$('#txtPatente').val('');
					$("#jqxComboBox_idEstadoPatente").jqxComboBox('clearSelection');

					//Restarurar texto original
					$(elemento).html(txtOriginal);
				}, 2000);

			} else {
				alert('Los dos campos son requeridos, por favor completa el formulario.');
			};
		});

		$("#btnCancelarPatente").on("click", function (event) {
			Docentes_ValidacionDatos_TablaCargar("#jqxGrid_Docentes");
		});

		$('#btnAgregarPatente').click(function() {
			$('#jqxWindow_ModalAgregarPatente').jqxWindow('open');
		});

	};

	crearWidgets();
	agregarEventos();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido

function PatentesEliminarRegistro(objeto) {
	if (confirm('¿Estás seguro que deseas eliminar esta patente?') ) {
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