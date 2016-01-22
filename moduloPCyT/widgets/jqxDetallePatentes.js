function datos_Docentes_DetallePatentes_Cargar(pEstimuloID) {

	var ParqueCientificoSource =
	{
		datatype: "json",
		datafields: [
			{name:'accion',type:'string'},
			{name:'idEstimulo', type:'int'},
			{name:'idParqueCientifico', type:'int'},
			{name:'patente', type:'varchar'},
			{name:'fase', type:'varchar'},
			{name:'fechaRegistro', type:'datetime'}
 		],
		url: "modelo/modParqueCientificoDetalleConsultar.php",
		type: 'POST',
		data: {'pEstimuloID':pEstimuloID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(ParqueCientificoSource);
	return dataAdapter;
}

function datosParqueCientificoRegistroObtener(pParqueCientificoID, pEstimuloID, pNinguna){
	$.ajax({
		async: false,
		url: "modelo/modParqueCientificoPatenteConsultar.php",
		data: {pParqueCientificoID : pParqueCientificoID, pEstimuloID : pEstimuloID, pNinguna : pNinguna},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function datos_Docentes_DetallePatentes_CargarEstados() {
	var estadosComboBox = [
		{valor: "PCT", nombre: "PCT"},
		{valor: "IMPI", nombre: "IMPI"},
		{valor: "Otorgada", nombre: "Otorgada"}
	];

	var estadosComboBoxSource = {
		datatype: "array",
		datafields: [
			{ name: 'valor', type: 'string' },
			{ name: 'nombre', type: 'string' }
		],
		localdata: estadosComboBox
	};
	var estadosComboAdapter = new $.jqx.dataAdapter(estadosComboBoxSource);

	return estadosComboAdapter;
}

function Docentes_DetallePatentes_CargarVista(idEstimulo, datosFila) {
	$.get('vista/vtaDetallePatentes.php', function (data, status) {
		if (status == 'success') {
			$("#detalleDatosPatentes").html(data);
			$('#PatentesNombreEmpleado').html(datosFila.nombreCompleto);
			detallePatentesInicializar(idEstimulo);
		}
	});
}

function Docentes_DetallePatentes_ComboCargar(sControl) {
	var dataAdapter = datos_Docentes_DetallePatentes_CargarEstados();
	dataAdapter.dataBind();
	var registros = dataAdapter.records;

	$(sControl).jqxComboBox({
		autoComplete: true,
		source: dataAdapter,
		autoDropDownHeight: true,
		displayMember: 'nombre',
		valueMember: 'valor',
		theme: 'energyblue',
		//width: '100%',
		width: '50%',
		placeHolder: 'Estado de la patente'
	});

}

function Docentes_DetallePatentes_TablaCargar(sControl, idEstimulo) {
	var dataAdapter = datos_Docentes_DetallePatentes_Cargar(idEstimulo);
	dataAdapter.dataBind();
	var registros = dataAdapter.records;

	if(registros.length == 0) {

		// Busca si existe el registro de ninguna
		var dataAdapter= datosParqueCientificoRegistroObtener(-1, idEstimulo, 1);

		if(dataAdapter != null) {
			$("#divValidado").html("<span class='aprobado'>Validado con ninguna patente</span>");
			$("#btnValidarNingunaPatente").hide();
			$("#jqxGrid_DetallePatentes").hide();
		}
		else{
			// No se ha validado
			$("#btnValidarNingunaPatente").show();
			$("#jqxGrid_DetallePatentes").hide();
			$("#divValidado").html("<span class='cancelado'>Sin validar</span>");
		}
	}
	else {
		$("#jqxGrid_DetallePatentes").show();
		$("#btnValidarNingunaPatente").show();
		$("#divValidado").html("<span class='aprobado'>Validado con "+registros.length+" patentes</span>");
	}

	$(sControl).jqxGrid({
		width: '99.5%',
		height: '280px',
		source: dataAdapter,
		theme: 'energyblue',
		autorowheight: true,
		localization: getLocalization('es'),
		autoshowfiltericon: true,
		filterable: true,
		sortable: true,
		pageable: true,
		pagermode: "simple",
		columns: [
			{text: '', datafield: 'accion', width: '70px', cellsalign: 'center', pinned: true, sortable: false, filterable: false, menu: false},
			{text: 'Patente', datafield: 'patente', cellsalign: 'center', width: '462px'},
			{text: 'Estado', datafield: 'fase', cellsalign: 'center', align: 'center', width: '110px' }
		]
	});
}

function ParqueCientificoFormularioCargar(){
	var parqueCientificoID = $("#hdnParqueCientificoID").val();
	var estimuloID = $("#hdnEstimuloID").val();
	var dataAdapter= datosParqueCientificoRegistroObtener(parqueCientificoID, estimuloID, 0);
	var registro = dataAdapter[0];

	$('#txtPatente').val(registro.patente)
	$('#jqxComboBox_idEstadoPatente').val(registro.fase)
}

function parqueCientificoAgregarModificar(){

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	var sPagina="modelo/modParqueCientificoAgregarModificar.php";
	var oParametros=$('#frmModalAgregarPatente').serialize();

	$.post(sPagina
		,oParametros
		,function(datos,status){
			if(status=='success'){
				eval(datos);
				if(json.noError > 0){
					alert("Ocurri\u00f3 un error de base de datos: \n\n" + json.mensaje);
				}
				else {
					var idEstimulo = $("#hdnEstimuloID").val();
					PatenteCerrarModal();
					Docentes_DetallePatentes_TablaCargar('#jqxGrid_DetallePatentes', idEstimulo);
					notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				}
			}
		}
	);
}

function parqueCientificoEliminar(pRegistroID, pEstimuloID, pSolicitarConfirmacion){

	if(pSolicitarConfirmacion)
		if(!confirm("\u00bfEst\u00e1 seguro de eliminar el registro?")) return;

	notif({msg: 'Eliminando...', type: 'info', position: 'right', autohide: false, width: 200});
	var sPagina="modelo/modParqueCientificoEliminar.php";
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
					notif({msg: '<b>Registro eliminado</b>', type: 'success', position: 'right', width: 200});
					Docentes_DetallePatentes_TablaCargar('#jqxGrid_DetallePatentes', pEstimuloID);

					var data = $("#jqxGrid_DetallePatentes").jqxGrid('getrows');
					if(data.length == 0) validarConNingunaPatente(pEstimuloID);
				}
			}
		}
	);
}