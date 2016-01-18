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
		columns: [
			{text: '', datafield: 'accion', width: '40px', cellsalign: 'center', pinned: true, sortable: false, filterable: false, menu: false},
			{text: '', datafield: 'idInvestigacion', hidden: true},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '120px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto'},
			{text: 'ID', datafield: 'idEstimulo', hidden: true}
		]
	});

	// Configurar clics en rows
	$(sControl).bind('rowselect', function (event) {
		var row = event.args.rowindex,
			datafield = event.args.datafield,
			datarow = $(sControl).jqxGrid('getrowdata', row);

		var mensajeCargando = '<div class="txtCentrado"><h2 style="width: 500px; padding-top: 90px; margin: 0 auto; color: #ABABAB;">Cargando...</h2></div>';

		$("#detalleDatosPatentes").html(mensajeCargando);

		window.setTimeout(function(){ //Simular carga de datos
			Docentes_DetalleProyectos_CargarVista(datarow);
		}, 800);
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

	var noProyOrganismoResponsable = $('#noProyOrganismoResponsable').val(),
	    noProyInstitucionResponsable = $('#noProyInstitucionResponsable').val(),
		noProyOrganismoParticipo = $('#noProyOrganismoParticipo').val(),
		noProyInstitucionParticipo = $('#noProyInstitucionParticipo').val(),
		fechaInicioSNI = $('#jqxDateTimeInput_FechaInicioSNI').jqxDateTimeInput('getDate'),
		fechaTerminoSNI = $('#jqxDateTimeInput_FechaTerminoSNI').jqxDateTimeInput('getDate'),
		nivelSNI = $("#jqxComboBox_NivelSNI").jqxComboBox('val'),
		botonSNI = $('#hdnBotonSNI').val(),
		idEstimulo = $('#hdnIdEstimulo').val(),
		idInvestigacion = $('#hdnIdInvestigacion').val();

	if (noProyOrganismoResponsable === '' || noProyInstitucionResponsable === '' || noProyOrganismoParticipo === '' || noProyInstitucionParticipo === '' || botonSNI === '') {
		return null;
	}

	if (botonSNI=='0') {
		botonSNI = 1;

		if (nivelSNI=='' || fechaInicioSNI=='' || fechaTerminoSNI=='' || fechaInicioSNI==null || fechaTerminoSNI==null){
			return null;
		}

	} else if (botonSNI=='1') {
		botonSNI = 0;
	}

	var sPagina = "modelo/modInvestigacionAgregarModificar.php";

	//Serializar formulario
	var oParametros;

	/*var oParametros = 'idEstimulo=' + idEstimulo +
		'&noProyOrganismoResponsable' + noProyOrganismoResponsable +
		'&noProyInstitucionResponsable' + noProyInstitucionResponsable +
		'&noProyOrganismoParticipo' + noProyOrganismoParticipo +
		'&noProyInstitucionParticipo' + noProyInstitucionParticipo +
		'&fechaInicioSNI' + fechaInicioSNI +
		'&fechaTerminoSNI' + fechaTerminoSNI +
		'&nivelSNI' + nivelSNI +
		'&idInvestigacion' + idInvestigacion;*/

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				//notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
				return false;
			}
			else {
				//notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				// Acciones posteriores a la actualizacion
				return true;
			}
		}
	});
}
