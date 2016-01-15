function datos_Docentes_ValidacionDatos_Cargar(pCicloEstimulo) {

    /*var Docentes_ValidacionDatosSource =
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
     var dataAdapter = new $.jqx.dataAdapter(Docentes_ValidacionDatosSource);
     return dataAdapter;*/

    //////////////////////
    var data = new Array();
    var accion =
        [
	        "<button class='btnInfoEmpleado' id='btngVerInfo' title='Ver informaci&oacute;n del empleado' onclick='verInformacionEmpleado()'; >Ver informaci&oacute;n del empleado</button>"
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

    var egel =
        [
            "Nivel 1", "Nivel 2", "Nivel 3"
        ];

    for (var i = 0; i < 200; i++) {
        var row = {};
        var idEstimulo = 1 + Math.round(Math.random() * 10);
        var numeroEmpleado = 2000 + Math.round(Math.random() * 100);
        var numeroHojas = 1 + Math.round(Math.random() * 10);
        var desempenoAula = Math.round(Math.random() * 999);
        var desempenoAcademico =  Math.round(Math.random() * 999);
        var innovacionEducativa = Math.round(Math.random() * 18);
        var tics = Math.round(Math.random() * 18);

        row["accion"] = accion[Math.floor(Math.random() * accion.length)];
        row["nombreCompleto"] = nombreCompleto[Math.floor(Math.random() * nombreCompleto.length)];
        row["tipo"] = tipos[Math.floor(Math.random() * tipos.length)];
        row["envioSolicitud"] = envioSolicitud[Math.floor(Math.random() * envioSolicitud.length)];
        row["idEstadoRevisado"] = estados[Math.floor(Math.random() * estados.length)];
        row["numeroHojas"] = numeroHojas;
        row["idEstimulo"] = idEstimulo;
        row["numeroEmpleado"] = numeroEmpleado;
        data[i] = row;

        row ["egel"] = egel[Math.floor(Math.random() * egel.length)];
        row ["desempenoAula"] = desempenoAula;
        row ["desempenoAcademico"] = desempenoAcademico;
        row ["innovacionEducativa"] = innovacionEducativa;
        row ["tics"] = tics;


    }
    var source =
    {
        localdata: data,
        datatype: "array",
        datafields: [
            {name: 'accion', type: 'string'},
            {name: 'idEstimulo', type: 'bigint'},
            {name: 'idEstadoRevisado', type: 'bigint'},
            {name: 'numeroEmpleado', type: 'bigint'},
            {name: 'nombreCompleto', type: 'varchar'},
            {name: 'tipo', type: 'varchar'},
            {name: 'envioSolicitud', type: 'varchar'},
            {name: 'numeroHojas', type: 'int'},
            {name: 'desempenoAula', type: 'int'},
            {name: 'desempenoAcademico', type: 'int'},
            {name: 'innovacionEducativa', type: 'int'},
            {name: 'tics', type: 'int'},
            {name: 'egel', type: 'varchar'}

]
}
    ;
    var dataAdapter = new $.jqx.dataAdapter(source);

    return dataAdapter;
}

function Docentes_ValidacionDatos_TablaCargar(sControl, piCicloEstimuloID) {
    var dataAdapter = datos_Docentes_ValidacionDatos_Cargar(piCicloEstimuloID);
    dataAdapter.dataBind();
    var registros = dataAdapter.records;

    Docentes_ValidacionDatos_FormularioEnvioCargar(registros);

    var cellsrenderer = function (row, column, value, defaultHtml) {
        var hdnEstado = "#hdnEstado_" + registros[row].idEstimulo;
        var sEstado = $(hdnEstado).val();
        var element = $(defaultHtml);
        return element[0].outerHTML;
    };

   /* var egel =
     {
         datatype: "array",
         localdata:
            [
                {nombre: "nivel 1"},
                {nombre: "nivel 2"},
                {nombre: "nivel 3"}

            ]
     };

    var egelSource =
    {
        datatype: "array",
        datafields: [
            { name: 'egel', type: 'string' }
        ],
        localdata: egel
    };
    var egelAdapter = new $.jqx.dataAdapter(egelSource);
*/

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
            {text: 'No. empleado', datafield: 'numeroEmpleado', cellsalign: 'center', editable: false, width: '115px', cellsrenderer: cellsrenderer },
            {text: 'Nombre completo', datafield: 'nombreCompleto', editable: false, width: '272px', cellsrenderer: cellsrenderer,},
            {text: 'Desempe&ntilde;o en el aula (Alumnos)', datafield: 'desempenoAula', cellsalign: 'center', editable: true, width: '167px', columntype: 'numberinput', cellsrenderer: cellsrenderer,
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
            {text: 'Desempe&ntilde;o acad&eacute;mico (Directivos, Academicos)', datafield: 'desempenoAcademico', cellsalign: 'center', editable: true, width: '167px', columntype: 'numberinput', cellsrenderer: cellsrenderer,
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
            {text: 'Innovaci&oacute;n educativa', datafield: 'innovacionEducativa', cellsalign: 'center', editable: true, width: '121px', columntype: 'combobox', cellsrenderer: cellsrenderer,
            renderer: function(){return '<div class="jxGrid_headerDoble txtCentrado">Innovaci&oacute;n<br />educativa</div>';},
                validation: function (cell, value) {
                    var row = cell.row;
                    if (value < 0 || value > 18) {
                        $(sControl).jqxGrid('cellbeginedit', row, "InnovacionEducativa");
                        return {result: false, message: "El valor debe estar entre 0 y 18"};
                    } else { return true; }
                },
            },
            {text: 'TICS', align: 'center', datafield: 'tics', cellsalign: 'center', editable: true, width: '121px', columntype: 'combobox', cellsrenderer: cellsrenderer,
                validation: function (cell, value) {
                    var row = cell.row;
                    if (value < 0 || value > 18) {
                        $(sControl).jqxGrid('cellbeginedit', row, "InnovacionEducativa");
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

function Docentes_ValidacionDatos_FormularioEnvioCargar(arrDocentes) {

    $("#frmValidacionDatos").html('');

    for (var i = 0; i < arrDocentes.length; i++) {
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
        $("#frmValidacionDatos").append(mapInputEstado);
        $("#frmValidacionDatos").append(mapInputNoHojas);
    }
}

function docentes_ValidacionDatos_CambiarEstado(idEstimuloLista, idCicloEstimulo) {
    var sPagina = "modelo/modDocentes_ValidacionDatos_CambiarEstado.php";
    var oParametros = $('#frmValidacionDatos').serialize();
    oParametros += "&idEstimuloLista=" + idEstimuloLista;

    $.post(sPagina, oParametros, function (datos, status) {
        if (status == 'success') {
            $("#btnGuardar").html("Guardar");
            eval(datos);
            if (json.noError > 0) {
                var sListaErrores = json.mensaje;
                //sListaErrores.replace(/,/g, '');

                alert("Ocurrieron errores de base de datos en las filas: \n\n" + sListaErrores);
            }
            else {
                alert("Su informaci\u00f3n se registr\u00f3 correctamente en la base de datos.");
                DocentesValidacionDatosTablaCargar(idCicloEstimulo);
            }
        }
    });
}