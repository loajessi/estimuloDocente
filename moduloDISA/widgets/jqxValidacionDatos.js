function datosSupAcademicaCargar(pSupAcademicaID){
	var SupAcademicaSource =
	{
		datatype: "json",
		datafields: [
			{name:'accion',type:'string'},
			{name:'idSupAcademica', type:'int'},
			{name:'idEstimulo', type:'int'},
			{name:'idPersona', type:'int'},
			{name:'numeroEmpleado', type:'int'},
			{name:'nombreCompleto', type:'varchar'},
			{name:'tipoContrato', type:'varchar'},
			{name:'fechaRegistroEstimulo', type:'datetime'},
			{name:'certificacionIngles', type:'varchar'},
			{name:'cursoCompetencia', type:'tinyint'},
			{name:'fechaRegistro', type:'datetime'}
		],
		url: "modelo/modSupAcademicaConsultar.php",
		type: 'POST',
		data: {'pSupAcademicaID':pSupAcademicaID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(SupAcademicaSource);
	return dataAdapter;
}

function datosSupAcademicaRegistroObtener(pSupAcademicaID){
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modSupAcademicaConsultar.php",
		data: {iSupAcademicaID : pSupAcademicaID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function SupAcademicaTablaCargar(sControl){
	var dataAdapter= datosSupAcademicaCargar();
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
			{text: '', datafield: 'accion', width: '40px', cellsalign: 'center', editable: false, pinned: true, filterable: false, sortable: false, menu: false},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', align: 'center', editable: false, width: '120px'},
			{text: '', datafield: 'idSupAcademica', hidden: true},
			{text: '', datafield: 'idEstimulo', hidden: true},
			{text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '340px'},
			{text: 'Tipo', datafield: 'tipoContrato',cellsalign: 'center', align: 'center', editable: false, width: '65px'},
			{text: 'Env&iacute;o de solicitud', datafield: 'fechaRegistroEstimulo', cellsalign: 'center', align: 'center', editable: false, width: '150px'},
			{text: 'No. de certificaciones (*)', datafield: 'certificacionIngles', cellsalign: 'center', align: 'center', columntype: 'numberinput', width: '200px',
				createeditor: function (row, cellvalue, editor) {
					editor.jqxNumberInput({
						digits: 2,
						decimalDigits: 0,
						min: 0,
						inputMode: 'advanced',
						spinMode: 'simple',
						spinButtonsStep: 1,
						spinButtons: true,
						theme: 'energyblue'
					});
				}
			},
			{text: 'No. de cursos acreditados sobre competencias', datafield: 'cursoCompetencia', cellsalign: 'center', align: 'center', columntype: 'numberinput',
				renderer: function(){return '<div class="jxGrid_headerDoble txtCentrado">No. de cursos acreditados<br />sobre competencias</div>'; },
				createeditor: function (row, cellvalue, editor) {
					editor.jqxNumberInput({
						digits: 2,
						decimalDigits: 0,
						min: 0,
						inputMode: 'advanced',
						spinMode: 'simple',
						spinButtonsStep: 1,
						spinButtons: true,
						theme: 'energyblue'
					});
				},
				cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
					if (oldvalue != newvalue) {
						supAcademicaAgregarModificar()(row, newvalue);
					}
				}
			}
		]
	});
}

function SupAcademicaComboCargar(sControl){
	var dataAdapter= datosSupAcademicaCargar();
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

function SupAcademicaListBoxCargar(sControl){
	var dataAdapter= datosSupAcademicaCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		,displayMember:'option'
		,valueMember:'value'
		,width: '100%'
		,theme: 'enegryBlue'
		,disabled : true
	});
}

function SupAcademicaFormularioCargar(pSupAcademicaID){
	var dataAdapter= datosSupAcademicaRegistroObtener(pSupAcademicaID);
	registro=dataAdapter.records[0];

	$('#ctrlidSupAcademica').val(registro.idSupAcademica)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlcertificacionIngles').val(registro.certificacionIngles)
	$('#ctrlcursoCompetencia').val(registro.cursoCompetencia)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function supAcademicaAgregarModificar(rowid, valor){
	if (rowid == -1) return;

	var sPagina="modelo/modSupAcademicaAgregarModificar.php";

	//Obtener datos del row
	var data = $("#jqxGrid_Docentes").jqxGrid('getrowdatabyid', rowid);

	//Parámetros a enviar
	var oParametros= 'idEstimulo=' + data.idEstimulo + '&cursoCompetencia=' + valor  + '&idSupAcademica=' + data.idSupAcademica;

	notif({msg: 'Guardando...', type: 'info', position: 'right', autohide: false, width: 200});

	$.post(sPagina, oParametros, function(datos,status) {
			if(status=='success'){
				eval(datos);

				if(json.noError > 0) {
					notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
				}
				else {
					//// Acciones posteriores a la actualizacion
					notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				}
			}
		}
	);
}

function supAcademicaEliminar(pRegistroID){
	var sPagina="../../moduloXX/modelo/modSupAcademicaEliminar.php";
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



