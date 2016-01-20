function datosRelacionesInternacionalesCargar(pRelacionesInternacionalesID){
	var RelacionesInternacionalesSource =
	{
		datatype: "json",
		datafields: [
			{name:'accion',type:'string'},
			{name:'idRelacionesInternacionales', type:'int'},
			{name:'idEstimulo', type:'int'},
			{name:'idPersona', type:'int'},
			{name:'numeroEmpleado', type:'int'},
			{name:'nombreCompleto', type:'varchar'},
			{name:'tipoContrato', type:'varchar'},
			{name:'fechaRegistroEstimulo', type:'datetime'},
			{name:'becaFederal', type:'varchar'},
			{name:'fechaInicioBecaFederal', type:'datetime'},
			{name:'fechaTerminoBecaFederal', type:'datetime'},
			{name:'fechaRegistro', type:'datetime'}
		],
		url: "modelo/modRelacionesInternacionalesConsultar.php",
		type: 'POST',
		data: {'pRelacionesInternacionalesID':pRelacionesInternacionalesID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(RelacionesInternacionalesSource);
	return dataAdapter;
}

function datosRelacionesInternacionalesRegistroObtener(pRelacionesInternacionalesID){
	$.ajax({
		async: false,
		url: "modelo/modRelacionesInternacionalesConsultar.php",
		data: {iRelacionesInternacionalesID : pRelacionesInternacionalesID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function RelacionesInternacionalesTablaCargar(sControl){
	var dataAdapter= datosRelacionesInternacionalesCargar();

	var keyboardHandler = function (event) {
		var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
		if ((key >= 33 && key <= 36) || key == 37 || key == 39) {
			return true;
		} else if (key==38) { //Flecha arriba
			var filaActual = $(sControl).jqxGrid('getselectedrowindex');
			$(sControl).jqxGrid('selectrow', filaActual-1);
			crearDatepickers();
			return true;
		} else if (key==40) { //Flecha abajo
			var filaActual = $(sControl).jqxGrid('getselectedrowindex');
			$(sControl).jqxGrid('selectrow', filaActual+1);
			crearDatepickers();
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
		columns: [
			{text: '', datafield: 'accion', width: '50px', cellsalign: 'center', pinned: true, filterable: false, sortable: false, menu: false},
			{text: '', datafield: 'idRelacionesInternacionales', hidden: true},
			{text: '', datafield: 'idEstimulo', hidden: true},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '149px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto', width: '350px'},
			{text: 'Cuenta con beca federal', datafield: 'becaFederal', width: '195px', align: 'center',
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var temp = $('#cd_f'+row+'_becaFederal').val();

					if ( temp != "" && typeof temp != 'undefined') {
						value = temp;
					}

					if (value == '1') {
						var html = '<div class="ButtonGroup_becaFederal jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnBecaFederal_'+row+'_Si" onclick="btn_becaFederal(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnActivo btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnBecaFederal_'+row+'_No" onclick="btn_becaFederal(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else if (value == '0') {
						var html = '<div class="ButtonGroup_becaFederal jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnBecaFederal_'+row+'_Si" onclick="btn_becaFederal(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnBecaFederal_'+row+'_No" onclick="btn_becaFederal(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnActivo btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					} else {
						var html = '<div class="ButtonGroup_becaFederal jqx-widget-energyblue jqx-rc-all-energyblue jqx-buttongroup jqx-buttongroup-energyblue jqx-widget jqx-rc-all" style="width:100px; margin: 5px auto 0;">' +
							'<div id="btnBecaFederal_'+row+'_Si" onclick="btn_becaFederal(this)" style="width: 50px;box-sizing: border-box;display: inline-block;margin-right: -1px; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tl jqx-rc-tl-energyblue jqx-rc-bl jqx-rc-bl-energyblue btnCorrecto" role="button" data-row="'+row+'" data-val="1">Sí</div>' +
							'<div id="btnBecaFederal_'+row+'_No" onclick="btn_becaFederal(this)" style="width: 50px; box-sizing: border-box;display: inline-block; height: 30px; line-height: 20px;" class="jqx-button jqx-button-energyblue jqx-group-button-normal jqx-group-button-normal-energyblue jqx-fill-state-normal jqx-fill-state-normal-energyblue jqx-rc-tr jqx-rc-tr-energyblue jqx-rc-br jqx-rc-br-energyblue btnPeligro" role="button" data-row="'+row+'" data-val="0">No</div>' +
							'<div style="clear: both;">' +
							'</div>';
					}

					return html;
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					$('#cd_f'+row+'_'+datafield).val(newvalue);
					if (oldvalue!=newvalue) {relacionesInternacionalesAgregarModificar(row);}
				}
			},
			{text: 'Fecha de inicio', datafield: 'fechaInicioBecaFederal', cellsalign: 'center', width: '195px', align: 'center',
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var html = '<input class="datepicker" data-fila="'+row+'"  data-campo="fechaInicioBecaFederal" data-valor="'+value+'" />';
					return html;
				}
			},
			{text: 'Fecha de término', datafield: 'fechaTerminoBecaFederal', cellsalign: 'center', width: '195px', align: 'center',
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					var html = '<input class="datepicker" data-fila="'+row+'"  data-campo="fechaTerminoBecaFederal" data-valor="'+value+'" />';
					return html;
				}
			}
		]
	});

	var numRegistros = $(sControl).jqxGrid('getdatainformation').rowscount,
		registros = $(sControl).jqxGrid('getrows'),
		camposAuxiliares = ['idEstimulo', 'idRelacionesInternacionales','becaFederal', 'fechaInicioBecaFederal', 'fechaTerminoBecaFederal'];

	crearCamposAuxiliares(numRegistros, registros, camposAuxiliares);
	crearDatepickers();
	$(sControl).on('pagechanged', crearDatepickers);
	$(sControl).on('filter', crearDatepickers);
	$(sControl).on('sort', crearDatepickers);
}

function crearDatepickers() {
	$('.datepicker').each(function() {
		var campo = $(this).attr('data-campo'),
			valor = $(this).attr('data-valor'),
			fila = $(this).attr('data-fila');

		$(this).datepicker({
			altField: '#cd_f'+fila+'_'+campo,
			altFormat: "mm/dd/yy",
			showOn: "both",
			closeText: 'Cerrar',
			prevText: '&leftarrow; Ant',
			nextText: 'Sig &rightarrow;',
			currentText: 'Hoy',
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			monthNamesShort: ['ene','feb','mar','abr', 'may','jun','jul','ago','sep', 'oct','nov','dic'],
			dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
			dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
			dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
			weekHeader: 'Sm',
			dateFormat: 'dd/mm/yy',
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: false,
			autoSize: true,
			yearSuffix: '',
			selectOtherMonths: false,
			changeMonth: true,
			changeYear: true
		});

		//$('#cd_f'+fila+'_'+campo).on('change', relacionesInternacionalesAgregarModificar);

		if (valor!='') {
			var mes = valor.substr(0,2),
				dia = valor.substr(3,2),
				año = valor.substr(6,4),
				fecha = dia+'/'+mes+'/'+año;

			$(this).datepicker('setDate',fecha);
		}
	});
}

function crearCamposAuxiliares(numRegistros, registros, camposAuxiliares) {
	var contenedor = $('#contenedorDatos'),
		tipoCampo = 'text';

	for(var i=0; i<numRegistros; i++) {
		contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_RowIndex" value="'+i+'" />');
		for (var arr = 0; arr < camposAuxiliares.length; arr++) {
			contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_'+camposAuxiliares[arr]+'" value="'+registros[i][camposAuxiliares[arr]]+'" data-fila="'+i+'" name="'+camposAuxiliares[arr]+'" />');
		}
		contenedor.append('<input type="'+tipoCampo+'" id="cd_f'+i+'_Guardado" value="" data-fila="'+i+'" /><br />');
	}
}



function RelacionesInternacionalesComboCargar(sControl){
	var dataAdapter= datosRelacionesInternacionalesCargar();
	$(sControl).jqxComboBox({ // o .jqxInput
		source: dataAdapter
		,displayMember:'option'
		,valueMember:'value'
		,width: '100%'
		,animationType: 'fade'
		,theme: 'energyblue'
		,searchMode: 'containsignorecase'
		,autoComplete: true
		,placeHolder: "seleccione..."
	});
}

function RelacionesInternacionalesListBoxCargar(sControl){
	var dataAdapter= datosRelacionesInternacionalesCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		,displayMember:'option'
		,valueMember:'value'
		,width: '100%'
		,theme: 'enegryBlue'
		,disabled : true
	});
}

