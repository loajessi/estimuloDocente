// Función de inicialización de la vista

function validacionDatosInicializar() {

	var crearWidgets = function () {
		$('#jqxSplitter_Principal').jqxSplitter({
			height: '460px',
			width: '100%',
			resizable: false,
			theme: 'energyblue',
			//panels: [{size: '41%', min: '41.1%'}, {size: '59%', min: '30%'}]
			panels: [{size: '41%'}, {size: '59%'}]
		});

		// Eliminar botón de colapso para evitar error en grid
		$('.jqx-splitter-collapse-button-vertical').remove();
	};

	var agregarEventos = function () {

		$("#jqxGrid_Docentes").on('rowclick', function (event) {
			//if(event.args.owner._clickedcolumn == 'accion') return;

			var row = event.args.rowindex,
				datafield = event.args.datafield,
				datarow = $("#jqxGrid_Docentes").jqxGrid('getrowdata', row);

			var mensajeCargando = '<div class="txtCentrado"><h2 style="width: 500px; padding-top: 90px; margin: 0 auto; color: #ABABAB;">Cargando...</h2></div>';

			$("#detalleDatosPatentes").html(mensajeCargando);
			
			Docentes_DetallePatentes_CargarVista(datarow.idEstimulo, datarow);
		});
	};

	crearWidgets();
	agregarEventos();
	ParqueCientificoTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido
