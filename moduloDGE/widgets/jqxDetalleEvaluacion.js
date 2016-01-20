function Docentes_DetalleEvaluacion_CargarVista(datosFila) {

	$.get('vista/vtaDetalleEvaluacion.php', function (data, status) {
		if (status == 'success') {
			$("#detalleEvaluacion").html(data);
			// Inicializar datos
			$('#NombreEmpleado').html(datosFila.nombreCompleto);
			$('#hdnIdEstimulo').val(datosFila.idEstimulo);
			$('#hdnIdEvaluacion').val(datosFila.idEvaluacion);
			$('#hdnNumeroEmpleado').val(datosFila.numeroEmpleado);
			detalleEvaluacionInicializar();

			if (datosFila.idEvaluacion != "") {
				// LLenar widgets con datos existentes

				$('#desempenoAula').val(datosFila.desempenoAula);
				$('#desempenoAcademico').val(datosFila.desempenoAcademico);

				// Cargar listas
				$("#jqxDropDownList_innovacion").jqxDropDownList('selectItem', datosFila.innovacion);
				$("#jqxDropDownList_tics").jqxDropDownList('selectItem', datosFila.tics);

				// Cargar botones de EGEL
				$('#botonesEGEL button[data-valor="'+datosFila.egel+'"]').trigger('click');

				if(datosFila.egel!='0') {
					$("#jqxDropDownList_calidad").jqxDropDownList('selectItem', datosFila.calidadProgramaEducativo);
				}

			}

			//Mostrar botones al editar algun dato
			$('#frmDetalleEvaluacion input').change(function () {
				$('.barraSuperiorAcciones').fadeIn();
			});
		}
	});
}
