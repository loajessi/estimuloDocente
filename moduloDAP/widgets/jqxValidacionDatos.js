function datosPersonalCargar(pPersonalID){
	var PersonalSource =
	{
		datatype: "json",
		datafields: [
			{name:'accion',type:'string'},			
			{name:'idPersonal', type:'int'},
			{name:'id_estimulo', type:'int'},
			{name:'num_empleado', type:'varchar'},
			{name:'tipo_contrato', type:'varchar'},
			{name:'gradoAcademico', type:'varchar'},
			{name:'puestoDrectivo', type:'varchar'},
			{name:'asistencias', type:'float'}			
 		],
		url: "modelo/modPersonalConsultar.php",
		type: 'POST',
		data: {'pPersonalID':pPersonalID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(PersonalSource);
	return dataAdapter;
}

function Docentes_ValidacionDatos_TablaCargar(sControl, piCicloEstimuloID) {
	var dataAdapter = datosPersonalCargar(piCicloEstimuloID);
	dataAdapter.dataBind();
	var registros = dataAdapter.records;

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
			{text: 'No. empleado', datafield: 'num_empleado', cellsalign: 'center', editable: false, width: '149px' },
			{text: 'Nombre completo', datafield: 'tipo_contrato', editable: false, width: '350px' },
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


function validacionDatosPersonalAgregarModificar(rowid){
	if(rowid == -1) return;
	
	$("#jqxGrid_Docentes").jqxGrid('endrowedit', rowid, false); // false = confirma cambios

	var sPagina="modelo/modPersonalAgregarModificar.php";
	var data = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', rowid);	

	if(data.gradoAcademico) var requisitoGradoAcademico = '1';
	else var requisitoGradoAcademico = '0';

	if(data.puestoDrectivo) var cuentaConPuestoDirectivo = '1';
	else var cuentaConPuestoDirectivo = '0';

	var oParametros = "idPersonal="+data.idPersonal+
					  "&idEstimulo="+data.id_estimulo+
					  "&gradoAcademico="+requisitoGradoAcademico+
					  "&puestoDrectivo="+cuentaConPuestoDirectivo+
					  "&asistencias="+data.asistencias;

	$.post(sPagina
		,oParametros
		,function(datos,status){
			if(status=='success'){
				eval(datos);
				if(json.noError > 0){
					alert("Ocurri\u00f3 un error de base de datos: \n\n" + json.mensaje);
				}
				else {
					// alert("Su informaci\u00f3n se registr\u00f3 correctamente en la base de datos.");	
					// Acciones posteriores a la actualizacion
				}
			}
		}
	);
}