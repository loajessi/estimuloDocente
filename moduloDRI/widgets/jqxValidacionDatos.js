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
		url: "../moduloXX/modelo/modRelacionesInternacionalesConsultar.php",
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
			{text: '', datafield: 'accion', width: '50px', cellsalign: 'center', editable: false, pinned: true, filterable: false, sortable: false, menu: false},
			{text: '', datafield: 'idRelacionesInternacionales', hidden: true},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '149px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '350px'},
			{text: 'Cuenta con beca federal', datafield: 'becaFederal', width: '195px', columntype: 'checkbox' },
			{text: 'Fecha de inicio', datafield: 'fechaInicioBecaFederal', cellsalign: 'center', width: '195px', columntype: 'DateTime'},
			{text: 'Fecha de termino', datafield: 'fechaTerminoBecaFederal', cellsalign: 'center', width: '195px', columntype: 'DateTime'}
		]
	});
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

function relacionesInternacionalesAgregarModificar(){
	var sPagina="../../moduloXX/modelo/modRelacionesInternacionalesAgregarModificar.php";
	var oParametros=$('#frmFormulario').serialize();

	$.post(sPagina
		,oParametros
		,function(datos,status){
			if(status=='success'){
				eval(datos);
				if(json.noError > 0){
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


