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
	var keyboardHandler = function (event) {
		var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
		if ((key >= 33 && key <= 36) || key == 37 || key == 39) {
			return true;
		} else if (key==38) { //Flecha arriba
			var filaActual = $(sControl).jqxGrid('getselectedrowindex');
			$(sControl).jqxGrid('selectrow', filaActual-1);
			cargarInputsNumeroHojas();
			return true;
		} else if (key==40) { //Flecha abajo
			var filaActual = $(sControl).jqxGrid('getselectedrowindex');
			$(sControl).jqxGrid('selectrow', filaActual+1);
			cargarInputsNumeroHojas();
			return true;
		}
	};

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
			{ text: '', datafield: 'accion', width:'40px', cellsalign: 'center', pinned: true, filterable: false, sortable: false, menu:false },
			{ text: '', datafield: 'idEstimulo', hidden: true },
			{ text: '', datafield: 'idSecretario', hidden: true },
			{ text: 'No. empleado', align: 'center', datafield: 'numeroEmpleado', cellsalign: 'center', width: '130px'},
			{ text: 'Nombre completo', datafield: 'nombreCompleto', width: '359px'},
			{ text: 'Tipo',align: 'center', datafield: 'tipoContrato', width: '100px', cellsalign: 'center'},
			{ text: 'Env&iacute;o de solicitud', align: 'center', datafield: 'fechaRegistroEstimulo', cellsalign: 'center' , width: '160px'},
			{ text: 'Validaci&oacute;n', datafield: 'validado', width: '155px', align: 'center', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					if (value == '1') {
						var html = '<div class="ButtonGroup_validado jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnValidado_'+row+'_Si" onclick="btn_validado(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnActivo btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnValidado_'+row+'_No" onclick="btn_validado(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else if (value == '0') {
						var html = '<div class="ButtonGroup_validado jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnValidado_'+row+'_Si" onclick="btn_validado(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnValidado_'+row+'_No" onclick="btn_validado(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnActivo btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else {
						var html = '<div class="ButtonGroup_validado jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnValidado_'+row+'_Si" onclick="btn_validado(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnValidado_'+row+'_No" onclick="btn_validado(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					}
					return html;
				},
			},
			{text: 'No. hojas',align: 'center', datafield: 'numeroHojas', cellsalign: 'center', columntype: 'numberinput', cellsformat: 'f2', editable: false,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var html = '<input type="number" min="0" max="255" step="1" class="inputNumeroHojas gridInput" id="input_'+row+'_numeroHojas" value="'+value+'" data-value="'+value+'" data-row="'+row+'" />';
					return html;
				},
				validation: function (cell, value) {
					if (value < 0 || value > 255) {
						return { result: false, message: "El valor debe estar entre 0 y 255" };
					} else return true;
				}
			}
		]

	});

	var numRegistros = $(sControl).jqxGrid('getdatainformation').rowscount,
		registros = $(sControl).jqxGrid('getrows'),
		camposAuxiliares = ['idEstimulo', 'idSecretario', 'validado', 'numeroHojas'];

	crearCamposAuxiliares(numRegistros, registros, camposAuxiliares);

	cargarInputsNumeroHojas();
	$(sControl).on("pagechanged", cargarInputsNumeroHojas);
	$(sControl).on("filter", cargarInputsNumeroHojas);
	$(sControl).on("sort", cargarInputsNumeroHojas);
}

function validarNumero(valor) {
	var patron = /^([1]?[0-9]?[0-9]|[2]?([5][0-5]|[0-4][0-9]))$/g;
	return patron.test(valor);
}

function cargarInputsNumeroHojas() {
	$('.inputNumeroHojas').each(function () {
		$(this).off('change').on('change', function(event) {
			var fila = parseInt( $(this).attr('data-row') ),
				numAnterior = parseInt( $(this).attr('data-value')),
				num = parseInt( $(this).val() );

			var patron = /^([1]?[0-9]?[0-9]|[2]?([5][0-5]|[0-4][0-9]))$/g,
				check = patron.test(num);

			if (check) {
				$('#cd_f' + fila + '_numeroHojas').val(num);
				secretarioAcademicoAgregarModificar(fila);
				event.stopPropagation();
			} else {
				notif({
					msg: 'Ingrese n&uacute;mero válido de hojas',
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
			$(this).on('mousewheel.disableScroll', function (e) {
				e.preventDefault()
			})
		});

		$(this).off('blur').on('blur', function (e) {
			$(this).off('mousewheel.disableScroll')
		});

		$(this).off('keyup').on('keyup', function(event) {
			var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
			if (key == 13) {
				var fila = parseInt( $(this).attr('data-row')),
					dataval = $(this).attr('data-value'),
					val = $(this).val();
				if (dataval != val) {
					$(this).trigger('change');
				}
			} else {
				var valor = $(this).val(),
					fila = parseInt( $(this).attr('data-row'));
				$('#cd_f' + fila + '_numeroHojas').val( valor );
			}
		});
	});
}

function crearCamposAuxiliares(numRegistros, registros, camposAuxiliares) {
	var contenedor = $('#contenedorDatos'),
		tipoCampo = 'hidden';

	for(var i=0; i<numRegistros; i++) {
		contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_RowIndex" value="'+i+'" />');
		for (var arr = 0; arr < camposAuxiliares.length; arr++) {
			contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_'+camposAuxiliares[arr]+'" value="'+registros[i][camposAuxiliares[arr]]+'" />');
		}
		contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_Guardado" value="" /><br />');
	}
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

function secretarioAcademicoAgregarModificar(fila) {

	var validado = $('#cd_f'+fila+'_validado').val(),
		numeroHojas = $('#cd_f'+fila+'_numeroHojas').val(),
		row = $('#cd_f'+fila+'_RowIndex').val(),
		idEstimulo = $('#cd_f'+fila+'_idEstimulo').val(),
		idSecretario = $('#cd_f'+fila+'_idSecretario').val();

	if(validado =='') { return; }
	if(numeroHojas =='') { return;}
	else {
		if (!validarNumero(parseInt(numeroHojas))) return;
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
				if( idSecretario == '' || typeof idSecretario == 'undefined' || idSecretario == null ){
					$('#cd_f'+fila+'_idSecretario').val(json.idSecretario);
				}
				$('#cd_f'+fila+'_Guardado').val('1');
				// Cambiar celdas en el grid
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'validado', validado);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'numeroHojas', numeroHojas);
				cargarInputsNumeroHojas();
			}
		}
	});
}




