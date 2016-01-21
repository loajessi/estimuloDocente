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

	var keyboardHandler = function (event) {
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
	};

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
		pagermode: 'simple',
		pagerbuttonscount: 10,
		handlekeyboardnavigation: keyboardHandler,
		//keyboardnavigation: false,
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
				}
			},
			{text: 'Porcentaje de asistencia', datafield: 'asistencias', cellsalign: 'center', width: '195px', columntype: 'numberinput', cellsformat: 'f2', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var html = '<input type="number" min="0" max="100" step="0.01" class="inputAsistencias gridInput" id="input_'+row+'_asistencias" value="'+value+'" data-value="'+value+'" data-row="'+row+'" />';
					return html;
				},
				renderer: function () {
					return '<div class="jxGrid_headerDoble txtCentrado">Porcentaje de<br />asistencia</div>';
				}
			}
		]
	});

	var numRegistros = $(sControl).jqxGrid('getdatainformation').rowscount,
		registros = $(sControl).jqxGrid('getrows'),
		camposAuxiliares = ['idEstimulo', 'idPersonal', 'gradoAcademico', 'puestoDrectivo', 'asistencias'];

	crearCamposAuxiliares(numRegistros, registros, camposAuxiliares);

	cargarInputsAsistencias();
	$(sControl).on("pagechanged", cargarInputsAsistencias);
	$(sControl).on("filter", cargarInputsAsistencias);
	$(sControl).on("sort", cargarInputsAsistencias);
}

function cargarInputsAsistencias() {
	$('.inputAsistencias').each(function () {
		$(this).off('change').on('change', function(event) {
			var fila = parseInt( $(this).attr('data-row') ),
				filaSig = fila + 1,
				numAnterior = parseFloat( $(this).attr('data-value')),
				num = parseFloat( $(this).val() );

			var valor =+ num.toFixed(2);

			var patron = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/g,
				check = patron.test(valor);

			if (check) {
				$('#cd_f' + fila + '_asistencias').val(valor);
				$(this).val(num).select();
				personalAgregarModificar(fila);
				event.stopPropagation();
			} else {
				notif({
					msg: 'Ingrese un porcentaje válido de asistencia',
					type: 'warning',
					position: 'right',
					autohide: true,
					width: 500
				});
				$(this).val(numAnterior).select();
				$('#jqxGrid_Docentes').jqxGrid('selectrow', fila);
			}
		});

		$(this).off('focus').on('focus', function() {
			$(this).select();
		});

		$(this).off('keyup').on('keyup', function(event) {
			var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
			if (key == 13) {
				var fila = parseInt( $(this).attr('data-row') ),
					filaSig = fila+1;

				if ($(this).attr('data-value') != $(this).val()) {
					$(this).trigger('change');
				}

				$('#jqxGrid_Docentes').jqxGrid('selectrow', filaSig);
				$('#input_'+filaSig+'_asistencias').focus().select();
			}
		});
	});
}

function crearCamposAuxiliares(numRegistros, registros, camposAuxiliares) {
	var contenedor = $('#contenedorDatos'),
		tipoCampo = 'text';

	for(var i=0; i<numRegistros; i++) {
		contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_RowIndex" value="'+i+'" />');
		for (var arr = 0; arr < camposAuxiliares.length; arr++) {
			contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_'+camposAuxiliares[arr]+'" value="'+registros[i][camposAuxiliares[arr]]+'" />');
		}
		contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_Guardado" value="" /><br />');
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