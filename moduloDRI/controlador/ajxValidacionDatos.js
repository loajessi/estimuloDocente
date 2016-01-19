// Función de inicialización de la vista

function validacionDatosInicializar() {

    var crearWidgets = function () {
	    RelacionesInternacionalesTablaCargar("#jqxGrid_Docentes");


    };

    var agregarEventos = function () {


	    $('#jqxGrid_Docentes').on('rowselect', function (event) {
		    var fila = event.args.rowindex,
			    filaAnterior = $('#cd_g_rowAnterior').val(),
			    idRelacionesInternacionales = $('#cd_f'+filaAnterior+'_idRelacionesInternacionales').val();

		    // Datos de fila anterior
		    var becaFederal = $('#cd_f'+filaAnterior+'_becaFederal').val(),
			    fechaInicioBecaFederal = $('#cd_f'+filaAnterior+'_fechaInicioBecaFederal').val(),
			    fechaTerminoBecaFederal = $('#cd_f'+filaAnterior+'_fechaTerminoBecaFederal').val();

		    // Comprobar fila anterior
		    if( idRelacionesInternacionales == '' && (becaFederal!='' || fechaInicioBecaFederal!='' || fechaTerminoBecaFederal!='') ) {
			    notif({msg: '<b>No se guardaron los cambios</b>', type: 'error', position: 'right', width: 400, autohide: false});

			    //Restablecer campos fila anterior para indicar que no se guardó la información
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'becaFederal', '');
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'fechaInicioBecaFederal', '');
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'fechaTerminoBecaFederal', '');
			    $('#cd_f'+filaAnterior+'_becafederal').val('');
			    $('#cd_f'+filaAnterior+'_fechaInicioBecaFederal').val('');
			    $('#cd_f'+filaAnterior+'_fechaTerminoBecaFederal').val('');
			    //cargarInputsAsistencias();
		    }

		    $('#cd_g_rowAnterior').val(fila);
	    });

    };

    crearWidgets();
    agregarEventos();
	//RelacionesInternacionalesTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido
function btn_becaFederal(obj) {
	var row = $(obj).attr('data-row'),
		val = $(obj).attr('data-val');

	if (val == 1) {
		$(obj).addClass('btnActivo');
		$('#btnbecaFederal_'+row+'_No').removeClass('btnActivo');
	} else if (val == 0) {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnbecaFederal_'+row+'_Si').removeClass('btnActivo');
	}

	$('#cd_f'+row+'_becaFederal').val(val);
	relacionesInternacionalesAgregarModificar(row);
}