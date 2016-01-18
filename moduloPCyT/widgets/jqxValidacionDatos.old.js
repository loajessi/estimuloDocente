function datos_Docentes_ValidacionDatos_Cargar(pCicloEstimulo) {

	/* var Docentes_ValidacionDatosSource =
	 {
	 datatype: "json",
	 datafields: [
	 {name: 'accion', type: 'string'},
	 {name: 'idEstimulo', type: 'bigint'},
	 {name: 'idEstadoRevisado', type: 'bigint'},
	 {name: 'numeroEmpleado', type: 'bigint'},
	 {name: 'nombreCompleto', type: 'varchar'},
	 {name: 'tipo', type: 'varchar'},
	 {name: 'envioSolicitud', type: 'varchar'},
	 {name: 'numeroHojas', type: 'int'}
	 ],
	 url: "/modelo/modListadocentesAprobadosConsultar.php",
	 type: 'POST',
	 data: {'pCicloEstimulo': pCicloEstimulo},
	 async: false
	 };
	 var dataAdapter = new $.jqx.dataAdapter(Docentes_ValidacionDatosSource);
	 return dataAdapter; */

	//////////////////////
	var data = new Array();
	var accion =
		[
			"<button class='btnInfoEmpleado' id='btngVerInfo' title='Ver informaci&oacute;n del empleado' onclick='verInformacionEmpleado()'; >Ver informaci&oacute;n del empleado</button>"
		];
	var nombreCompleto =
		[
			"Flores Lopez Teodoro", "Trejo Rivas Alejandra", "Morales Islas Teresa", "Sanchez Espinosa Xochitl",
			"Espinosa Osorio Carlos", "Saavedra Cervantes Mario", "Oropeza Lopez Pedro", "Dominguez Saavedra Marisol",
			"Perez Diaz Karla", "Prado Zapata Liliana", "Cervantes Soria Olga", "Barron Quintero Luciana", "Perez Diaz Luis",
			"Rosas Villa Lorena", "Valle Ortiz Elena", "Zapata Flores Eduardo", "Nuno Islas Sandra", "Narez Rios Esperanza"
		];
	var tipos =
		[
			"PTC", "PMT", "PH"
		];

	var envioSolicitud =
		[
			"20/01/2016", "15/01/2016", "16/01/2015", "17/01/2016", "18/01/2016", "19/01/2016", "21/01/2016"
		];

	var estados =
		[
			"Si", "No"
		];
	for (var i = 0; i < 200; i++) {
		var row = {};
		var idEstimulo = 1 + Math.round(Math.random() * 10);
		var numeroEmpleado = 2000 + Math.round(Math.random() * 100);
		var numeroHojas = 1 + Math.round(Math.random() * 10);

		row["accion"] = accion[Math.floor(Math.random() * accion.length)];
		row["nombreCompleto"] = nombreCompleto[Math.floor(Math.random() * nombreCompleto.length)];
		row["tipo"] = tipos[Math.floor(Math.random() * tipos.length)];
		row["envioSolicitud"] = envioSolicitud[Math.floor(Math.random() * envioSolicitud.length)];
		row["idEstadoRevisado"] = estados[Math.floor(Math.random() * estados.length)];
		row["numeroHojas"] = numeroHojas;
		row["idEstimulo"] = idEstimulo;
		row["numeroEmpleado"] = numeroEmpleado;
		data[i] = row;
	}
	var source =
	{
		localdata: data,
		datatype: "array",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idEstimulo', type: 'bigint'},
			{name: 'idEstadoRevisado', type: 'bigint'},
			{name: 'numeroEmpleado', type: 'bigint'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipo', type: 'varchar'},
			{name: 'envioSolicitud', type: 'varchar'},
			{name: 'numeroHojas', type: 'int'}
		]
	};
	var dataAdapter = new $.jqx.dataAdapter(source);

	return dataAdapter;
}

function Docentes_ValidacionDatos_TablaCargar(sControl, piCicloEstimuloID) {
	var dataAdapter = datos_Docentes_ValidacionDatos_Cargar(piCicloEstimuloID);
	dataAdapter.dataBind();
	var registros = dataAdapter.records;

	Docentes_ValidacionDatos_FormularioEnvioCargar(registros);

	var cellsrenderer = function (row, column, value, defaultHtml) {
		var hdnEstado = "#hdnEstado_" + registros[row].idEstimulo;
		var sEstado = $(hdnEstado).val();
		var element = $(defaultHtml);
		return element[0].outerHTML;
	};

	console.info("Cambio para evitar que se muestre el filtro sobre la columna de acciones");
	console.info("Cambio para hacer que el boton de informacion de empleado abarque toda su celda");
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
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '120px', cellsrenderer: cellsrenderer},
			{text: 'Nombre completo', datafield: 'nombreCompleto', cellsrenderer: cellsrenderer},
			{text: 'ID', datafield: 'idEstimulo', hidden: true}
		]
	});

	// Configurar clics en rows
	$(sControl).bind('rowselect', function (event) {
		var row = event.args.rowindex,
			datafield = event.args.datafield,
			datarow = $(sControl).jqxGrid('getrowdata', row);

		var mensajeCargando = '<div class="txtCentrado"><h2 style="width: 500px; padding-top: 90px; margin: 0 auto; color: #ABABAB;">Cargando...</h2></div>';

		$("#detalleDatosPatentes").html(mensajeCargando);

		window.setTimeout(function(){ //Simular carga de datos
			Docentes_DetallePatentes_CargarVista(datarow.idEstimulo, datarow);
		}, 1800);
	});
}

function Docentes_ValidacionDatos_FormularioEnvioCargar(arrDocentes) {

	$("#frmValidacionDatos").html('');

	for (var i = 0; i < arrDocentes.length; i++) {
		var idEstimulo = arrDocentes[i].idEstimulo;

		// Input estado
		var mapInputEstado = document.createElement("input");
		mapInputEstado.type = "hidden";
		mapInputEstado.id = "hdnEstado_" + idEstimulo;
		mapInputEstado.name = "hdnEstado_" + idEstimulo;
		mapInputEstado.value = arrDocentes[i].idEstadoRevisado;

		// Input hojas expediente
		var mapInputNoHojas = document.createElement("input");
		mapInputNoHojas.type = "hidden";
		mapInputNoHojas.id = "hdnNoHojas_" + idEstimulo;
		mapInputNoHojas.name = "hdnNoHojas_" + idEstimulo;
		mapInputNoHojas.value = arrDocentes[i].numeroHojas;

		// Agrega el input al form
		$("#frmValidacionDatos").append(mapInputEstado);
		$("#frmValidacionDatos").append(mapInputNoHojas);
	}
}