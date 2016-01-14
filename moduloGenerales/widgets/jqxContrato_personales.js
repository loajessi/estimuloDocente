function datos_contrato_personalesCargar(piPersonaID){
    var _contrato_personalesSource =
    {
        datatype: "json",
        datafields: [
            {name:'accion',type:'string'},          
            {name:'ID_CENTRO', type:'smallint'},
            {name:'id_contrato', type:'int'},
            {name:'id_persona', type:'int'},
            {name:'id_plaza', type:'int'},
            {name:'NUM_CONTRATO', type:'char'},
            {name:'Ap_Materno', type:'char'},
            {name:'Ap_Paterno', type:'char'},
            {name:'nombre', type:'char'},
            {name:'num_empleado', type:'int'},
            {name:'nombre_tipo', type:'char'},
            {name:'categoria', type:'char'},
            {name:'descripcionCategoria', type:'char'},
            {name:'id_tiempo', type:'smallint'},
            {name:'tiempo', type:'char'},
            {name:'CENTRO_COSTOS', type:'char'},
            {name:'nombre_plaza', type:'char'},
            {name:'id_nombre_plaza', type:'smallint'},
            {name:'rfc', type:'char'},
            {name:'curp', type:'char'},
            {name:'genero', type:'varchar'},
            {name:'estado_contrato', type:'char'},
            {name:'fecha_alta', type:'datetime'},            
            {name:'fecha_altaStr', type:'varchar'},   
            {name:'fecha_contratacion', type:'varchar'},            
            {name:'anio_anti', type:'int'},
            {name:'mes_anti', type:'int'},
            {name:'anio_anti_est', type:'int'},
            {name:'mes_anti_est', type:'int'},
            {name:'edad', type:'smallint'},
            {name:'fecha_nacimiento', type:'datetime'},
            {name:'nivel', type:'varchar'},
            {name:'estudio', type:'varchar'}
        ],
        url: "../moduloGenerales/modelo/modLista_contratos_personalesConsultar.php",
        type: 'POST',
        data: {'piPersonaID':piPersonaID},
        async: false
    };
    var dataAdapter = new $.jqx.dataAdapter(_contrato_personalesSource);
    return dataAdapter;
}

function datos_horario_empleadoCargar(piNoEmpleado){
    var _contrato_horarioSource =
    {
        datatype: "json",
        datafields: [                
            {name:'ciclo', type:'varchar'},
            {name:'id_oferta', type:'int'},
            {name:'oferta', type:'varchar'},
            {name:'horas_totales', type:'int'},
            {name:'semestre', type:'int'},
            {name:'grupo', type:'char'},
            {name:'id_escuela', type:'int'},
            {name:'escuela', type:'char'},
            {name:'plan_estudios', type:'varchar'},
            {name:'nivel', type:'char'},
            {name:'estatus', type:'char'},
            {name:'id_lugar', type:'int'},
            {name:'lugar_completo', type:'char'},
            {name:'checa_entrada', type:'char'},
            {name:'checa_salida', type:'char'},
            {name:'id_contrato', type:'smallint'},
            {name:'estatus', type:'char'},
            {name:'Total_Horas', type:'int'}
        ],
        url: "../moduloGenerales/modelo/modHorario_Empleado_Consultar.php",
        type: 'POST',
        data: {'piNoEmpleado':piNoEmpleado},
        async: false
    };
    var dataAdapter = new $.jqx.dataAdapter(_contrato_horarioSource);
    return dataAdapter;
}

function datos_contrato_gradosAcademicosCargar(piPersonaID){
    var _contrato_personalesSource =
    {
        datatype: "json",
        datafields: [            
            {name:'nivel', type:'varchar'},
            {name:'estudio', type:'varchar'}
        ],
        url: "../moduloGenerales/modelo/modContrato_gradosAcademicosConsultar.php",
        type: 'POST',
        data: {'piPersonaID':piPersonaID},
        async: false
    };
    var dataAdapter = new $.jqx.dataAdapter(_contrato_personalesSource);
    return dataAdapter;
}

function datos_contrato_personalesRegistroObtener(piNoEmpleado){
    $.ajax({
        async: false,
        url: "../moduloGenerales/modelo/modContrato_personalesConsultar.php",
        data: {piNoEmpleado : piNoEmpleado},
        type: 'POST',
        success: function (data, status, xhr) {  
            registro = jQuery.parseJSON(data);                   
        }
    });
    return registro;
}

