function datosInvestigacionCargar(pInvestigacionID){
	var InvestigacionSource =
	{
		datatype: "json",
		datafields: [
			{name:'accion',type:'string'},
			{name:'idInvestigacion', type:'int'},
			{name:'idEstimulo', type:'int'},
			{name:'idPersona', type:'int'},
			{name:'numeroEmpleado', type:'int'},
			{name:'nombreCompleto', type:'varchar'},
			{name:'tipoContrato', type:'varchar'},
			{name:'fechaRegistroEstimulo', type:'datetime'},
			{name:'reconocimientoSNI', type:'varchar'},
			{name:'fechaInicioSNI', type:'datetime'},
			{name:'fechaTerminoSNI', type:'datetime'},
			{name:'nivelSNI', type:'varchar'},
			{name:'noProyOrganismoResponsable', type:'int'},
			{name:'noProyInstitucionResponsable', type:'int'},
			{name:'noProyOrganismoParticipo', type:'int'},
			{name:'noProyInstitucionParticipo', type:'int'},
			{name:'fechaRegistro', type:'datetime'}
		],
		url: "modelo/modInvestigacionConsultar.php",
		type: 'POST',
		data: {'pInvestigacionID':pInvestigacionID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(InvestigacionSource);
	return dataAdapter;
}

function datosInvestigacionRegistroObtener(pInvestigacionID){
	$.ajax({
		async: false,
		url: "modelo/modInvestigacionConsultar.php",
		data: {iInvestigacionID : pInvestigacionID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function InvestigacionTablaCargar(sControl){
	var dataAdapter= datosInvestigacionCargar();
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
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '120px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto'},
			{text: 'ID', datafield: 'idEstimulo', hidden: true},
			{text: 'ID', datafield: 'idInvestigacion', hidden: true}
		]
	});
}

function InvestigacionComboCargar(sControl){
	var dataAdapter= datosInvestigacionCargar();
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

function InvestigacionListBoxCargar(sControl){
	var dataAdapter= datosInvestigacionCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		,displayMember:'option'
		,valueMember:'value'
		,width: '100%'
		,theme: 'enegryBlue'
		,disabled : true
	});
}

function InvestigacionFormularioCargar(pInvestigacionID){
	var dataAdapter= datosInvestigacionRegistroObtener(pInvestigacionID);
	registro=dataAdapter.records[0];

	$('#ctrlidInvestigacion').val(registro.idInvestigacion)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlreconocimientoSNI').val(registro.reconocimientoSNI)
	$('#ctrlfechaInicioSNI').val(registro.fechaInicioSNI)
	$('#ctrlfechaTerminoSNI').val(registro.fechaTerminoSNI)
	$('#ctrlnivelSNI').val(registro.nivelSNI)
	$('#ctrlnoProyOrganismoResponsable').val(registro.noProyOrganismoResponsable)
	$('#ctrlnoProyInstitucionResponsable').val(registro.noProyInstitucionResponsable)
	$('#ctrlnoProyOrganismoParticipo').val(registro.noProyOrganismoParticipo)
	$('#ctrlnoProyInstitucionParticipo').val(registro.noProyInstitucionParticipo)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function investigacionAgregarModificar(){
	var sPagina="modelo/modInvestigacionAgregarModificar.php";
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



function investigacionEliminar(pRegistroID){
	var sPagina="modelo/modInvestigacionEliminar.php";
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



