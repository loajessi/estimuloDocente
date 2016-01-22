// Funci�n de inicializaci�n de la vista

function detallePatentesInicializar(pEstimuloID) {

	var crearWidgets = function () {

		Docentes_DetallePatentes_TablaCargar('#jqxGrid_DetallePatentes', pEstimuloID);
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

		$("#jqxComboBox_idEstadoPatente").jqxComboBox({autoComplete: true, placeHolder: "Seleccione un elemento de la lista", searchMode: 'containsignorecase' });

	};

	var agregarEventos = function () {
		$("#btnCancelarPatente").on("click", function (event) {
			PatenteCerrarModal();
		});

		$('#btnAgregarPatente').click(function() {
			$('#jqxWindow_ModalAgregarPatente').jqxWindow('open');
			$('#jqxWindow_ModalAgregarPatente').jqxWindow('setTitle', 'Agregar patente');
			formularioParqueReiniciar();
			$("#hdnEstimuloID").val(pEstimuloID);
		});

		$("#btnValidarNingunaPatente").click (function (event){
			var data = $("#jqxGrid_DetallePatentes").jqxGrid('getrows');

			if(data.length > 0) {

				if(!confirm('Se eliminarán las patentes que ya haya registrado, de clic en Aceptar si desea continuar.'))
					return;

				for(var i=0; i<data.length; i++){
					var idEstimulo = data[i].idEstimulo;
					var idParqueCientifico = data[i].idParqueCientifico;

					parqueCientificoEliminar(idParqueCientifico, idEstimulo, 0);
				}
			}
			else
				validarConNingunaPatente(pEstimuloID);
		});

	};

	crearWidgets();
	agregarEventos();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicializaci�n de contenido

function patenteAgregarOK(){
	//Validar datos
	var nombrePatente = $('#txtPatente').val(),
		estadoPatente = $('#jqxComboBox_idEstadoPatente').jqxComboBox('getSelectedIndex');

	if (estadoPatente != -1 && nombrePatente != "") {
			parqueCientificoAgregarModificar();
	} else {
			alert('Los dos campos son requeridos, por favor completa el formulario.');
	};
}

function validarConNingunaPatente(idEstimulo){

	var dataAdapter= datosParqueCientificoRegistroObtener(-1, idEstimulo, 1);

	if(dataAdapter != null) return;

	formularioParqueReiniciar();
	$("#hdnEstimuloID").val(idEstimulo);
	$('#txtPatente').val('Ninguna');
	$("#jqxComboBox_idEstadoPatente").val(' ');
	parqueCientificoAgregarModificar();
}

function parqueCientificoEditar(piParqueCientificoID, piEstimuloID){
	$('#jqxWindow_ModalAgregarPatente').jqxWindow('open');
	$('#jqxWindow_ModalAgregarPatente').jqxWindow('setTitle', 'Editar patente');
	$("#hdnEstimuloID").val(piEstimuloID);
	$("#hdnParqueCientificoID").val(piParqueCientificoID);
	ParqueCientificoFormularioCargar();
}

function PatenteCerrarModal(){
	$('#jqxWindow_ModalAgregarPatente').jqxWindow('close');
	formularioParqueReiniciar();
}

function formularioParqueReiniciar(){
	$('#txtPatente').val('');
	$("#jqxComboBox_idEstadoPatente").jqxComboBox('clearSelection');
	$("#hdnEstimuloID").val(0);
	$("#hdnParqueCientificoID").val(0);
}