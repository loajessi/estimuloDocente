// Función de inicialización de la vista

function personalEliminar() {alert("OK"); }

function validacionDatosInicializar() {

    var crearWidgets = function () {
	    PersonalTablaCargar("#jqxGrid_Docentes");
    };

    var agregarEventos = function () {

	    //$('#jqxGrid_Docentes').on('rowclick', function (event) {
	    $('#jqxGrid_Docentes').on('rowselect', function (event) {
		    var tiempoGuardar;

		    var data = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', event.args.rowindex);
		    $('#cd_RowIndex').val(event.args.rowindex);
		    $('#cd_idEstimulo').val(data.idEstimulo);
		    $('#cd_idPersonal').val(data.idPersonal);

		    //Si es una fila diferente, ejecutar nuevamente
		    if (event.args.rowindex != $('#cd_RowIndex').val()) {

			    //clearTimeout(tiempoGuardar);
			    //console.info('Guardado fila '+$('#cd_RowIndex').val());

			    //Terminar eventos de fila anterior
			    //$('#row'+ $('#cd_RowIndex').val() +'jqxGrid_Docentes').off('mouseenter').off('mouseleave');

			    //Restablecer campos
			    $('#contenedorDatos input').val('');

			    $('#cd_RowIndex').val(event.args.rowindex);
			    $('#cd_idEstimulo').val(data.idEstimulo);
			    $('#cd_idPersonal').val(data.idPersonal);

			    //$('#jqxGrid_Docentes').jqxGrid('beginrowedit', event.args.rowindex);

			    /*$('#row'+event.args.rowindex+'jqxGrid_Docentes').on('mouseleave', function () {
				    tiempoGuardar = setTimeout(function() {
					    console.info('Guardando fila '+event.args.rowindex);
				    }, 1000);
			    }).on('mouseenter', function () {
				    clearTimeout(tiempoGuardar);
			    });

			    $("#jqxGrid_Docentes").on('cellbeginedit', function (event) {
				    clearTimeout(tiempoGuardar);
				    console.info('Borrando tiempo');
			    });*/

		    }

	    });

    };

    crearWidgets();
    agregarEventos();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido

function btn_gradoAcademico(obj) {
	var row = $(obj).attr('data-row'),
		val = $(obj).attr('data-val');

	if (val == 'S') {
		$(obj).addClass('btnActivo btnCorrecto');
		$('#btnGradoAcademico_'+row+'_No').removeClass('btnActivo btnPeligro');
	} else if (val == 'N') {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnGradoAcademico_'+row+'_Si').removeClass('btnActivo btnCorrecto');
	}

	$('#cd_gradoAcademico').val(val);
	personalAgregarModificar();
}

function btn_puestoDrectivo(obj) {
	var row = $(obj).attr('data-row'),
		val = $(obj).attr('data-val');

	if (val == 'S') {
		$(obj).addClass('btnActivo btnCorrecto');
		$('#btnGradoAcademico_'+row+'_No').removeClass('btnActivo btnPeligro');
	} else if (val == 'N') {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnGradoAcademico_'+row+'_Si').removeClass('btnActivo btnCorrecto');
	}

	$('#cd_puestoDrectivo').val(val);
	personalAgregarModificar();
}