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
			{name: 'desempenoAula', type: 'smallint'},
			{name: 'desempenoAcademico', type: 'smallint'},
			{name: 'innovacion', type: 'tinyint'},
			{name: 'tics', type: 'tinyint'},
			{name: 'egel', type: 'tinyint'},
			{name: 'calidadProgramaEducativo', type: 'varchar'},
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

	//Fuentes combobox
	var egel = {
		datatype: "json",
		datafields: [{ name: 'valor', type: 'int' }, { name: 'nombre', type: 'string' }],
		localdata: [
			{valor: 1, nombre: '1'},
			{valor: 2, nombre: '2'},
			{valor: 3, nombre: '3'}
		]};

	var innovacion = {
		datatype: "json",
		datafields: [{ name: 'valor', type: 'int' }, { name: 'nombre', type: 'string' }],
		localdata: [
			{valor: 0, nombre: '0'},
			{valor: 1, nombre: '1'},
			{valor: 2, nombre: '2'},
			{valor: 3, nombre: '3'},
			{valor: 4, nombre: '4'},
			{valor: 5, nombre: '5'},
			{valor: 6, nombre: '6'},
			{valor: 7, nombre: '7'},
			{valor: 8, nombre: '8'},
			{valor: 9, nombre: '9'},
			{valor: 10, nombre: '10'},
			{valor: 11, nombre: '11'},
			{valor: 12, nombre: '12'},
			{valor: 13, nombre: '13'},
			{valor: 14, nombre: '14'},
			{valor: 15, nombre: '15'},
			{valor: 16, nombre: '16'},
			{valor: 17, nombre: '17'},
			{valor: 18, nombre: '18'}
		]};

	var tics = {
		datatype: "json",
		datafields: [{ name: 'valor', type: 'int' }, { name: 'nombre', type: 'string' }],
		localdata: [
			{valor: 0, nombre: '0'},
			{valor: 1, nombre: '1'},
			{valor: 2, nombre: '2'},
			{valor: 3, nombre: '3'},
			{valor: 4, nombre: '4'},
			{valor: 5, nombre: '5'},
			{valor: 6, nombre: '6'},
			{valor: 7, nombre: '7'},
			{valor: 8, nombre: '8'},
			{valor: 9, nombre: '9'},
			{valor: 10, nombre: '10'},
			{valor: 11, nombre: '11'},
			{valor: 12, nombre: '12'},
			{valor: 13, nombre: '13'},
			{valor: 14, nombre: '14'},
			{valor: 15, nombre: '15'},
			{valor: 16, nombre: '16'},
			{valor: 17, nombre: '17'},
			{valor: 18, nombre: '18'}
		]};

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
		pagerbuttonscount: 5,
		keyboardnavigation: false,
		columns: [
			{text: '', datafield: 'accion', width: '35px', cellsalign: 'center', pinned: true, filterable: false, sortable: false, menu: false},
			{text: '', datafield: 'idEvaluacion', width:'35px', cellsalign: 'center', cellclassname: 'icono-wrapper', pinned: true, sortable: true, filterable: false, menu: true,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					if (value != '' && value!=null) {
						return '<span class="icono aprobar">&nbsp;</span>';
					} else {
						return '';
					}
				}
			},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '115px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto'},
			{text: 'Desempeño en el aula (Alumnos)', datafield: 'desempenoAula', hidden: true},
			{text: 'Desempeño académico (Directivos, Academicos)', datafield: 'desempenoAcademico', hidden: true},
			{text: 'Innovación educativa', datafield: 'innovacion', hidden: true},
			{text: 'TICS', align: 'center', datafield: 'tics', hidden: true},
			{text: 'Nivel EGEL (CENEVAL)', datafield: 'egel', hidden: true},
			{text: '', datafield: 'idEstimulo', hidden: true},
			{text: '', datafield: 'calidadProgramaEducativo', hidden: true}
		]
	});

	// Configurar clics en rows
	$(sControl).bind('rowselect', function (event) {
		var row = event.args.rowindex,
			datafield = event.args.datafield;

		$('#detalleEvaluacion > .animated').removeClass('slideInLeft').addClass('slideOutLeft');
		var datarow = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', row);

		Docentes_DetalleEvaluacion_CargarVista(datarow);
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
	$('#ctrldesempenoAula').val(registro.desempenoAula)
	$('#ctrldesempenoAcademico').val(registro.desempenoAcademico)
	$('#ctrlinnovacion').val(registro.innovacion)
	$('#ctrltics').val(registro.tics)
	$('#ctrlegel').val(registro.egel)
	$('#ctrlfechaRegistro').val(registro.fechaRegistro)
}

function evaluacionAgregarModificar(fila) {

	var desempenoAula = $('#desempenoAula').val(),
		desempenoAcademico = $('#desempenoAcademico').val(),
		innovacion = $('#hdnInnovacion').val(),
		tics = $('#hdnTICs').val(),
		egel = $('#hdnEGEL').val(),
		calidadProgramaEducativo = $('#hdnCalidad').val(),
		idEstimulo = $('#hdnIdEstimulo').val(),
		idEvaluacion = $('#hdnIdEvaluacion').val();

	if(desempenoAula=='') {
		return;
	}

	if(desempenoAcademico=='') {
		return;
	}

	if(innovacion=='') {
		return;
	}

	if(tics=='') {
		return;
	}

	if(egel=='') {
		return;
	}

	if(egel != 0 && calidadProgramaEducativo=='') {
		notif({msg: 'Todos los campos son requeridos', type: 'warning', position: 'right', width: 400});
		return;
	}

	var sPagina = "modelo/modEvaluacionAgregarModificar.php";
	var oParametros = $('#frmDetalleEvaluacion').serialize();

	$.post(sPagina, oParametros, function (datos, status) {
		if (status == 'success') {
			eval(datos);
			if (json.noError > 0) {
				notif({msg: '<b>Error al guardar:</b> " + json.mensaje', type: 'error', position: 'right', width: 200});
			} else {
				notif({msg: '<b>Guardado</b>', type: 'success', position: 'right', width: 200});
				// Acciones posteriores a la actualizacion
				if( idEvaluacion =='' || typeof idEvaluacion == 'undefined' || idEvaluacion == null ){
					$('#hdnIdEvaluacion').val(json.idEvaluacion);
					$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'idEvaluacion', json.idEvaluacion);
				}

				// Cambiar celdas en el grid
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'desempenoAula', desempenoAula);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'desempenoAcademico', desempenoAcademico);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'innovacion', innovacion);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'tics', tics);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'egel', egel);
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', fila, 'calidadProgramaEducativo', calidadProgramaEducativo);

				//Ocultar botones al guardar
				$('.barraSuperiorAcciones').fadeOut();
			}
		}
	});
}