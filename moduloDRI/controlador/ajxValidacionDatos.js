// Función de inicialización de la vista

function validacionDatosInicializar() {

    var crearWidgets = function () {
	    RelacionesInternacionalesTablaCargar("#jqxGrid_Docentes");

    };

    var agregarEventos = function () {

	    $('.datepicker').on('change', function() {
		    relacionesInternacionalesAgregarModificar( $('#jqxGrid_Docentes').jqxGrid('getselectedrowindex') );
	    });

	    $('input[id$="_fechaInicioBecaFederal"]').on('change', relacionesInternacionalesAgregarModificar($('#jqxGrid_Docentes').jqxGrid('getselectedrowindex')));
	    $('input[id$="_fechaTerminoBecaFederal"]').on('change', relacionesInternacionalesAgregarModificar($('#jqxGrid_Docentes').jqxGrid('getselectedrowindex')));

	    $('#jqxGrid_Docentes').on('rowselect', function (event) {
		    var fila = event.args.rowindex,
			    filaAnterior = $('#cd_g_rowAnterior').val();

			var guardado = $('#cd_f'+filaAnterior+'_Guardado').val(),
			    idRelacionesInternacionales = $('#cd_f'+filaAnterior+'_idRelacionesInternacionales').val();

		    // Datos de fila anterior
		    var becaFederal= $('#cd_f'+filaAnterior+'_becaFederal').val(),
			    fechaInicioBecaFederal = $('#cd_f'+filaAnterior+'_fechaInicioBecaFederal').val(),
			    fechaTerminoBecaFederal = $('#cd_f'+filaAnterior+'_fechaTerminoBecaFederal').val();

		    // Comprobar fila anterior
		    if( idRelacionesInternacionales == '' && becaFederal!='' && fechaInicioBecaFederal!='' && fechaTerminoBecaFederal!='' ) {
			    relacionesInternacionalesAgregarModificar(filaAnterior);
		    } else if( idRelacionesInternacionales == '' && (becaFederal!='' || fechaInicioBecaFederal!='' || fechaTerminoBecaFederal!='') ) {
			    $('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'becaFederal', false);
			    $('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'fechaInicioBecaFederal', false);
			    $('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'fechaTerminoBecaFederal', false);
			    notif({msg: '<b>No se guardaron los cambios</b>', type: 'error', position: 'right', width: 400, autohide: false});

			    //Restablecer campos fila anterior para indicar que no se guardó la información
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'becaFederal', '');
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'fechaInicioBecaFederal', '');
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'fechaTerminoBecaFederal', '');
			    $('#cd_f'+filaAnterior+'_becaFederal').val('');
			    $('#cd_f'+filaAnterior+'_fechaInicioBecaFederal').val('');
			    $('#cd_f'+filaAnterior+'_fechaTerminoBecaFederal').val('');

			    crearDatepickers();
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
		$('#btnBecaFederal_'+row+'_No').removeClass('btnActivo');

		// Habilitar fechas
		$('input[data-campo="fechaInicioBecaFederal"][data-fila="'+row+'"]').datepicker('option', 'disabled', false);
		$('input[data-campo="fechaTerminoBecaFederal"][data-fila="'+row+'"]').datepicker('option', 'disabled', false);
	} else if (val == 0) {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnBecaFederal_'+row+'_Si').removeClass('btnActivo');

		// Fechas en nulo
		$('#cd_f'+row+'_fechaInicioBecaFederal').val('');
		$('#cd_f'+row+'_fechaTerminoBecaFederal').val('');
		$('input[data-campo="fechaInicioBecaFederal"][data-fila="'+row+'"]').datepicker('setDate', null).datepicker('option', 'disabled', true);
		$('input[data-campo="fechaTerminoBecaFederal"][data-fila="'+row+'"]').datepicker('setDate', null).datepicker('option', 'disabled', true);
	}

	$('#cd_f'+row+'_becaFederal').val(val);
	relacionesInternacionalesAgregarModificar(row);
}