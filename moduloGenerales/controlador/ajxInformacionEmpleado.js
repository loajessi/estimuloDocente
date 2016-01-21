
function verInformacionEmpleado(piEstimuloID){
	$("#divPrincipal").fadeOut();

	$.get("/estimuloDocente/moduloGenerales/vista/vtaInformacionEmpleado.php", function(data, status){
		if(status == 'success')
			$("#divInformacionEmpleado").html(data).show();

			infoEmpleadoInicializar();
	});
}

function infoEmpleadoInicializar(){

	var crearWidgets = function(){
		$("#jqxTabs_DatosAcademicos").jqxTabs({
			width: '100%',
	        height: 400,
	        animationType: 'fade',
	        selectionTracker:true,
	        theme: 'energyblue',
	        initTabContent: function(tab){
	            if (tab == 0)
	                Docente_GradosAcademicos_TablaCargar();
	            else if(tab == 1)
	                Docente_ContratosActuales_TablaCargar();
	            else if(tab == 2)
	            	Docente_ClasesAnterior_TablaCargar();
	        }
		});
	}

	var agregarEventos = function () {
		$('#btnRegresar').on('click', function (event)
		{
	    	$("#divPrincipal").fadeIn();
	    	$("#divInformacionEmpleado").fadeOut();
		});
    };

    crearWidgets();
    agregarEventos();
}

function Docente_GradosAcademicos_TablaCargar(){
	var dataAdapter = null;

	$("#jqxGrid_GradoAcademico").jqxGrid({
        width: '100%',
        height: 365,
        source: dataAdapter,
        autorowheight: true,
        sortable: true,
        theme: 'energyblue',
        localization: getLocalization('es'),
//        filterable: true,
        autoshowfiltericon: true,
        pageable: true,
        columns: [
          { text: 'Nivel de estudios', datafield: 'nivelEstudios', width:'20%'},
          { text: 'Estudios', datafield: 'estudios', width:'80%'}
        ]
    });
}

function Docente_ContratosActuales_TablaCargar(){
	var dataAdapter = null;

	$("#jqxGrid_Contratos").jqxGrid({
        width: '100%',
        height: 365,
        source: dataAdapter,
        autorowheight: true,
        sortable: true,
        theme: 'energyblue',
        localization: getLocalization('es'),
//        filterable: true,
        autoshowfiltericon: true,
        pageable: true,
        columns: [
          { text: 'N&uacute;mero', datafield: 'numeroContrato', width:'10%'},
          { text: 'Centro de costos', datafield: 'ccostos', width:250},
          { text: 'Plaza', datafield: 'plaza', width:100},
          { text: 'Categor&iacute;a', datafield: 'categoria', width:100},
          { text: 'Estado', datafield: 'estado', width:100},
          { text: 'Tiempo', datafield: 'tiempo', width:100},
          { text: 'Tipo', datafield: 'tipo', width:100},
          { text: 'Fecha de alta', datafield: 'fechaAlta', width:150},
          { text: 'Fecha de contrataci&oacute;n', datafield: 'fechaContratacion', width:150}
        ]
    });
}

function Docente_ClasesAnterior_TablaCargar(){
	var dataAdapter = null;

	$("#jqxGrid_Clases").jqxGrid({
        width: '100%',
        height: 365,
        source: dataAdapter,
        autorowheight: true,
        sortable: true,
        theme: 'energyblue',
        localization: getLocalization('es'),
//        filterable: true,
        autoshowfiltericon: true,
        pageable: true,
        columns: [
          { text: 'Ciclo', datafield: 'nivelEstudios', width:120},
          { text: 'Hrs/Asignatura', datafield: 'hrsAsignatura', width:120},
          { text: 'Hrs/Docente', datafield: 'hrsDocente', width:100},
          { text: 'Asignatura', datafield: 'asignatura', width:100},
          { text: 'Semestre', datafield: 'semestre', width:100},
          { text: 'Grupo', datafield: 'grupo', width:100},
          { text: '&Aacute;rea acad&eacute;mica o escuela', datafield: 'areaAcademicaEscuela', width:300},
          { text: 'Plan', datafield: 'plan', width:100},
          { text: 'Nivel', datafield: 'nivel', width:100},
          { text: 'Lugar', datafield: 'lugar', width:100},
          { text: 'Checa entrada', datafield: 'chEntrada', width:100},
          { text: 'Checa salida', datafield: 'chSalida', width:100}
        ]
    });
}
