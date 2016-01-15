function datosPersonalCargar(pPersonalID){
	var PersonalSource =
	{
		datatype: "json",
		datafields: [
			{name:'accion',type:'string'},
			{name:'idPersonal', type:'int'},
			{name:'idEstimulo', type:'int'},
			{name:'idPersona', type:'int'},
			{name:'numeroEmpleado', type:'int'},
			{name:'nombreCompleto', type:'varchar'},
			{name:'tipoContrato', type:'varchar'},
			{name:'fechaRegistroEstimulo', type:'datetime'},
			{name:'gradoAcademico', type:'varchar'},
			{name:'puestoDrectivo', type:'varchar'},
			{name:'asistencias', type:'float'},
			{name:'fechaRegistro', type:'datetime'}
		],
		url: "modelo/modPersonalConsultar.php",
		type: 'POST',
		data: {'pPersonalID':pPersonalID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(PersonalSource);
	return dataAdapter;
}

function datosPersonalRegistroObtener(pPersonalID){
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modPersonalConsultar.php",
		data: {iPersonalID : pPersonalID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function PersonalTablaCargar(sControl){
	var dataAdapter= datosPersonalCargar();
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
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '149px' },
			{text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '350px' },
			{text: 'Cumplimiento de grado acad&eacute;mico', datafield: 'gradoAcademico', columntype: 'checkbox', cellsalign: 'center', width: '195px', renderer: function () {return '<div class="jxGrid_headerDoble txtCentrado">Cumplimiento de<br />grado acad&eacute;mico</div>'; }},
			{text: 'Cuenta con puesto directivo o de confianza', datafield: 'puestoDrectivo', width: '195px', columntype: 'checkbox', renderer: function () {return '<div class="jxGrid_headerDoble txtCentrado">&iquest;Cuenta con puesto<br />directivo o de confianza?</div>'; }},
			{text: 'Porcentaje de asistencia', datafield: 'asistencias', cellsalign: 'center', width: '195px', columntype: 'numberinput', cellsformat: 'f2',
				renderer: function () {return '<div class="jxGrid_headerDoble txtCentrado">Porcentaje de<br />asistencia</div>';},
				validation: function (cell, value) {
					var row = cell.row;
					if (value < 0.00 || value > 100.00) {
						$(sControl).jqxGrid('cellbeginedit', row, "porcentajeAsistencia");
						return {result: false, message: "El valor debe estar entre 0 y 100"};
					} else { return true; }
				},
				createeditor: function (row, cellvalue, editor) {
					editor.jqxNumberInput({
						digits: 3,
						decimalDigits: 2,
						inputMode: 'simple',
						spinButtons: false,
						theme: 'energyblue'
					});
				}

			}
		]
	});
}

function PersonalComboCargar(sControl){
	var dataAdapter= datosPersonalCargar();
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

function PersonalListBoxCargar(sControl){
	var dataAdapter= datosPersonalCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		,displayMember:'option'
		,valueMember:'value'
		,width: '100%'
		,theme: 'enegryBlue'
		,disabled : true
	});
}

function PersonalFormularioCargar(pPersonalID){
	var dataAdapter= datosPersonalRegistroObtener(pPersonalID);
	registro=dataAdapter.records[0];

	$('#ctrlidPersonal').val(registro.idPersonal)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrlgradoAcademico').val(registro.gradoAcademico)
	$('#ctrlpuestoDrectivo').val(registro.puestoDrectivo)
	$('#ctrlasistencias').val(registro.asistencias)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function personalAgregarModificar(){
	var sPagina="../../moduloXX/modelo/modPersonalAgregarModificar.php";
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



function personalEliminar(pRegistroID){
	var sPagina="../../moduloXX/modelo/modPersonalEliminar.php";
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



