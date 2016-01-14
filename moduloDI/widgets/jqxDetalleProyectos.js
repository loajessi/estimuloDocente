function datos_Docentes_DetalleProyectos_Cargar() {

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
			"<button class='btnEliminarProyecto' id='btnEliminarProyecto' title='Eliminar proyecto' onclick='ProyectosEliminarRegistro(this);' >Eliminar patente</button>"
		];
	var nombrePatente =
		[
			"Elevador de coches", "Metodo para licuar cochadas de material de vidrio", "Coche y silla de viaje integrados", "Banco de rectificacion de la carroceria del coche",
			"Coche triciclo", "Protector ajustable para asiento de coche", "Sistema de juego de futbol", "Cubierta de pelota de futbol",
			"Disposicion para registrar fotograficamente datos digitales sobre un medio fotosensible", "Dispositivo para la captacion alternativa o simultanea de imagenes fotograficas y de video o camara polivalente", "Album fotografico digital", "Dispositivo para la captacion alternativa o simultanea de imagenes fotograficas y de video o camara polivalente", "Procedimiento fotografico de aplicacion en cinematografia para simular movimientos uniformes y no uniformes a alta velocidad de un objeto o un entorno, emulando una camara de cine o video, analogica o digital, a partir de una camara de fotografia fija, analogica o digital, y pelicula obtenida con dicho procedimiento",
			"Computadora personal con identificacion de impulsor", "Sistema y metodo de seguridad para computadoras", "Accesorio multifunci&oacute;n para computadora personal o terminal de computadora", "Sistema, metodo y producto de programa de computadora para configurar sistemas de computo", "Sistema y metodo para operar una computadora digital para reportar un error que presenta durante la ejecucion de un segundo programa de computadora que es una traduccion de un primer programa de computadora"
		];
	var tipos =
		[
			"PTC", "PMT", "PH"
		];

	var envioSolicitud =
		[
			"20/01/2016", "15/01/2016", "16/01/2015", "17/01/2016", "18/01/2016", "19/01/2016", "21/01/2016"
		];

	var estados = [
		"PCT", "IMPI", "Otorgada"
	];

	for (var i = 0; i < Math.random()*10-1; i++) {
		var row = {};
		var idPatente = 1 + Math.round(Math.random() * 10);
		var numeroEmpleado = 2000 + Math.round(Math.random() * 100);
		var numeroHojas = 1 + Math.round(Math.random() * 10);

		row["accion"] = accion[Math.floor(Math.random() * accion.length)];
		row["nombrePatente"] = nombrePatente[Math.floor(Math.random() * nombrePatente.length)];
		row["tipo"] = tipos[Math.floor(Math.random() * tipos.length)];
		row["envioSolicitud"] = envioSolicitud[Math.floor(Math.random() * envioSolicitud.length)];
		row["estadoPatente"] = estados[Math.round(Math.random() * 2)];
		row["numeroHojas"] = numeroHojas;
		row["idPatente"] = idPatente;
		row["numeroEmpleado"] = numeroEmpleado;
		data[i] = row;
	}
	var source =
	{
		localdata: data,
		datatype: "array",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idPatente', type: 'bigint'},
			{name: 'estadoPatente', type: 'varchar'},
			{name: 'numeroEmpleado', type: 'bigint'},
			{name: 'nombrePatente', type: 'varchar'},
			{name: 'tipo', type: 'varchar'}
		]
	};
	var dataAdapter = new $.jqx.dataAdapter(source);

	return dataAdapter;
}

function datos_Docentes_DetalleProyectos_CargarEstados() {

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
	var estadosComboBox = [
		{valor: 1, nombre: "PCT"},
		{valor: 2, nombre: "IMPI"},
		{valor: 3, nombre: "Otorgada"}
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

function Docentes_DetalleProyectos_CargarVista(idEstimulo, datosDummy) {
	$.get('vista/vtaDetalleProyectos.php', function (data, status) {
		if (status == 'success') {
			$("#detalleDatosPatentes").html(data);
			// Inicializar datos dummy
			$('#PatentesNombreEmpleado').html(datosDummy.nombreCompleto);
			detalleProyectosInicializar();
		}
	});
}

function Docentes_DetalleProyectos_ComboCargar(sControl) {
	var dataAdapter = datos_Docentes_DetalleProyectos_CargarEstados();
	dataAdapter.dataBind();
	var registros = dataAdapter.records;

	$(sControl).jqxComboBox({
		autoComplete: true,
		source: dataAdapter,
		autoDropDownHeight: true,
		displayMember: 'nombre',
		valueMember: 'valor',
		theme: 'energyblue',
		width: '100%',
		placeHolder: 'Estado de la patente'
	});

}

function Docentes_DetalleProyectos_TablaCargar(sControl) {
	var dataAdapter = datos_Docentes_DetalleProyectos_Cargar();
	dataAdapter.dataBind();
	var registros = dataAdapter.records;

	var estadosComboBox = [
		{valor: 1, nombre: "PCT"},
		{valor: 2, nombre: "IMPI"},
		{valor: 3, nombre: "Otorgada"}
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

	$(sControl).jqxGrid({
		width: '99.5%',
		height: '320px',
		source: dataAdapter,
		theme: 'energyblue',
		enablehover: false,
		selectionmode: 'none',
		autorowheight: true,
		localization: getLocalization('es'),
		autoshowfiltericon: true,
		filterable: true,
		sortable: true,
		pageable: true,
		editable: true,
		columns: [
			{text: '', datafield: 'accion', width: '40px', cellsalign: 'center', editable: false, pinned: true, sortable: false, filterable: false, menu: false},
			{text: 'Patente', datafield: 'nombrePatente', cellsalign: 'center', editable: false, width: '450px'},
			{text: 'Estado', datafield: 'estadoPatente', cellsalign: 'center', align: 'center', editable: true, columntype: 'combobox',
				createeditor: function (row, value, editor) {
					editor.jqxComboBox({ source: estadosComboAdapter, displayMember: 'nombre', valueMember: 'nombre', autoDropDownHeight: true, dropDownHeight: 200 });
				}
			},
			{text: 'ID', datafield: 'idPatente', cellsalign: 'center', hidden: true}
		]
	});
}