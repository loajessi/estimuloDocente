function datosParqueCientificoCargar(pParqueCientificoID) {
	var ParqueCientificoSource =
	{
		datatype: "json",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idParqueCientifico', type: 'int'},
			{name: 'idEstimulo', type: 'int'},
			{name: 'idPersona', type: 'int'},
			{name: 'numeroEmpleado', type: 'int'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipoContrato', type: 'varchar'},
			{name: 'fechaRegistroEstimulo', type: 'datetime'},
			{name: 'patente', type: 'varchar'},
			{name: 'fase', type: 'varchar'},
			{name: 'fechaRegistro', type: 'datetime'}
		],
		url: "modelo/modParqueCientificoConsultar.php",
		type: 'POST',
		data: {'pParqueCientificoID': pParqueCientificoID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(ParqueCientificoSource);
	return dataAdapter;
}

function datosParqueCientificoRegistroObtener(pParqueCientificoID) {
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modParqueCientificoConsultar.php",
		data: {iParqueCientificoID: pParqueCientificoID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function ParqueCientificoTablaCargar(sControl) {
	var dataAdapter = datosParqueCientificoCargar();
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
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '120px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto'},
			{text: 'ID', datafield: 'idEstimulo', hidden: true},
			{text: 'ID', datafield: 'idParqueCientifico', hidden: true}
		]
	});
}

function ParqueCientificoComboCargar(sControl) {
	var dataAdapter = datosParqueCientificoCargar();
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

function ParqueCientificoListBoxCargar(sControl) {
	var dataAdapter = datosParqueCientificoCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, theme: 'enegryBlue'
		, disabled: true
	});
}

function ParqueCientificoFormularioCargar(pParqueCientificoID) {
	var dataAdapter = datosParqueCientificoRegistroObtener(pParqueCientificoID);
	registro = dataAdapter.records[0];

	$('#ctrlidParqueCientifico').val(registro.idParqueCientifico)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlpatente').val(registro.patente)
	$('#ctrlfase').val(registro.fase)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function parqueCientificoAgregarModificar() {
	var sPagina = "../../moduloXX/modelo/modParqueCientificoAgregarModificar.php";
	var oParametros = $('#frmFormulario').serialize();

	$.post(sPagina
		, oParametros
		, function (datos, status) {
			if (status == 'success') {
				eval(datos);
				if (json.noError > 0) {
					alert("Ocurri\u00f3 un error de base de datos: \n\n" + json.mensaje);
				}
				else {
					alert("Su informaci\u00f3n se registr\u00f3 correctamente en la base de datos.");
					// Acciones posteriores a la actualizacion
				}
			}
		}
	);
}


function parqueCientificoEliminar(pRegistroID) {
	var sPagina = "../../moduloXX/modelo/modParqueCientificoEliminar.php";
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



