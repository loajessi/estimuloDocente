function datosInvestigacionCargar(pInvestigacionID) {
	var InvestigacionSource =
	{
		datatype: "json",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idInvestigacion', type: 'int'},
			{name: 'idEstimulo', type: 'int'},
			{name: 'idPersona', type: 'int'},
			{name: 'numeroEmpleado', type: 'int'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipoContrato', type: 'varchar'},
			{name: 'fechaRegistroEstimulo', type: 'datetime'},
			{name: 'reconocimientoSNI', type: 'varchar'},
			{name: 'fechaInicioSNI', type: 'datetime'},
			{name: 'fechaTerminoSNI', type: 'datetime'},
			{name: 'nivelSNI', type: 'varchar'},
			{name: 'noProyOrganismoResponsable', type: 'int'},
			{name: 'noProyInstitucionResponsable', type: 'int'},
			{name: 'noProyOrganismoParticipo', type: 'int'},
			{name: 'noProyInstitucionParticipo', type: 'int'},
			{name: 'fechaRegistro', type: 'datetime'}
		],
		url: "modelo/modInvestigacionConsultar.php",
		type: 'POST',
		data: {'pInvestigacionID': pInvestigacionID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(InvestigacionSource);
	return dataAdapter;
}

function datosInvestigacionRegistroObtener(pInvestigacionID) {
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modInvestigacionConsultar.php",
		data: {iInvestigacionID: pInvestigacionID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function InvestigacionTablaCargar(sControl) {
	var dataAdapter = datosInvestigacionCargar();

	/*var keyboardHandler = function (event) {
		var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
		if ((key >= 33 && key <= 36) || key == 37 || key == 39) {
			return true;
		} else if (key==38) { //Flecha arriba
			var filaActual = $(sControl).jqxGrid('getselectedrowindex');
			$(sControl).jqxGrid('selectrow', filaActual-1);
			cargarInputsAsistencias();
			return true;
		} else if (key==40) { //Flecha abajo
			var filaActual = $(sControl).jqxGrid('getselectedrowindex');
			$(sControl).jqxGrid('selectrow', filaActual+1);
			cargarInputsAsistencias();
			return true;
		}
	};*/

	$(sControl).jqxGrid({
		width: '99.5%',
		height: '100%',
		source: dataAdapter,
		theme: 'energyblue',
		rowsheight: 40,
		localization: getLocalization('es'),
		autoshowfiltericon: true,
		filterable: true,
		sortable: true,
		pageable: true,
		editable: false,
		pagermode: 'simple',
		pagerbuttonscount: 6,
		keyboardnavigation: false,
		columns: [
			{text: '', datafield: 'accion', width: '40px', cellsalign: 'center', pinned: true, sortable: false, filterable: false, menu: false},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '120px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto'},
			{text: '', datafield: 'idEstimulo', hidden: true},
			{text: '', datafield: 'idInvestigacion', hidden: true},
			{text: '', datafield: 'reconocimientoSNI', hidden: true},
			{text: '', datafield: 'fechaInicioSNI', hidden: true},
			{text: '', datafield: 'fechaTerminoSNI', hidden: true},
			{text: '', datafield: 'nivelSNI', hidden: true},
			{text: '', datafield: 'noProyOrganismoResponsable', hidden: true},
			{text: '', datafield: 'noProyInstitucionResponsable', hidden: true},
			{text: '', datafield: 'noProyOrganismoParticipo', hidden: true},
			{text: '', datafield: 'noProyInstitucionParticipo', hidden: true},
		]
	});

	// Configurar clics en rows
	$(sControl).bind('rowselect', function (event) {
		var row = event.args.rowindex,
			datafield = event.args.datafield,
			datarow = $(sControl).jqxGrid('getrowdata', row);

		$('#detalleDatosProyecto > .animated').removeClass('slideInLeft').addClass('slideOutLeft');
		var datarow = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', row);

		Docentes_DetalleProyectos_CargarVista(datarow);
	});
}

function InvestigacionComboCargar(sControl) {
	var dataAdapter = datosInvestigacionCargar();
	$(sControl).jqxComboBox({ // o .jqxInput
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, animationType: 'fade'
		, theme: 'energyblue'
		, searchMode: 'containsignorecase'
		, autoComplete: true
		, placeHolder: "seleccione..."
	});
}

function InvestigacionListBoxCargar(sControl) {
	var dataAdapter = datosInvestigacionCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, theme: 'enegryBlue'
		, disabled: true
	});
}

function InvestigacionFormularioCargar(pInvestigacionID) {
	var dataAdapter = datosInvestigacionRegistroObtener(pInvestigacionID);
	registro = dataAdapter.records[0];

	$('#ctrlidInvestigacion').val(registro.idInvestigacion)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlreconocimientoSNI').val(registro.reconocimientoSNI)
	$('#ctrlfechaInicioSNI').val(registro.fechaInicioSNI)
	$('#ctrlfechaTerminoSNI').val(registro.fechaTerminoSNI)
	$('#ctrlnivelSNI').val(registro.nivelSNI)
	$('#ctrlnoProyOrganismoResponsable').val(registro.noProyOrganismoResponsable)
	$('#ctrlnoProyInstitucionResponsable').val(registro.noProyInstitucionResponsable)
	$('#ctrlnoProyOrganismoParticipo').val(registro.noProyOrganismoParticipo)
	$('#ctrlnoProyInstitucionParticipo').val(registro.noProyInstitucionParticipo)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function investigacionAgregarModificar() {
	var txtOriginal = $('#btnGuardar').html();
	$('#btnGuardar').html("Guardando...");

	var noProyOrganismoResponsable = $('#noProyOrganismoResponsable').val(),
	    noProyInstitucionResponsable = $('#noProyInstitucionResponsable').val(),
		noProyOrganismoParticipo = $('#noProyOrganismoParticipo').val(),
		noProyInstitucionParticipo = $('#noProyInstitucionParticipo').val(),
		fechaInicioSNI = $('#jqxDateTimeInput_FechaInicioSNI').jqxDateTimeInput('getDate'),
		fechaTerminoSNI = $('#jqxDateTimeInput_FechaTerminoSNI').jqxDateTimeInput('getDate'),
		nivelSNI = $("#jqxDropDownList_NivelSNI").jqxDropDownList('getSelectedItem'),
		botonSNI = $('#hdnBotonSNI').val(),
		idEstimulo = $('#hdnIdEstimulo').val(),
		idInvestigacion = $('#hdnIdInvestigacion').val();

	if (noProyOrganismoResponsable === '' || noProyInstitucionResponsable === '' || noProyOrganismoParticipo === '' || noProyInstitucionParticipo === '' || botonSNI === '') {
		notif({msg: 'Todos los campos son requeridos', type: 'warning', position: 'right', width: 400});
		return null;
	}

	if (botonSNI=='1') {

		if (nivelSNI==null) {
			notif({msg: 'Se requiere Nivel SNI', type: 'warning', position: 'right', width: 400});
			return;
		} else {
			nivelSNI = nivelSNI.value;
		}

		if (nivelSNI==''){
			notif({msg: 'Debe ingresar el Nivel SNI', type: 'warning', position: 'right', width: 400});
			return null;
		}

		if (fechaInicioSNI=='' || fechaInicioSNI==null){
			notif({msg: 'Debe ingresar Fecha de inicio', type: 'warning', position: 'right', width: 400});
			return null;
		}

		if (fechaTerminoSNI=='' || fechaTerminoSNI==null){
			notif({msg: 'Debe ingresar Fecha de término', type: 'warning', position: 'right', width: 400});
			return null;
		}

		if (fechaTerminoSNI.getTime() <= fechaInicioSNI.getTime()) {
			notif({msg: 'La fecha de término debe ser posterior a la fecha de inicio', type: 'warning', position: 'right', autohide: false, width: 550});
			return;
		}


	}

	var sPagina = "modelo/modInvestigacionAgregarModificar.php";

	//Serializar formulario
	var oParametros = $('#frmModalAgregarProyecto').serialize();

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 400});
				$('#btnGuardar').html(txtOriginal);
			}
			else {
				notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				// Acciones posteriores a la actualizacion
				$('#btnGuardar').html(txtOriginal);

				//Actualizar Grid
				if (idInvestigacion=='') {
					$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'idInvestigacion', json.idInvestigacion);
				}
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'reconocimientoSNI', botonSNI);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'fechaInicioSNI', fechaInicioSNI);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'fechaTerminoSNI', fechaTerminoSNI);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'nivelSNI', nivelSNI);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'noProyOrganismoResponsable', noProyOrganismoResponsable);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'noProyInstitucionResponsable', noProyInstitucionResponsable);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'noProyOrganismoParticipo', noProyOrganismoParticipo);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex'), 'noProyInstitucionParticipo', noProyInstitucionParticipo);
			}
		}
	});
}
