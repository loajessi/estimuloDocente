﻿function datosPersonalCargar(pPersonalID) {
	var PersonalSource =
	{
		datatype: "json",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idPersonal', type: 'int'},
			{name: 'idEstimulo', type: 'int'},
			{name: 'idPersona', type: 'int'},
			{name: 'numeroEmpleado', type: 'int'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipoContrato', type: 'varchar'},
			{name: 'fechaRegistroEstimulo', type: 'datetime'},
			{name: 'gradoAcademico', type: 'varchar'},
			{name: 'puestoDrectivo', type: 'varchar'},
			{name: 'asistencias', type: 'float'},
			{name: 'fechaRegistro', type: 'datetime'}
		],
		url: "modelo/modPersonalConsultar.php",
		type: 'POST',
		data: {'pPersonalID': pPersonalID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(PersonalSource);
	return dataAdapter;
}

function datosPersonalRegistroObtener(pPersonalID) {
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modPersonalConsultar.php",
		data: {iPersonalID: pPersonalID},
		type: 'POST',
		success: function (data, status, xhr) {
			var registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function PersonalTablaCargar(sControl) {
	var dataAdapter = datosPersonalCargar();
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
		columns: [
			{text: '', datafield: 'accion', width: '50px', cellsalign: 'center', editable: false, pinned: true, filterable: false, sortable: false, menu: false, cellclassname: 'cell-acciones'},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '149px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '350px'},
			{text: 'Cumplimiento de grado acad&eacute;mico', datafield: 'gradoAcademico', cellsalign: 'center', width: '195px', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var html = '<div class="ButtonGroup_gradoAcademico jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
						'<div id="btnGradoAcademico_'+row+'_Si" onclick="btn_gradoAcademico(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue" role="button" data-row="'+row+'" data-val="S">Sí</div>' +
						'<div id="btnGradoAcademico_'+row+'_No" onclick="btn_gradoAcademico(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue" role="button" data-row="'+row+'" data-val="N">No</div>' +
						'<div style="clear: both;">' +
						'</div>';
					return html;
				},
				renderer: function () {
					return '<div class="jxGrid_headerDoble txtCentrado">Cumplimiento de<br />grado acad&eacute;mico</div>';
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					if (newvalue == 1) {
						$('#cd_' + datafield).val('S');
					} else if (newvalue == 0) {
						$('#cd_' + datafield).val('N');
					} else {
						$('#cd_' + datafield).val('');
					}
				}
			},
			{text: 'Cuenta con puesto directivo o de confianza', datafield: 'puestoDrectivo', width: '195px', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					if (value=='S') {
						var html = '<div class="ButtonGroup_puestoDrectivo jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnPuestoDrectivo_'+row+'_Si" onclick="btn_puestoDrectivo(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnActivo btnCorrecto" role="button" data-row="'+row+'" data-val="S">Sí</div>' +
							'<div id="btnPuestoDrectivo_'+row+'_No" onclick="btn_puestoDrectivo(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue" role="button" data-row="'+row+'" data-val="N">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else if (value=='N') {
						var html = '<div class="ButtonGroup_puestoDrectivo jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnPuestoDrectivo_'+row+'_Si" onclick="btn_puestoDrectivo(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue" role="button" data-row="'+row+'" data-val="S">Sí</div>' +
							'<div id="btnPuestoDrectivo_'+row+'_No" onclick="btn_puestoDrectivo(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnActivo btnCorrecto" role="button" data-row="'+row+'" data-val="N">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else {
						var html = '<div class="ButtonGroup_puestoDrectivo jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnPuestoDrectivo_'+row+'_Si" onclick="btn_puestoDrectivo(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue" role="button" data-row="'+row+'" data-val="S">Sí</div>' +
							'<div id="btnPuestoDrectivo_'+row+'_No" onclick="btn_puestoDrectivo(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue" role="button" data-row="'+row+'" data-val="N">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					}

					return html;
				},
				renderer: function () {
					return '<div class="jxGrid_headerDoble txtCentrado">&iquest;Cuenta con puesto<br />directivo o de confianza?</div>';
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					if (newvalue == true) {
						$('#cd_' + datafield).val('S');
					} else if (newvalue == false) {
						$('#cd_' + datafield).val('N');
					} else {
						$('#cd_' + datafield).val('');
					}
				}
			},
			{text: 'Porcentaje de asistencia', datafield: 'asistencias', cellsalign: 'center', width: '195px', columntype: 'numberinput', cellsformat: 'f2',
				renderer: function () {
					return '<div class="jxGrid_headerDoble txtCentrado">Porcentaje de<br />asistencia</div>';
				},
				validation: function (cell, value) {
					var row = cell.row;
					if (value < 0.00 || value > 100.00) {
						$(sControl).jqxGrid('cellbeginedit', row, 'asistencias');
						return {result: false, message: "El valor debe estar entre 0 y 100"};
					} else { return true; }
				},
				createeditor: function (row, cellvalue, editor) {
					editor.jqxNumberInput({
						digits: 3,
						decimalDigits: 2,
						inputMode: 'simple',
						spinButtons: false,
						theme: 'energyblue'
					});
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					$('#cd_' + datafield).val(newvalue);
					personalAgregarModificar();
				}
			}
		]
	});
}

function PersonalComboCargar(sControl) {
	var dataAdapter = datosPersonalCargar();
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

function PersonalListBoxCargar(sControl) {
	var dataAdapter = datosPersonalCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, theme: 'enegryBlue'
		, disabled: true
	});
}

