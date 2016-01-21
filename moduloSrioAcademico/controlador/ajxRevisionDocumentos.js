// Funci�n de inicializaci�n de la vista

function revisionDocumentosInicializar() {
//function validacionDatosInicializar() {

	var crearWidgets = function () {

		/*$("#jqxButtonGroup_Estado").jqxButtonGroup({
			mode: 'radio',
			enableHover: true,
			theme: 'energyblue'
		});*/
	};

	var agregarEventos = function () {

		/*$("#btnGuardar").on("click", function (event) {
			//Reemplazar texto por "Guardando..."
			var elemento = $(this),
				txtOriginal = $(elemento).html();
			$(this).html("Guardando...");

			// Guarda en la BD

			//Envio exitoso
			//Actualizar datos despu�s de agregar patente...

			window.setTimeout(function() {
				//Restarurar texto original
				$(elemento).html(txtOriginal);
			}, 1500);
		});

		$("#btnCancelar").on("click", function (event) {
			Docentes_RevisionDocumentos_TablaCargar("#jqxGrid_Docentes");
		});

//    $('#jqxButtonGroup_Estado').on('selected', function () {
//    });*/

	}

	crearWidgets();
	agregarEventos();
	SecretarioAcademicoTablaCargar("#jqxGrid_Docentes");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones correspondientes a eventos o inicializaci�n de contenido

/*function estadoAutorizadoCambiar(piEstimuloID, piEstado) {
	var arrDocentes = $("#jqxGrid_Docentes").jqxGrid('getrows');
	var sEstado = "";
	var hdnEstado = "";
	var bBreak = false;
	var idEstimulo = -1;

	if (piEstado == 0) sEstado = 'Si'; // V�lido
	else if (piEstado == 1) sEstado = 'No'; // No v�lido

	for (var iFila = 0; iFila < arrDocentes.length; iFila++) {
		if (piEstimuloID > -1) {
			if (arrDocentes[iFila].idEstimulo == piEstimuloID) {
				idEstimulo = piEstimuloID;
				bBreak = true;
			}
		}
		else
			idEstimulo = arrDocentes[iFila].idEstimulo;

		if (idEstimulo > -1) {
			$("#jqxGrid_Docentes").jqxGrid('endrowedit', iFila, true);

			hdnEstado = "#hdnEstado_" + idEstimulo;
			$(hdnEstado).val(sEstado);

			if (sEstado == 'No')
				$("#jqxGrid_Docentes").jqxGrid('setcellvalue', iFila, "numeroHojas", 0);
			else if (sEstado == 'Si') {
				if (piEstimuloID == -1) $("#jqxGrid_Docentes").jqxGrid('beginrowedit', 0, "numeroHojas");
				else  $("#jqxGrid_Docentes").jqxGrid('beginrowedit', iFila, "numeroHojas");

				$("#jqxGrid_Docentes").jqxGrid('setcellvalue', iFila, "numeroHojas", arrDocentes[iFila].costoTotal);
			}

			if (bBreak) break;
		}
	}
}

function validaCambioEstados() {
	var arrDocentes = $("#jqxGrid_Docentes").jqxGrid('getrows');
	var msjError = '';
	var erroresHojas = "No ha capturado el no. de hojas del expediente:\n\n";
	var validoHojas = true;

	$('#jqxGrid_Docentes').jqxGrid('clearselection');

	for (var i = 0; i < arrDocentes.length; i++) {
		var idEstimulo = arrDocentes[i].idEstimulo;
		var hdnEstado = "#hdnEstado_" + idEstimulo;
		var sEstado = $(hdnEstado).val();
		var numeroHojas = arrDocentes[i].numeroHojas;
		var iFila = i + 1;


		if ((sEstado == 'Si') && (numeroHojas == 0)) {
			validoHojas = false;
			erroresHojas += iFila + ', ';
		}
	}

	if (!validoHojas) msjError += erroresHojas;

	return msjError;
}
*/