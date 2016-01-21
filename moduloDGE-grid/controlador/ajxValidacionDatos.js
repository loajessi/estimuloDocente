// Función de inicialización de la vista

function validacionDatosInicializar() {

	var crearWidgets = function () {


	};

	var agregarEventos = function () {

		$('#jqxGrid_Docentes').on('rowselect', function (event) {
			var fila = event.args.rowindex,
				filaAnterior = $('#cd_g_rowAnterior').val(),
				guardado = $('#cd_f'+filaAnterior+'_Guardado').val(),
				idEvaluacion = $('#cd_f'+filaAnterior+'_idEvaluacion').val();

			// Datos de fila anterior
			var desempenoAula = $('#cd_f'+filaAnterior+'_desempenoAula').val(),
				desempenoAcademico = $('#cd_f'+filaAnterior+'_desempenoAcademico').val(),
				innovacion = $('#cd_f'+filaAnterior+'_innovacion').val(),
				tics = $('#cd_f'+filaAnterior+'_tics').val(),
				egel = $('#cd_f'+filaAnterior+'_egel').val();

			// Comprobar fila anterior
			//if( idEvaluacion == '' && (desempenoAula!='' || desempenoAcademico!='' || innovacion!='' || tics!='' || egel!='') ) {
			if( idEvaluacion == '' && guardado=='' ) {
				$('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'desempenoAula', false);
				$('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'desempenoAcademico', false);
				$('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'innovacion', false);
				$('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'tics', false);
				$('#jqxGrid_Docentes').jqxGrid('endcelledit', filaAnterior, 'egel', false);
				notif({msg: '<b>No se guardaron los cambios</b>', type: 'error', position: 'right', width: 400, autohide: false});

				//Restablecer campos fila anterior para indicar que no se guardó la información
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'desempenoAula', '');
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'desempenoAcademico', '');
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'innovacion', '');
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'tics', '');
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'egel', '');
				$('#cd_f'+filaAnterior+'_desempenoAula').val('');
				$('#cd_f'+filaAnterior+'_desempenoAcademico').val('');
				$('#cd_f'+filaAnterior+'_innovacion').val('');
				$('#cd_f'+filaAnterior+'_tics').val('');
				$('#cd_f'+filaAnterior+'_egel').val('');
			}

			$('#cd_g_rowAnterior').val(fila);
		});


		$('.jqxNumberInput_asistencias').change(function (event) {
			var fila = $(this).attr('data-row'),
				valor = $(this).val();

			$('#cd_f'+fila+'_asistencias').val(valor);
			$(this).attr('data-value', valor);

			personalAgregarModificar(fila);
		});

	};

	crearWidgets();
	agregarEventos();
	EvaluacionTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicialización de contenido