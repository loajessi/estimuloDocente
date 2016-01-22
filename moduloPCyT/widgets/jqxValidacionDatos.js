function datosParqueCientificoCargar(pParqueCientificoID) {
	var ParqueCientificoSource =
	{
		datatype: "json",
		datafields: [
			{name: 'accion', type: 'string'},
			{name: 'idParqueCientifico', type: 'int'},
			{name: 'idEstimulo', type: 'int'},
			{name: 'idPersona', type: 'int'},
			{name: 'numeroEmpleado', type: 'int'},
			{name: 'nombreCompleto', type: 'varchar'},
			{name: 'tipoContrato', type: 'varchar'},
			{name: 'fechaRegistroEstimulo', type: 'datetime'},
			{name: 'patente', type: 'varchar'},
			{name: 'fase', type: 'varchar'},
			{name: 'fechaRegistro', type: 'datetime'}
		],
		url: "modelo/modParqueCientificoConsultar.php",
		type: 'POST',
		data: {'pParqueCientificoID': pParqueCientificoID},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(ParqueCientificoSource);
	return dataAdapter;
}

function ParqueCientificoTablaCargar(sControl) {
	var dataAdapter = datosParqueCientificoCargar();
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
		pagermode: 'simple',
		pagerbuttonscount: 5,
		editable: false,
		columns: [
			{text: '', datafield: 'accion', width: '40px', cellsalign: 'center', pinned: true, sortable: false, filterable: false, menu: false},
			{text: '', datafield: 'idParqueCientifico', width: '35px', cellsalign: 'center', cellclassname: 'icono-wrapper', pinned: true, sortable: true, filterable: false, menu: true,
				cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
					if (value != '' && value!=null) {
						return '<span class="icono aprobar">&nbsp;</span>';
					} else {
						return '';
					}
				}
			},
			{text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', width: '120px'},
			{text: 'Nombre completo', datafield: 'nombreCompleto'},
			{text: 'ID', datafield: 'idEstimulo', hidden: true},
		]
	});
}

function ParqueCientificoComboCargar(sControl) {
	var dataAdapter = datosParqueCientificoCargar();
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

function ParqueCientificoListBoxCargar(sControl) {
	var dataAdapter = datosParqueCientificoCargar();
	$(sControl).jqxListBox({
		source: dataAdapter
		, displayMember: 'option'
		, valueMember: 'value'
		, width: '100%'
		, theme: 'enegryBlue'
		, disabled: true
	});
}




