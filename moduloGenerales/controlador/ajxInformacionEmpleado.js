function verInformacionEmpleado(piNumeroEmpleado){

	$("#divPrincipal").fadeOut();

	$.get("/estimuloDocente/moduloGenerales/vista/vtaInformacionEmpleado.php", function(data, status){
		if(status == 'success')
			$("#divInformacionEmpleado").html(data).show();

			infoEmpleadoInicializar(piNumeroEmpleado);
	});	
}

function infoEmpleadoInicializar(piNumeroEmpleado){
  contrato_personalesFormularioCargar(piNumeroEmpleado);
  totalHorasPromedioEmpleadoConsultar();

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
	            	Docente_ClasesAnterior_TablaCargar(piNumeroEmpleado);   
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

function totalHorasPromedioEmpleadoConsultar(){
  var iPersonaID = $('#hdnPersonaID').val();

  $.ajax({
        async: false,
        url: "../moduloGenerales/modelo/modHorasPromedioEmpleadoConsultar.php",
        data: {piPersonaID : iPersonaID},
        type: 'POST',
        success: function (data, status, xhr) {  
            $("#lblPromedioHoras").html(data);                   
        }
    });
}

function Docente_GradosAcademicos_TablaCargar(){
  var iPersonaID = $('#hdnPersonaID').val();
	var dataAdapter = datos_contrato_gradosAcademicosCargar(iPersonaID);

	$("#jqxGrid_GradoAcademico").jqxGrid({
        width: '100%',
        height: 365,
        source: dataAdapter,
        autorowheight: true,
        sortable: true,
        theme: 'energyblue',
        localization: getLocalization('es'),
        autoshowfiltericon: true,
        pageable: true,
        columns: [
          { text: 'Nivel de estudios', datafield: 'nivel', width:'20%'},
          { text: 'Estudios', datafield: 'estudio', width:'80%'}
        ]
    });
}

function Docente_ContratosActuales_TablaCargar(){
	var iPersonaID = $('#hdnPersonaID').val();
  var dataAdapter = datos_contrato_personalesCargar(iPersonaID);

	$("#jqxGrid_Contratos").jqxGrid({
        width: '100%',
        height: 365,
        source: dataAdapter,
        autorowheight: true,
        sortable: true,
        theme: 'energyblue',
        localization: getLocalization('es'),
        filterable: true,
        autoshowfiltericon: true,
        pageable: true,
        columns: [
          { text: 'N&uacute;mero', datafield: 'NUM_CONTRATO', width:'8%', cellsAlign: 'center'},
          { text: 'Centro de costos', datafield: 'CENTRO_COSTOS', width:250},
          { text: 'Plaza', datafield: 'nombre_plaza', width:100},
          { text: 'Categor&iacute;a', datafield: 'categoria', width:100, cellsAlign: 'center'},
          { text: 'Estado', datafield: 'estado_contrato', width:100},
          { text: 'Tiempo', datafield: 'tiempo', width:100},
          { text: 'Tipo', datafield: 'nombre_tipo', width:100},
          { text: 'Fecha de alta', datafield: 'fecha_altaStr', width:130},
          { text: 'Fecha de contrataci&oacute;n', datafield: 'fecha_contratacion', width:150}
        ]
    });
}

function Docente_ClasesAnterior_TablaCargar(piNumeroEmpleado){
	var dataAdapter = datos_horario_empleadoCargar(piNumeroEmpleado);

	$("#jqxGrid_Clases").jqxGrid({
        width: '100%',
        height: 365,
        source: dataAdapter,
        autorowheight: true,
        sortable: true,
        theme: 'energyblue',
        localization: getLocalization('es'),
        filterable: true,
        autoshowfiltericon: true,
        pageable: true,
        columns: [
          { text: 'Ciclo', datafield: 'ciclo', width:150},
          { text: 'Hrs/Asignatura', datafield: 'horas_totales', width:120, cellsAlign: 'center'},
          { text: 'Hrs/Docente', datafield: 'Total_Horas', width:100, cellsAlign: 'center'},
          { text: 'Asignatura', datafield: 'oferta', width:200},
          { text: 'Semestre', datafield: 'semestre', width:80, cellsAlign: 'center'},
          { text: 'Grupo', datafield: 'grupo', width:60, cellsAlign: 'center'},
          { text: '&Aacute;rea acad&eacute;mica o escuela', datafield: 'escuela', width:250},
          { text: 'Plan', datafield: 'plan_estudios', width:250},
          { text: 'Nivel', datafield: 'nivel', width:100},
          { text: 'Lugar', datafield: 'lugar_completo', width:350},
          { text: 'Checa entrada', datafield: 'checa_entrada', width:100, cellsAlign: 'center'},
          { text: 'Checa salida', datafield: 'checa_salida', width:100, cellsAlign: 'center'}
        ]
    });
}