function PersonalFormularioCargar(pPersonalID) {
	var dataAdapter = datosPersonalRegistroObtener(pPersonalID);
	registro = dataAdapter.records[0];

	$('#ctrlidPersonal').val(registro.idPersonal)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlgradoAcademico').val(registro.gradoAcademico)
	$('#ctrlpuestoDrectivo').val(registro.puestoDrectivo)
	$('#ctrlasistencias').val(registro.asistencias)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function personalAgregarModificar() {

	var puestoDrectivo = $('#cd_puestoDrectivo').val(),
		gradoAcademico = $('#cd_gradoAcademico').val(),
		asistencias = $('#cd_asistencias').val(),
		row = $('#cd_RowIndex').val(),
		idEstimulo = $('#cd_idEstimulo').val(),
		idPersonal = $('#cd_idPersonal').val();

	if(gradoAcademico=='') {
		//$('#btnGradoAcademico_'+row+'_No, #btnGradoAcademico_'+row+'_Si').removeClass('btnActivo btnPeligro btnCorrecto');
		return;
	}

	if(puestoDrectivo=='') {
		//$('#btnPuestoDrectivo_'+row+'_No, #btnPuestoDrectivo_'+row+'_Si').removeClass('btnActivo btnPeligro btnCorrecto');
		//notif({msg: '<b>Debes capturar todos los datos para guardar.</b>', type: 'error', position: 'right', width: 300});
		return;
	}

	if(asistencias=='') {
		return;
	}

	var sPagina = "modelo/modPersonalAgregarModificar.php";

	//Obtener datos del row
	//var data = $("#jqxGrid_Docentes").jqxGrid('getrowdatabyid', rowId);

	//Parámetros a enviar
	var oParametros = 'idEstimulo=' + idEstimulo + '&gradoAcademicoo=' + gradoAcademico + '&puestoDrectivo=' + puestoDrectivo + '&asistencias=' + asistencias + '&idPersonal=' + idPersonal;

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
			} else {
				// Acciones posteriores a la actualizacion
				notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				$('#cd_Guardado').val('1');
			}
		}
	});
}


function personalEliminar(pRegistroID) {
	var sPagina = "../../moduloXX/modelo/modPersonalEliminar.php";
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



