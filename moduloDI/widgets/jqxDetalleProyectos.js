function Docentes_DetalleProyectos_CargarVista(datosFila) {
	var botonSNI;

	$.get('vista/vtaDetalleProyectos.php', function (data, status) {
		if (status == 'success') {
			$("#detalleDatosProyecto").html(data);
			// Inicializar datos dummy
			$('#ProyectoNombreEmpleado').html(datosFila.nombreCompleto);
			detalleProyectosInicializar();

			if(datosFila.idInvestigacion != ""){
				// LLenar widgets con datos existentes
				if(datosFila.reconocimientoSNI == 0){
					botonSNI = 1;
				}else if(datosFila.reconocimientoSNI == 1){
					botonSNI = 0;
				}
				$('#jqxButtonGroup_SNI').jqxButtonGroup('setSelection', botonSNI);

				$('#noProyOrganismoResponsable').jqxNumberInput('val', datosFila.noProyOrganismoResponsable);
				$('#noProyInstitucionResponsable').jqxNumberInput('val', datosFila.noProyInstitucionResponsable);
				$('#noProyOrganismoParticipo').jqxNumberInput('val', datosFila.noProyOrganismoParticipo);
				$('#noProyInstitucionParticipo').jqxNumberInput('val', datosFila.noProyInstitucionParticipo);

				$('#jqxDateTimeInput_FechaInicioSNI').jqxDateTimeInput('setDate', new Date(datosFila.fechaInicioSNI));
				$('#jqxDateTimeInput_FechaTerminoSNI').jqxDateTimeInput('setDate', new Date(datosFila.fechaTerminoSNI));

				$("#jqxComboBox_NivelSNI").jqxComboBox('val', datosFila.nivelSNI);
			}

			$('#idEstimulo').val(datosFila.idEstimulo);
			$('#idInvestigacion').val(datosFila.idInvestigacion);
		}
	});
}
