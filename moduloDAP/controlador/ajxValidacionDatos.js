// Función de inicialización de la vista

function validacionDatosInicializar() {

    var crearWidgets = function () {
	    PersonalTablaCargar("#jqxGrid_Docentes");
    };

    var agregarEventos = function () {

	    $('#jqxGrid_Docentes').on('rowselect', function (event) {

		    var puestoDrectivo = $('#cd_puestoDrectivo').val(),
			    gradoAcademico = $('#cd_gradoAcademico').val(),
			    asistencias = $('#cd_asistencias').val();

		    var data = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', event.args.rowindex);

		    if (event.args.rowindex != $('#cd_RowIndex').val()) {

			    if( $('#cd_Guardado').val() == '' && (puestoDrectivo!='' || gradoAcademico!='' || asistencias!='') ) {
				    notif({msg: '<b>No se guardaron los cambios</b>', type: 'error', position: 'right', width: 300, autohide: false});
			    }

			    //Restablecer campos
			    $('#contenedorDatos input').val('');

			    $('#cd_RowIndex').val(event.args.rowindex);
			    $('#cd_idEstimulo').val(data.idEstimulo);
			    $('#cd_idPersonal').val(data.idPersonal);

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
		$('#btnPuestoDrectivo_'+row+'_No').removeClass('btnActivo btnPeligro');
	} else if (val == 'N') {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnPuestoDrectivo_'+row+'_Si').removeClass('btnActivo btnCorrecto');
	}

	$('#cd_puestoDrectivo').val(val);
	personalAgregarModificar();
}