function datosSecretarioAcademicoCargar(pSecretarioAcademicoID) {
	var SecretarioAcademicoSource =
	{
		datatype: "json",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idSecretario', type: 'int'},
			{name: 'idEstimulo', type: 'int'},
			{name: 'idPersona', type: 'int'},
			{name: 'numeroEmpleado', type: 'int'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipoContrato', type: 'varchar'},
			{name: 'fechaRegistroEstimulo', type: 'datetime'},
			{name: 'validado', type: 'varchar'},
			{name: 'numeroHojas', type: 'tinyint'},
			{name: 'fechaRegistro', type: 'datetime'}
		],
		url: "modelo/modSecretarioAcademicoConsultar.php",
		type: 'POST',
		data: {'pSecretarioAcademicoID': pSecretarioAcademicoID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(SecretarioAcademicoSource);
	return dataAdapter;
}

function datosSecretarioAcademicoRegistroObtener(pSecretarioAcademicoID) {
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modSecretarioAcademicoConsultar.php",
		data: {iSecretarioAcademicoID: pSecretarioAcademicoID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function SecretarioAcademicoTablaCargar(sControl) {
	var dataAdapter = datosSecretarioAcademicoCargar();
	$(sControl).jqxGrid({
		width: '99.5%',
		height: "455px",
		source: dataAdapter,
		rowsheight: 40,
		sortable: true,
		theme: 'energyblue',
		localization: getLocalization('es'),
		filterable: true,
		autoshowfiltericon: true,
		pageable: true,
		editable: true,
		pagermode: 'simple',
		pagerbuttonscount: 10,
		columns: [
			{ text: '', datafield: 'accion', width:'10%', cellsalign: 'center', editable: false, pinned: true, filterable: false, sortable: false, menu:false },
			{ text: '', datafield: 'idEstimulo', hidden: true },
			{ text: '', datafield: 'idsecretario', hidden: true },
			{ text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '15%'},
			{ text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '40%'},
			{ text: 'Tipo', datafield: 'tipoContrato', editable: false, width: '5%', cellsalign: 'center'},
			{ text: 'Env&iacute;o de solicitud', datafield: 'fechaRegistroEstimulo', editable: false, cellsalign: 'center' , width: '15%'},
			{ text: 'No. hojas', datafield: 'numeroHojas', width: '15%', cellsalign: 'center', columntype: 'numberinput',
				createeditor: function (row, cellvalue, editor) {
					editor.jqxNumberInput({
						digits: 3,
						decimalDigits: 0,
						min: 0,
						inputMode: 'advanced',
						spinMode: 'simple',
						spinButtonsStep: 1,
						spinButtons: true,
						theme: 'energyblue'
					});
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					if (oldvalue != newvalue) {secretarioAcademicoAgregarModificar(row, newvalue);
					}
				}
			}
		]

	});
}

function SecretarioAcademicoComboCargar(sControl) {
	var dataAdapter = datosSecretarioAcademicoCargar();
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

function SecretarioAcademicoListBoxCargar(sControl) {
	var dataAdapter = datosSecretarioAcademicoCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, theme: 'enegryBlue'
		, disabled: true
	});
}

function SecretarioAcademicoFormularioCargar(pSecretarioAcademicoID) {
	var dataAdapter = datosSecretarioAcademicoRegistroObtener(pSecretarioAcademicoID);
	registro = dataAdapter.records[0];

	$('#ctrlidSecretario').val(registro.idSecretario)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlvalidado').val(registro.validado)
	$('#ctrlnumeroHojas').val(registro.numeroHojas)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function secretarioAcademicoAgregarModificar(rowid, valor) {
	if (rowid == -1) return;
	//$("#jqxGrid_Docentes").jqxGrid('endrowedit', rowid, false); // false = confirma cambios

	var sPagina = "modelo/modSecretarioAcademicoAgregarModificar.php";

	//Obtener datos del row
	var data = $("#jqxGrid_Docentes").jqxGrid('getrowdatabyid', rowid);

	//Parámetros a enviar
	var oParametros = 'idEstimulo=' + data.idEstimulo + '&numeroHojas=' + valor + '&idSecretario=' + data.idSecretario;

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
			} else {
				notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				// Acciones posteriores a la actualizacion

			}
		}
	});
}


function secretarioAcademicoEliminar(pRegistroID) {
	var sPagina = "../../moduloXX/modelo/modSecretarioAcademicoEliminar.php";
	var oParametros = {'pRegistroID': pRegistroID}

	$.post(sPagina
		, oParametros
		, function (datos, status) {
			if (status == 'success') {
				eval(datos);
				if (json.noError > 0) {
					alert("Ocurri\u00f3 un error de base de datos: \n\n" + json.mensaje);
				}
				else {
					alert("Su informaci\u00f3n se elimin\u00f3 correctamente en la base de datos.");
					// Acciones posteriores a la actualizacion
				}
			}
		}
	);
}



