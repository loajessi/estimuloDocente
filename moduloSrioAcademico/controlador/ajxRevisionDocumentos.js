// Función de inicialización de la vista

function revisionDocumentosInicializar() {

	var crearWidgets = function () {
		SecretarioAcademicoTablaCargar("#jqxGrid_Docentes");
	};

	var agregarEventos = function () {

		$('.jqxNumberInput_validado').each(function () {
			$(this).on('keydown', function (e) {
				if (e.keyCode==13){
					$(this).trigger('change');
				}
			})
		});

		$('#jqxGrid_Docentes').on('rowselect', function (event) {
			var fila = event.args.rowindex,
				filaAnterior = $('#cd_g_rowAnterior').val(),
				idSecretario = $('#cd_f'+filaAnterior+'_idSecretario').val();

			// Datos de fila anterior
			var validado = $('#cd_f'+filaAnterior+'_validado').val(),
				numeroHojas = $('#cd_f'+filaAnterior+'_numeroHojas').val();
				//asistencias = $('#cd_f'+filaAnterior+'_asistencias').val();

			// Comprobar fila anterior
			if( idSecretario == '' && validado !='' && numeroHojas !='' ) {
				secretarioAcademicoAgregarModificar(filaAnterior);
			} else if( idSecretario == '' && (validado!='' || numeroHojas!='' ) ) {
				notif({msg: '<b>No se guardaron los cambios</b>', type: 'error', position: 'right', width: 400, autohide: false});

				//Restablecer campos fila anterior para indicar que no se guardó la información
				$('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'validado', '');
				//$('#jqxGrid_Docentes').jqxGrid('setcellvalue', filaAnterior, 'gradoAcademico', '');
				$('#input_'+filaAnterior+'_numeroHojas').val('');
				$('#cd_f'+filaAnterior+'_validado').val('');
				//$('#cd_f'+filaAnterior+'_gradoAcademico').val('');
				$('#cd_f'+filaAnterior+'_numeroHojas').val('');
				cargarInputsNumeroHojas();
			}

			$('#cd_g_rowAnterior').val(fila);
		});

	};


	crearWidgets();
	agregarEventos();
	//SecretarioAcademicoTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones correspondientes a eventos o inicialización de contenido
function btn_validado(obj) {
	var row = $(obj).attr('data-row'),
		val = $(obj).attr('data-val');

	if (val == 1) {
		$(obj).addClass('btnActivo');
		$('#btnValidado_'+row+'_No').removeClass('btnActivo');
	} else if (val == 0) {
		$(obj).addClass('btnActivo btnPeligro');
		$('#btnValidado_'+row+'_Si').removeClass('btnActivo');
	}

	$('#cd_f'+row+'_validado').val(val);
	secretarioAcademicoAgregarModificar(row);
}
