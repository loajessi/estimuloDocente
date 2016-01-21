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
		editable: false,
		pagermode: 'simple',
		pagerbuttonscount: 10,
		columns: [
			{ text: '', datafield: 'accion', width:'50px', cellsalign: 'center', pinned: true, filterable: false, sortable: false, menu:false },
			{ text: '', datafield: 'idEstimulo', hidden: true },
			{ text: '', datafield: 'idSecretario', hidden: true },
			{ text: 'No. empleado', align: 'center', datafield: 'numeroEmpleado', cellsalign: 'center', width: '130px'},
			{ text: 'Nombre completo', datafield: 'nombreCompleto', width: '359px'},
			{ text: 'Tipo',align: 'center', datafield: 'tipoContrato', width: '140px', cellsalign: 'center'},
			{ text: 'Env&iacute;o de solicitud', align: 'center', datafield: 'fechaRegistroEstimulo', cellsalign: 'center' , width: '160px'},
			{ text: 'Validaci&oacute;n', datafield: 'validado', width: '155px', align: 'center',
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var temp = $('#cd_f'+row+'_validado').val();

					if ( temp != "" && typeof temp != 'undefined') {
						value = temp;
					}

					if (value == '1') {
						var html = '<div class="ButtonGroup_validado jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnValidado_'+row+'_Si" onclick="btn_validado(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnActivo btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnValidado_'+row+'_No" onclick="btn_validado(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else if (value == '0') {
						var html = '<div class="ButtonGroup_becaFederal jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnValidado_'+row+'_Si" onclick="btn_validado(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnValidado_'+row+'_No" onclick="btn_validado(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnActivo btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else {
						var html = '<div class="ButtonGroup_becaFederal jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnValidado_'+row+'_Si" onclick="btn_validado(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnValidado_'+row+'_No" onclick="btn_validado(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					}

					return html;
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					$('#cd_f'+row+'_'+datafield).val(newvalue);
					if (oldvalue!=newvalue) {secretarioAcademicoAgregarModificar()(row);}
				}
			},

			{ text: 'No. hojas',align: 'center', datafield: 'numeroHojas', width: '140px', cellsalign: 'center', columntype: 'numberinput',
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var html = '<input type="number" min="0" max="100" step="1" class="gridInput" id="input_'+row+'_numeroHojas" value="'+value+'" data-value="'+value+'" data-row="'+row+'" />';
					return html;
				},
			}
		]

	});

	var numRegistros = $(sControl).jqxGrid('getdatainformation').rowscount,
		registros = $(sControl).jqxGrid('getrows'),
		camposAuxiliares = ['idEstimulo', 'idSecretario', 'validado', 'numeroHojas'];

	crearCamposAuxiliares(numRegistros, registros, camposAuxiliares);

	cargarInputsAsistencias();
	$(sControl).on("pagechanged", cargarInputsAsistencias);
	$(sControl).on("filter", cargarInputsAsistencias);
	$(sControl).on("sort", cargarInputsAsistencias);
}


function cargarInputsNumeroHojas() {
	$('.gridInput').each(function () {
		$(this).off('change').on('change', function(event) {
			var fila = $(this).attr('data-row'),
				numAnterior = parseFloat( $(this).attr('data-value')),
				num = parseFloat( $(this).val() );

			var valor =+ num.toFixed(2);

			var patron = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/g,
				check = patron.test(valor);

			if (check) {
				$('#cd_f' + fila + '_numeroHojas').val(valor);
				$(this).val(num).select();
				secretarioAcademicoAgregarModificar(fila);
				event.stopPropagation();
			} else {
				notif({
					msg: 'Ingrese el n&uacute;mero de hojas',
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
				$('#input_'+filaSig+'_numeroHojas').focus().select();
			}
		});
	});
}
///////////////////////////////////////////////////////////////////////


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

function secretarioAcademicoAgregarModificar(fila) {

	var idSecretario = $('#cd_f'+fila+'_idSecretario').val(),
		idEstimulo = $('#cd_f'+fila+'_idEstimulo').val(),
		validado = $('#cd_f'+fila+'_validado').val(),
		numeroHojas = $('#cd_f'+fila+'_numeroHojas').val(),
		row = $('#cd_f'+fila+'_RowIndex').val();

	if(validado=='') {;
		return;
	}

	if(numeroHojas=='') {
		return;
	}


	var sPagina = "modelo/modSecretarioAcademicoAgregarModificar.php";

	//Parámetros a enviar
	var oParametros = 'idEstimulo=' + idEstimulo + '&validado=' + validado + '&numeroHojas=' + numeroHojas + '&idSecretario=' + idSecretario;

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
			} else {
				// Acciones posteriores a la actualizacion
				notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				if( idSecretario=='' || typeof idSecretario == 'undefined' || idSecretario == null ){
					$('#cd_f'+fila+'_idSecretario').val(json.idSecretario);
				}
				$('#cd_f'+fila+'_Guardado').val('1');

				// Cambiar celdas en el grid
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'validado', gradoAcademico);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'numeroHojas', puestoDrectivo);
				cargarInputsNumeroHojas();
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



