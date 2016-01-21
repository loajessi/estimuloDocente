function datosCentroComputoCargar(pCentroComputoID) {
	var CentroComputoSource =
	{
		datatype: "json",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idCentroComputo', type: 'int'},
			{name: 'idEstimulo', type: 'int'},
			{name: 'idPersona', type: 'int'},
			{name: 'numeroEmpleado', type: 'int'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipoContrato', type: 'varchar'},
			{name: 'fechaRegistroEstimulo', type: 'datetime'},
			{name: 'noMultimedioElaborado', type: 'smallint'}
		],
		url: "modelo/modCentroComputoConsultar.php",
		type: 'POST',
		data: {'pCentroComputoID': pCentroComputoID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(CentroComputoSource);
	return dataAdapter;
}

function datosCentroComputoRegistroObtener(pCentroComputoID) {
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modCentroComputoConsultar.php",
		data: {iCentroComputoID: pCentroComputoID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function CentroComputoTablaCargar(sControl) {
	var dataAdapter = datosCentroComputoCargar();
	$(sControl).jqxGrid({
		width: '99.5%',
		height: '455px',
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
			{text: '', datafield: 'accion', width: '50px', cellsalign: 'center', editable: false, pinned: true, filterable: false, sortable: false, menu: false},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '141px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '340px'},
			{text: 'Tipo', datafield: 'tipoContrato', cellsalign: 'center', editable: false, width: '161px'},
			{text: 'Env&iacute;o de solicitud', datafield: 'fechaRegistroEstimulo', cellsalign: 'center', editable: false, width: '173px'},
			{text: '', datafield: 'idCentroComputo', hidden: true},
			{text: 'No. multimedios educativos elaborados', datafield: 'noMultimedioElaborado', width: '269px', cellsalign: 'center', columntype: 'numberinput',
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
					if (oldvalue != newvalue) {
						centroComputoAgregarModificar(row, newvalue);
					}
				}
			}
		]
	});
}

function CentroComputoComboCargar(sControl) {
	var dataAdapter = datosCentroComputoCargar();
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

function CentroComputoListBoxCargar(sControl) {
	var dataAdapter = datosCentroComputoCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, theme: 'enegryBlue'
		, disabled: true
	});
}

function CentroComputoFormularioCargar(pCentroComputoID) {
	var dataAdapter = datosCentroComputoRegistroObtener(pCentroComputoID);
	registro = dataAdapter.records[0];

	$('#ctrlidCentroComputo').val(registro.idCentroComputo)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlnoMultimedioElaborado').val(registro.noMultimedioElaborado)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function centroComputoAgregarModificar(rowid, valor) {
	if (rowid == -1) return;
	//$("#jqxGrid_Docentes").jqxGrid('endrowedit', rowid, false); // false = confirma cambios

	var sPagina = "modelo/modCentroComputoAgregarModificar.php";

	//Obtener datos del row
	var data = $("#jqxGrid_Docentes").jqxGrid('getrowdatabyid', rowid);

	//Parámetros a enviar
	var oParametros = 'idEstimulo=' + data.idEstimulo + '&noMultimedioElaborado=' + valor + '&idCentroComputo=' + data.idCentroComputo;

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
			} else {
				// Acciones posteriores a la actualizacion
				notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});

			}
		}
	});
}

