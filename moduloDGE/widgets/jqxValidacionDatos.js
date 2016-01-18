function datosEvaluacionCargar(pEvaluacionID) {
	var EvaluacionSource =
	{
		datatype: "json",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idEvaluacion', type: 'int'},
			{name: 'idEstimulo', type: 'int'},
			{name: 'idPersona', type: 'int'},
			{name: 'numeroEmpleado', type: 'int'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipoContrato', type: 'varchar'},
			{name: 'fechaRegistroEstimulo', type: 'datetime'},
			{name: 'desempeñoAula', type: 'smallint'},
			{name: 'desempeñoAcademico', type: 'smallint'},
			{name: 'innovacion', type: 'tinyint'},
			{name: 'tics', type: 'tinyint'},
			{name: 'egel', type: 'tinyint'},
			{name: 'fechaRegistro', type: 'datetime'}
		],
		url: "modelo/modEvaluacionConsultar.php",
		type: 'POST',
		data: {'pEvaluacionID': pEvaluacionID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(EvaluacionSource);
	return dataAdapter;
}

function datosEvaluacionRegistroObtener(pEvaluacionID) {
	$.ajax({
		async: false,
		url: "../moduloXX/modelo/modEvaluacionConsultar.php",
		data: {iEvaluacionID: pEvaluacionID},
		type: 'POST',
		success: function (data, status, xhr) {
			registro = jQuery.parseJSON(data);
		}
	});
	return registro;
}

function EvaluacionTablaCargar(sControl) {
	var dataAdapter = datosEvaluacionCargar();
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
			{text: '', datafield: 'accion', width: '50px', cellsalign: 'center', editable: false, pinned: true},
			{text: '', datafield: 'idEvaluacion', hidden: true},
			{text: '', datafield: 'idEstimulo', hidden: true},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '115px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '272px'},
			{text: 'Desempe&ntilde;o en el aula (Alumnos)', datafield: 'desempeñoAula', cellsalign: 'center', editable: true, width: '167px', columntype: 'numberinput',
				renderer: function(){return '<div class="jxGrid_headerDoble txtCentrado">Desempe&ntilde;o en<br />el aula (Alumnos)</div>'; },
				createeditor: function (row, cellvalue, editor) {
					editor.jqxNumberInput({
						digits: 3,
						decimalDigits: 0,
						min: 0,
						inputMode: 'advanced',
						spinMode: 'simple',
						spinButtonsStep: 1,
						spinButtons: true,
						theme: 'energyblue'
					});
				},
			},
			{text: 'Desempe&ntilde;o acad&eacute;mico (Directivos, Academicos)', datafield: 'desempeñoAcademico', cellsalign: 'center', editable: true, width: '167px', columntype: 'numberinput',
				renderer: function(){return '<div class="jxGrid_headerDoble txtCentrado">Desempe&ntilde;o acad&eacute;mico<br />(Directivos, Academicos)</div>'; },
				createeditor: function (row, cellvalue, editor) {
					editor.jqxNumberInput({
						digits: 3,
						decimalDigits: 0,
						min: 0,
						inputMode: 'advanced',
						spinMode: 'simple',
						spinButtonsStep: 1,
						spinButtons: true,
						theme: 'energyblue'
					});
				},
			},
			{text: 'Innovaci&oacute;n educativa', datafield: 'innovacion', cellsalign: 'center', editable: true, width: '121px', columntype: 'combobox',
				renderer: function(){return '<div class="jxGrid_headerDoble txtCentrado">Innovaci&oacute;n<br />educativa</div>';},
				validation: function (cell, value) {
					var row = cell.row;
					if (value < 0 || value > 18) {
						$(sControl).jqxGrid('cellbeginedit', row, "innovacion");
						return {result: false, message: "El valor debe estar entre 0 y 18"};
					} else { return true; }
				},
			},
			{text: 'TICS', align: 'center', datafield: 'tics', cellsalign: 'center', editable: true, width: '121px', columntype: 'combobox',
				validation: function (cell, value) {
					var row = cell.row;
					if (value < 0 || value > 18) {
						$(sControl).jqxGrid('cellbeginedit', row, "tics");
						return {result: false, message: "El valor debe estar entre 0 y 18"};
					} else { return true; }
				},
			},
			{text: 'EGEL (CENEVAL)', align: 'center', datafield: 'egel', cellsalign: 'center', editable: true, width: '121px', columntype: 'combobox',
				/*createeditor: function (row, value, editor) {editor.jqxComboBox({ source: egelAdapter, displayMember: 'nombre', valueMember: 'nombre' });}*/
			}
		]
	});
}

function EvaluacionComboCargar(sControl) {
	var dataAdapter = datosEvaluacionCargar();
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

function EvaluacionListBoxCargar(sControl) {
	var dataAdapter = datosEvaluacionCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, theme: 'enegryBlue'
		, disabled: true
	});
}

function EvaluacionFormularioCargar(pEvaluacionID) {
	var dataAdapter = datosEvaluacionRegistroObtener(pEvaluacionID);
	registro = dataAdapter.records[0];

	$('#ctrlidEvaluacion').val(registro.idEvaluacion)
	$('#ctrlidEstimulo').val(registro.idEstimulo)
	$('#ctrlidPersona').val(registro.idPersona)
	$('#ctrlnumeroEmpleado').val(registro.numeroEmpleado)
	$('#ctrlnombreCompleto').val(registro.nombreCompleto)
	$('#ctrltipoContrato').val(registro.tipoContrato)
	$('#ctrlfechaRegistroEstimulo').val(registro.fechaRegistroEstimulo)
	$('#ctrldesempeñoAula').val(registro.desempeñoAula)
	$('#ctrldesempeñoAcademico').val(registro.desempeñoAcademico)
	$('#ctrlinnovacion').val(registro.innovacion)
	$('#ctrltics').val(registro.tics)
	$('#ctrlegel').val(registro.egel)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function evaluacionAgregarModificar() {
	var sPagina = "../../moduloXX/modelo/modEvaluacionAgregarModificar.php";
	var oParametros = $('#frmFormulario').serialize();

	$.post(sPagina
		, oParametros
		, function (datos, status) {
			if (status == 'success') {
				eval(datos);
				if (json.noError > 0) {
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


function evaluacionEliminar(pRegistroID) {
	var sPagina = "../../moduloXX/modelo/modEvaluacionEliminar.php";
	var oParametros = {'pRegistroID': pRegistroID}

	$.post(sPagina
		, oParametros
		, function (datos, status) {
			if (status == 'success') {
				eval(datos);
				if (json.noError > 0) {
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



