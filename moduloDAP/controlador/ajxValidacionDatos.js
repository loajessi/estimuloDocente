// Función de inicialización de la vista

function validacionDatosInicializar() {

    var crearWidgets = function () {

    };

    var agregarEventos = function () {
	    $("#jqxGrid_Docentes").on("rowunselect", function (event) {		    
		    validacionDatosPersonalAgregarModificar(event.args.rowindex);
	    });

	    $("#jqxGrid_Docentes").on('cellvaluechanged', function (event) {
	    	$('#jqxGrid_Docentes').jqxGrid('selectrow', event.args.rowindex);
	    });
    };

    crearWidgets();
    agregarEventos();
	PersonalTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido
