function datos_Docentes_RevisionDocumentos_Cargar(pCicloEstimulo){

	/*var Docentes_RevisionDocumentosSource =
	{
		datatype: "json",
		datafields: [
			{name:'accion',type:'string'},
			{name:'idEstimulo', type:'bigint'},
            {name:'idEstadoRevisado', type:'bigint'},
			{name:'numeroEmpleado', type:'bigint'},
			{name:'nombreCompleto', type:'varchar'},
			{name:'tipo', type:'varchar'},
			{name:'envioSolicitud', type:'varchar'},
            {name:'numeroHojas', type:'int'}
 		],
		url: "/modelo/modListadocentesAprobadosConsultar.php",
		type: 'POST',
		data: {'pCicloEstimulo':pCicloEstimulo},
		async: false
	};
	var dataAdapter = new $.jqx.dataAdapter(Docentes_RevisionDocumentosSource);
	return dataAdapter;*/

    //////////////////////
    var data = new Array();
    var accion =
    [
        "<div id='divEstadoCosto_100' align='center'><button style='padding:2px 2px 2px 2px; cursor:pointer;' id='btngVerInfo' title='Ver informaci&oacute;n del empleado' onclick='verInformacionEmpleado()'; ><img src='/generalesDIyS/_img/iconoUsuario.png'/></button>&nbsp;&nbsp;<button style='padding:2px 2px 2px 2px; cursor:pointer;' id='btngAprobar' title='Validar' onclick='estadoAutorizadoCambiar(100, 0)'; ><img src='/generalesDIyS/_img/iconoAprobar.png'/></button><button style='padding:2px 2px 2px 2px; cursor:pointer;' id='btngRechazar' title='Rechazar' onclick='estadoAutorizadoCambiar(100, 1)'; ><img src='/generalesDIyS/_img/iconoRemover.png'/></button></div>"
    ];
    var nombreCompleto =
    [
        "Flores Lopez Teodoro", "Trejo Rivas Alejandra", "Morales Islas Teresa", "Sanchez Espinosa Xochitl",
        "Espinosa Osorio Carlos", "Saavedra Cervantes Mario", "Oropeza Lopez Pedro", "Dominguez Saavedra Marisol",
        "Perez Diaz Karla", "Prado Zapata Liliana", "Cervantes Soria Olga", "Barron Quintero Luciana", "Perez Diaz Luis",
        "Rosas Villa Lorena", "Valle Ortiz Elena", "Zapata Flores Eduardo", "Nuno Islas Sandra", "Narez Rios Esperanza"
    ];
    var tipos =
    [
        "PTC", "PMT", "PH"
    ];

    var envioSolicitud =
    [
        "20/01/2016", "15/01/2016", "16/01/2015", "17/01/2016", "18/01/2016", "19/01/2016", "21/01/2016"
    ];

    var estados =
    [
        "Si", "No"
    ];
    for (var i = 0; i < 200; i++) {
        var row = {};
        var idEstimulo = 1 + Math.round(Math.random() * 10);
        var numeroEmpleado = 2000 + Math.round(Math.random() * 100);
        var numeroHojas = 1 + Math.round(Math.random() * 10);

        row["accion"] = accion[Math.floor(Math.random() * accion.length)];
        row["nombreCompleto"] = nombreCompleto[Math.floor(Math.random() * nombreCompleto.length)];
        row["tipo"] = tipos[Math.floor(Math.random() * tipos.length)];
        row["envioSolicitud"] = envioSolicitud[Math.floor(Math.random() * envioSolicitud.length)];
        row["idEstadoRevisado"] = estados[Math.floor(Math.random() * estados.length)];
        row["numeroHojas"] = numeroHojas;
        row["idEstimulo"] = idEstimulo;
        row["numeroEmpleado"] = numeroEmpleado;
        data[i] = row;
    }
    var source =
    {
        localdata: data,
        datatype: "array",
        datafields:
        [
            {name:'accion',type:'string'},
            {name:'idEstimulo', type:'bigint'},
            {name:'idEstadoRevisado', type:'bigint'},
            {name:'numeroEmpleado', type:'bigint'},
            {name:'nombreCompleto', type:'varchar'},
            {name:'tipo', type:'varchar'},
            {name:'envioSolicitud', type:'varchar'},
            {name:'numeroHojas', type:'int'}
        ]
    };
    var dataAdapter = new $.jqx.dataAdapter(source);

    return dataAdapter;
}

function Docentes_RevisionDocumentos_TablaCargar(sControl, piCicloEstimuloID){
    var dataAdapter = datos_Docentes_RevisionDocumentos_Cargar(piCicloEstimuloID);
    dataAdapter.dataBind();
    var registros = dataAdapter.records;

    Docentes_RevisionDocumentos_FormularioEnvioCargar(registros);

    var cellsrenderer = function (row, column, value, defaultHtml) {
        var hdnEstado = "#hdnEstado_" + registros[row].idEstimulo;
        var sEstado = $(hdnEstado).val();
        var colorTexto = "";

        if(sEstado == 'Si') colorTexto = 'Green';
        else if(sEstado == 'No') colorTexto = 'Red';

        var element = $(defaultHtml);
        element.css({ 'color': colorTexto });
        return element[0].outerHTML;
    }

    $(sControl).jqxGrid({
        width: '99.5%',
        height: "455px",
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
          { text: '', datafield: 'accion', width:'10%', cellsalign: 'center', editable: false, pinned: true, filterable: false, sortable: false, menu:false },
          { text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '15%',  cellsrenderer: cellsrenderer },
          { text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '40%',  cellsrenderer: cellsrenderer },
          { text: 'Tipo', datafield: 'tipo', editable: false, width: '5%', cellsrenderer: cellsrenderer },
          { text: 'Env&iacute;o de solicitud', datafield: 'envioSolicitud', editable: false, width: '15%', cellsrenderer: cellsrenderer },
          { text: 'No. hojas', datafield: 'numeroHojas', cellsalign: 'center', width: '15%', columntype: 'numberinput', cellsrenderer: cellsrenderer,
                /*validation: function (cell, value) {
                    var hdnEstado = "#hdnEstado_" + registros[row].idEstimulo;
                    var sEstado = $(hdnEstado).val();
                    var row = cell.row;

                    if(value == 0) {
                        $(sControl).jqxGrid('beginrowedit', row, "numeroHojas");
                        if(sEstado == 'Si')
                            return { result: false, message: "No ha editado el número de hojas del expediente." };
                    }
                    else
                        return true;
                },
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    var cadena = newvalue + '';
                    cadena.replace(/,/g, '');
                    newvalue = parseInt(cadena);
                    return newvalue;
                },*/
                createeditor: function (row, cellvalue, editor) {
                                    editor.jqxNumberInput({
                                        digits: 3,
                                        decimalDigits:0,
                                        min: 0,
                                        inputMode: 'advanced',
                                        spinMode: 'simple',
                                        spinButtonsStep: 1,
                                        spinButtons:true,
                                        theme: 'energyblue'
                                    });
                              },
                cellbeginedit: function (row, datafield, columntype) {
                                    var hdnEstado = "#hdnEstado_" + registros[row].idEstimulo;
                                    var sEstado = $(hdnEstado).val();

                                    if(sEstado == 'No') return false;
                               },
                cellendedit: function (row, datafield, columntype, oldvalue, newvalue) {
                    var iEstimuloID = registros[row].idEstimulo;
                    var hdnEstado = "#hdnEstado_" + iEstimuloID;

                    if(newvalue == 0){
                        var sEstado = "No";
                        $(hdnEstado).val(sEstado);
                    }
                }
          }
        ]
    });
}

function Docentes_RevisionDocumentos_FormularioEnvioCargar(arrDocentes){

    $("#frmRevisionDocumentos").html('');

    for(var i=0; i<arrDocentes.length; i++){
        var idEstimulo = arrDocentes[i].idEstimulo;

        // Input estado
        var mapInputEstado = document.createElement("input");
        mapInputEstado.type = "hidden";
        mapInputEstado.id = "hdnEstado_" + idEstimulo;
        mapInputEstado.name = "hdnEstado_" + idEstimulo;
        mapInputEstado.value = arrDocentes[i].idEstadoRevisado;

        // Input hojas expediente
        var mapInputNoHojas = document.createElement("input");
        mapInputNoHojas.type = "hidden";
        mapInputNoHojas.id = "hdnNoHojas_" + idEstimulo;
        mapInputNoHojas.name = "hdnNoHojas_" + idEstimulo;
        mapInputNoHojas.value = arrDocentes[i].numeroHojas;

        // Agrega el input al form
        $("#frmRevisionDocumentos").append(mapInputEstado);
        $("#frmRevisionDocumentos").append(mapInputNoHojas);
    }
}

function docentes_RevisionDocumentos_CambiarEstado(idEstimuloLista, idCicloEstimulo){
    var sPagina = "modelo/modDocentes_RevisionDocumentos_CambiarEstado.php";
    var oParametros = $('#frmRevisionDocumentos').serialize();
    oParametros += "&idEstimuloLista=" + idEstimuloLista;

    $.post(sPagina, oParametros, function(datos,status){
        if(status=='success'){
            $("#btnGuardar").html("Guardar");
            eval(datos);
            if(json.noError > 0){
                var sListaErrores = json.mensaje;
                //sListaErrores.replace(/,/g, '');

                alert("Ocurrieron errores de base de datos en las filas: \n\n" + sListaErrores);
            }
            else{
                alert("Su informaci\u00f3n se registr\u00f3 correctamente en la base de datos.");
                DocentesRevisionDocumentosTablaCargar(idCicloEstimulo);
            }
        }
    });
}