function RelacionesInternacionalesFormularioCargar(pRelacionesInternacionalesID){
	var dataAdapter= datosRelacionesInternacionalesRegistroObtener(pRelacionesInternacionalesID);
	registro=dataAdapter.records[0];

	$('#ctrlidRelacionesInternacionales').val(registro.idRelacionesInternacionales)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlbecaFederal').val(registro.becaFederal)
	$('#ctrlfechaInicioBecaFederal').val(registro.fechaInicioBecaFederal)
	$('#ctrlfechaTerminoBecaFederal').val(registro.fechaTerminoBecaFederal)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function relacionesInternacionalesAgregarModificar(fila){

	if (fila==-1) return;

	var becaFederal = $('#cd_f'+fila+'_becaFederal').val(),
		row = $('#cd_f'+fila+'_RowIndex').val(),
		fechaInicioBecaFederal = $('#cd_f'+fila+'_fechaInicioBecaFederal').val(),
		fechaTerminoBecaFederal = $('#cd_f'+fila+'_fechaTerminoBecaFederal').val(),
		idRelacionesInternacionales = $('#cd_f'+fila+'_idRelacionesInternacionales').val(),
		idEstimulo = $('#cd_f'+fila+'_idEstimulo').val();

	if(becaFederal=='') {
		return;
	}

	if(fechaInicioBecaFederal==''){
		return;
	}

	if(fechaTerminoBecaFederal==''){
		return;
	}

	var sPagina="modelo/modRelacionesInternacionalesAgregarModificar.php";
	//var oParametros = 'idEstimulo=' + idEstimulo + '&becaFederal=' + becaFederal +'&fechaInicioBecaFederal='+ fechaInicioBecaFederal + '&fechaTerminoBecaFederal='+ fechaTerminoBecaFederal +'&idRelacionesInternacionales=' + idRelacionesInternacionales;
	var oParametros = $('input[data-fila="'+fila+'"][name]').serialize();

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function(datos,status){
			if(status=='success'){
				eval(datos);
				if(json.noError > 0){
					notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
				}
				else {
					notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
					// Acciones posteriores a la actualizacion
					if (idRelacionesInternacionales == '' || typeof idRelacionesInternacionales == 'undefined' || idRelacionesInternacionales == null) {
						$('#cd_f' + fila + '_idRelacionesInternacionales').val(json.idRelacionesInternacionales);
					}
					$('#cd_f' + fila + '_Guardado').val('1');

					// Cambiar celdas en el grid
					$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'becaFederal', becaFederal);
					$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'fechaInicioBecaFederal', fechaInicioBecaFederal);
					$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'fechaTerminoBecaFederal', fechaTerminoBecaFederal);

					crearDatepickers();
				}
			}
		}
	);
}



function relacionesInternacionalesEliminar(pRegistroID){
	var sPagina="../../moduloXX/modelo/modRelacionesInternacionalesEliminar.php";
	var oParametros={'pRegistroID':pRegistroID}

	$.post(sPagina
		,oParametros
		,function(datos,status){
			if(status=='success'){
				eval(datos);
				if(json.noError > 0){
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



