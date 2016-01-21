// Función de inicialización de la vista

function validacionDatosInicializar() {

    var crearWidgets = function () {
	    PersonalTablaCargar("#jqxGrid_Docentes");
    };

    var agregarEventos = function () {

	    $('.jqxNumberInput_asistencias').each(function () {
		    $(this).on('keydown', function (e) {
			    if (e.keyCode==13){
				    $(this).trigger('change');
			    }
		    })
	    });

	    $('#jqxGrid_Docentes').on('rowselect', function (event) {
		    var fila = event.args.rowindex,
			    filaAnterior = $('#cd_g_rowAnterior').val(),
			    idPersonal = $('#cd_f'+filaAnterior+'_idPersonal').val();

		    // Datos de fila anterior
		    var puestoDrectivo = $('#cd_f'+filaAnterior+'_puestoDrectivo').val(),
			    gradoAcademico = $('#cd_f'+filaAnterior+'_gradoAcademico').val(),
			    asistencias = $('#cd_f'+filaAnterior+'_asistencias').val();

		    // Comprobar fila anterior
		    if( idPersonal == '' && (puestoDrectivo!='' || gradoAcademico!='' || asistencias!='') ) {
			    notif({msg: '<b>No se guardaron los cambios</b>', type: 'error', position: 'right', width: 400, autohide: false});

			    //Restablecer campos fila anterior para indicar que no se guardó la información
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'puestoDrectivo', '');
			    $('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'gradoAcademico', '');
			    $('#input_'+filaAnterior+'_asistencias').val('');
			    $('#cd_f'+filaAnterior+'_puestoDrectivo').val('');
				$('#cd_f'+filaAnterior+'_gradoAcademico').val('');
				$('#cd_f'+filaAnterior+'_asistencias').val('');
			    cargarInputsAsistencias();
		    }

		    $('#cd_g_rowAnterior').val(fila);
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

	$('#cd_f'+row+'_gradoAcademico').val(val);
	personalAgregarModificar(row);
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

	$('#cd_f'+row+'_puestoDrectivo').val(val);
	personalAgregarModificar(row);
}

/*
	Crear widgets al cambiar de página - OK
	Crear widgets al cambiar el filtro - OK
	Crear widgets al cambiar el orden - OK

	Crear campos placeholder para todos los registros devueltos
	Crear banderas en esos campos y no tocarlos cuando se hayan guardado
	Inicializar todos los controles con los valores devueltos

	Campos numericos con valor nulo de BD en texto blanco, cambiar atributo al editar y mostrar en negro
 */