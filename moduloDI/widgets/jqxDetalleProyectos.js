function Docentes_DetalleProyectos_CargarVista(datosFila) {

	$.get('vista/vtaDetalleProyectos.php', function (data, status) {
		if (status == 'success') {
			$("#detalleDatosProyecto").html(data);
			// Inicializar datos
			$('#ProyectoNombreEmpleado').html(datosFila.nombreCompleto);
			$('#RowIndex').val(datosFila.rowIndex);
			detalleProyectosInicializar();

			if(datosFila.idInvestigacion != ""){
				// LLenar widgets con datos existentes

				$('.btnActivo').removeClass('btnActivo btnCorrecto btnPeligro');
				if(datosFila.reconocimientoSNI == 0){
					$('#btnSNI_No').addClass('btnActivo btnPeligro');
					$('#hdnBotonSNI').val(0).trigger('change');
				}else if(datosFila.reconocimientoSNI == 1){
					$('#btnSNI_Si').addClass('btnActivo btnCorrecto');
					$('#hdnBotonSNI').val(1).trigger('change');
				}

				$('#noProyOrganismoResponsable').val(datosFila.noProyOrganismoResponsable);
				$('#noProyInstitucionResponsable').val(datosFila.noProyInstitucionResponsable);
				$('#noProyOrganismoParticipo').val(datosFila.noProyOrganismoParticipo);
				$('#noProyInstitucionParticipo').val(datosFila.noProyInstitucionParticipo);

				$('#jqxDateTimeInput_FechaInicioSNI').jqxDateTimeInput('setDate', new Date(datosFila.fechaInicioSNI));
				$('#jqxDateTimeInput_FechaTerminoSNI').jqxDateTimeInput('setDate', new Date(datosFila.fechaTerminoSNI));

				$("#jqxComboBox_NivelSNI").jqxComboBox('val', datosFila.nivelSNI);
			}

			$('#hdnIdEstimulo').val(datosFila.idEstimulo);
			$('#hdnIdInvestigacion').val(datosFila.idInvestigacion);
		}
	});
}
