// Función de inicialización de la vista

function validacionDatosInicializar() {

    var crearWidgets = function () {
	    PersonalTablaCargar("#jqxGrid_Docentes");
    };

    var agregarEventos = function () {

	    $('#jqxGrid_Docentes').on('rowselect', function (event) {

		    // Datos del grid
		    var data = $('#jqxGrid_Docentes').jqxGrid('getrowdatabyid', event.args.rowindex);

		    // Datos de campos
		    var puestoDrectivo = $('#cd_puestoDrectivo').val(),
			    gradoAcademico = $('#cd_gradoAcademico').val(),
			    asistencias = $('#cd_asistencias').val();

		    // Comprobar fila anterior
		    if( $('#cd_Guardado').val() == '' && (puestoDrectivo!='' || gradoAcademico!='' || asistencias!='') ) {
			    notif({msg: '<b>No se guardaron los cambios</b>', type: 'error', position: 'right', width: 300, autohide: false});

			    //Restablecer campos fila anterior para indicar que no se guardó la información
			    $('#jqxGrid').jqxGrid('refreshdata');
		    }

		    //Restablecer campos
		    $('#contenedorDatos input').val('');

		    if (data.puestoDirectivo != '' && puestoDrectivo == '') {
			    $('#cd_puestoDrectivo').val(data.puestoDirectivo);
		    }

		    if (data.gradoAcademico != '' && gradoAcademico == '') {
			    $('#cd_gradoAcademico').val(data.gradoAcademico);
		    }

		    if (data.asistencias != '' && asistencias == '') {
			    $('#cd_asistencias').val(data.asistencias);
		    }

		    $('#cd_RowIndex').val(event.args.rowindex);
		    $('#cd_idEstimulo').val(data.idEstimulo);
		    $('#cd_idPersonal').val(data.idPersonal);

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

	if (val == 1) {
		$(obj).addClass('btnActivo');
		$('#btnGradoAcademico_'+row+'_No').removeClass('btnActivo');
	} else if (val == 0) {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnGradoAcademico_'+row+'_Si').removeClass('btnActivo');
	}

	$('#cd_gradoAcademico').val(val);
	personalAgregarModificar();
}

function btn_puestoDrectivo(obj) {
	var row = $(obj).attr('data-row'),
		val = $(obj).attr('data-val');

	if (val == 1) {
		$(obj).addClass('btnActivo');
		$('#btnPuestoDrectivo_'+row+'_No').removeClass('btnActivo');
	} else if (val == 0) {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnPuestoDrectivo_'+row+'_Si').removeClass('btnActivo');
	}

	$('#cd_puestoDrectivo').val(val);
	personalAgregarModificar();
}