function contrato_personalesTablaCargar(sControl){
    var dataAdapter= datos_contrato_personalesCargar();
    $(sControl).jqxGrid({
        width: 850,
        source: dataAdapter,                
        pageable: true,
        autoheight: true,
        sortable: true,
        autorowheight: true,
        theme: 'energyblue',
        localization: getLocalization('es'),
        filterable: true,
        columns: [
            {text: '', datafield: 'accion', width: '10%' },
            {text: 'ID_CENTRO', datafield: 'ID_CENTRO', width: 250 },
            {text: 'id_contrato', datafield: 'id_contrato', width: 250 },
            {text: 'id_persona', datafield: 'id_persona', width: 250 },
            {text: 'id_plaza', datafield: 'id_plaza', width: 250 },
            {text: 'NUM_CONTRATO', datafield: 'NUM_CONTRATO', width: 250 },
            {text: 'Ap_Materno', datafield: 'Ap_Materno', width: 250 },
            {text: 'Ap_Paterno', datafield: 'Ap_Paterno', width: 250 },
            {text: 'nombre', datafield: 'nombre', width: 250 },
            {text: 'num_empleado', datafield: 'num_empleado', width: 250 },
            {text: 'nombre_tipo', datafield: 'nombre_tipo', width: 250 },
            {text: 'categoria', datafield: 'categoria', width: 250 },
            {text: 'descripcionCategoria', datafield: 'descripcionCategoria', width: 250 },
            {text: 'id_tiempo', datafield: 'id_tiempo', width: 250 },
            {text: 'tiempo', datafield: 'tiempo', width: 250 },
            {text: 'CENTRO_COSTOS', datafield: 'CENTRO_COSTOS', width: 250 },
            {text: 'nombre_plaza', datafield: 'nombre_plaza', width: 250 },
            {text: 'id_nombre_plaza', datafield: 'id_nombre_plaza', width: 250 },
            {text: 'rfc', datafield: 'rfc', width: 250 },
            {text: 'curp', datafield: 'curp', width: 250 },
            {text: 'genero', datafield: 'genero', width: 250 },
            {text: 'estado_contrato', datafield: 'estado_contrato', width: 250 },
            {text: 'fecha_alta', datafield: 'fecha_alta', width: 250 },
            {text: 'fecha_contratacion', datafield: 'fecha_contratacion', width: 250 },
            {text: 'anio_anti', datafield: 'anio_anti', width: 250 },
            {text: 'mes_anti', datafield: 'mes_anti', width: 250 },
            {text: 'anio_anti_est', datafield: 'anio_anti_est', width: 250 },
            {text: 'mes_anti_est', datafield: 'mes_anti_est', width: 250 },
            {text: 'edad', datafield: 'edad', width: 250 },
            {text: 'fecha_nacimiento', datafield: 'fecha_nacimiento', width: 250 }
         ]
    });
}

function contrato_personalesComboCargar(sControl){
    var dataAdapter= datos_contrato_personalesCargar();
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

function contrato_personalesListBoxCargar(sControl){
    var dataAdapter= datos_contrato_personalesCargar();
    $(sControl).jqxListBox({
        source: dataAdapter
        ,displayMember:'option'
        ,valueMember:'value'
        ,width: '100%'
        ,theme: 'enegryBlue'
        ,disabled : true
    });
}

function contrato_personalesFormularioCargar(piNoEmpleado){
    var dataAdapter= datos_contrato_personalesRegistroObtener(piNoEmpleado);
    registro=dataAdapter[0];

    $('#lblNoEmpleado').html(registro.num_empleado)
    $('#lblNombreEmpleado').html(registro.Ap_Paterno + ' ' + registro.Ap_Materno + ' ' + registro.nombre)
    $('#lblRfc').html(registro.rfc)
    $('#lblCurp').html(registro.curp)
    $('#lblFechaContratacion').html(registro.fecha_contratacion)
    $('#lblAntiguedad').html(registro.anio_anti + ' a&ntilde;os ' + registro.mes_anti + ' meses')
    $('#hdnPersonaID').val(registro.id_persona)
}
