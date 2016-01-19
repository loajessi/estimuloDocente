function datosPersonalCargar(pPersonalID) {
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
		editable: false,
		columns: [
			{text: '', datafield: 'accion', width: '50px', cellsalign: 'center', editable: false, pinned: true, filterable: false, sortable: false, menu: false, cellclassname: 'cell-acciones'},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '149px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '350px'},
			{text: 'Cumplimiento de grado acad&eacute;mico', datafield: 'gradoAcademico', cellsalign: 'center', width: '195px', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					if (value == '1') {
						var html = '<div class="ButtonGroup_gradoAcademico jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnGradoAcademico_'+row+'_Si" onclick="btn_gradoAcademico(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnActivo btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnGradoAcademico_'+row+'_No" onclick="btn_gradoAcademico(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else if (value == '0') {
						var html = '<div class="ButtonGroup_gradoAcademico jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnGradoAcademico_'+row+'_Si" onclick="btn_gradoAcademico(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnGradoAcademico_'+row+'_No" onclick="btn_gradoAcademico(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnActivo btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else {
						var html = '<div class="ButtonGroup_gradoAcademico jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnGradoAcademico_'+row+'_Si" onclick="btn_gradoAcademico(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnGradoAcademico_'+row+'_No" onclick="btn_gradoAcademico(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					}

					return html;
				},
				renderer: function () {
					return '<div class="jxGrid_headerDoble txtCentrado">Cumplimiento de<br />grado acad&eacute;mico</div>';
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					if (newvalue == 1) {
						$('#cd_' + datafield).val(1);
					} else if (newvalue == 0) {
						$('#cd_' + datafield).val(0);
					} else {
						$('#cd_' + datafield).val('');
					}
				}
			},
			{text: 'Cuenta con puesto directivo o de confianza', datafield: 'puestoDrectivo', width: '195px', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					if (value == '1') {
						var html = '<div class="ButtonGroup_puestoDrectivo jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnPuestoDrectivo_'+row+'_Si" onclick="btn_puestoDrectivo(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnActivo btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnPuestoDrectivo_'+row+'_No" onclick="btn_puestoDrectivo(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else if (value == '0') {
						html = '<div class="ButtonGroup_puestoDrectivo jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnPuestoDrectivo_'+row+'_Si" onclick="btn_puestoDrectivo(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnPuestoDrectivo_'+row+'_No" onclick="btn_puestoDrectivo(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnActivo btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else {
						html = '<div class="ButtonGroup_puestoDrectivo jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnPuestoDrectivo_'+row+'_Si" onclick="btn_puestoDrectivo(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnPuestoDrectivo_'+row+'_No" onclick="btn_puestoDrectivo(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
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
						$('#cd_' + datafield).val(1);
					} else if (newvalue == false) {
						$('#cd_' + datafield).val(0);
					} else {
						$('#cd_' + datafield).val('');
					}
				}
			},
			{text: 'Porcentaje de asistencia', datafield: 'asistencias', cellsalign: 'center', width: '195px', columntype: 'numberinput', cellsformat: 'f2', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var html = '<div class="jqxNumberInput_asistencias" id="jqxNumberInput_'+row+'_asistencias" data-value="'+value+'" data-row="'+row+'"></div>';
					return html;
				},
				renderer: function () {
					return '<div class="jxGrid_headerDoble txtCentrado">Porcentaje de<br />asistencia</div>';
				},
				validation: function (cell, value) {
					var row = cell.row;
					if (value < 0.00 || value > 100.00) {
						$(sControl).jqxGrid('cellbeginedit', row, 'asistencias');
						return {result: false, message: "El valor debe estar entre 0 y 100"};
					} else { return true; }
				}
			}
		]
	});

	var numRegistros = $(sControl).jqxGrid('getdatainformation').rowscount,
		registros = $(sControl).jqxGrid('getrows');
	crearCamposAuxiliares(numRegistros, registros);

	cargarInputsAsistencias();
	$(sControl).on("pagechanged", cargarInputsAsistencias);
	$(sControl).on("filter", cargarInputsAsistencias);
	$(sControl).on("sort", cargarInputsAsistencias);
}

function cargarInputsAsistencias() {
	$('.jqxNumberInput_asistencias').each(function () {
		var valor = $(this).attr('data-value');

		$(this).jqxNumberInput({
			digits: 3,
			decimalDigits: 2,
			inputMode: 'simple',
			spinButtons: false,
			spinMode: 'simple',
			textAlign: 'center',
			height: '100%',
			width: '100%',
			enableMouseWheel: false,
			min: 0,
			max: 100,
			theme: 'energyblue'
		}).jqxNumberInput('val', valor);
	});

	$('.jqxNumberInput_asistencias').change(function (event) {
		var fila = $(this).attr('data-row'),
			valor = $(this).val();

		$('#cd_f'+fila+'_asistencias').val(valor);
		$(this).attr('data-value', valor);

		personalAgregarModificar(fila);
	});
}

function crearCamposAuxiliares(numRegistros, registros) {
	var contenedor = $('#contenedorDatos');

	for(var i=0; i<numRegistros; i++) {
		contenedor.append('<input type="hidden" id="cd_f'+i+'_RowIndex" value="'+i+'" />' +
			'<input type="hidden" id="cd_f'+i+'_idEstimulo" value="'+registros[i].idEstimulo+'" />' +
			'<input type="hidden" id="cd_f'+i+'_idPersonal" value="'+registros[i].idPersonal+'" />' +
			'<input type="hidden" id="cd_f'+i+'_gradoAcademico" value="'+registros[i].gradoAcademico+'" />' +
			'<input type="hidden" id="cd_f'+i+'_puestoDrectivo" value="'+registros[i].puestoDrectivo+'" />' +
			'<input type="hidden" id="cd_f'+i+'_asistencias" value="'+registros[i].asistencias+'" />' +
			'<input type="hidden" id="cd_f'+i+'_Guardado" value="" /><br />');
	}
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

	$('#ctrlidPersonal').val(registro.idPersonal);
	$('#ctrlidEstimulo').val(registro.idEstimulo);
	$('#ctrlidPersona').val(registro.idPersona);
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado);
	$('#ctrlnombreCompleto').val(registro.nombreCompleto);
	$('#ctrltipoContrato').val(registro.tipoContrato);
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo);
	$('#ctrlgradoAcademico').val(registro.gradoAcademico);
	$('#ctrlpuestoDrectivo').val(registro.puestoDrectivo);
	$('#ctrlasistencias').val(registro.asistencias);
	$('#ctrlfechaRegistro').val(registro.fechaRegistro);
}

function personalAgregarModificar(fila) {

	var puestoDrectivo = $('#cd_f'+fila+'_puestoDrectivo').val(),
		gradoAcademico = $('#cd_f'+fila+'_gradoAcademico').val(),
		asistencias = $('#cd_f'+fila+'_asistencias').val(),
		row = $('#cd_f'+fila+'_RowIndex').val(),
		idEstimulo = $('#cd_f'+fila+'_idEstimulo').val(),
		idPersonal = $('#cd_f'+fila+'_idPersonal').val();

	if(gradoAcademico=='') {
		return;
	}

	if(puestoDrectivo=='') {
		return;
	}

	if(asistencias=='') {
		return;
	}

	var sPagina = "modelo/modPersonalAgregarModificar.php";

	//Parámetros a enviar
	var oParametros = 'idEstimulo=' + idEstimulo + '&gradoAcademico=' + gradoAcademico + '&puestoDrectivo=' + puestoDrectivo + '&asistencias=' + asistencias + '&idPersonal=' + idPersonal;

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
			} else {
				// Acciones posteriores a la actualizacion
				notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				if( idPersonal=='' || typeof idPersonal == 'undefined' || idPersonal == null ){
					$('#cd_f'+fila+'_idPersonal').val(json.idPersonal);
				}
				$('#cd_f'+fila+'_Guardado').val('1');

				// Cambiar celdas en el grid
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'gradoAcademico', gradoAcademico);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'puestoDrectivo', puestoDrectivo);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'asistencias', asistencias);
				cargarInputsAsistencias();
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



