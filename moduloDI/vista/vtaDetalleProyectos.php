<div class="animated slideInLeft">
	<div class="barraSuperiorAcciones">
		<a id="btnGuardar" class="boton icon guardar">Guardar</a>
		<a id="btnCancelar" class="boton peligro icon remover">Cancelar</a>
	</div>

	<h3 class="dobleLinea">Validaci&oacute;n de proyectos <small id="PatentesNombreEmpleado" class="validado"></small></h3>
	<hr>

	<form id="frmModalAgregarProyecto" name="frmModalAgregarProyecto" action="" method="post" class="dataForm" style="border:0; padding: 0;">
		<div class="columna ancho-70 separador-der">
			<label for="txtPregunta1" class="label_multilinea">No. de proyectos de investigaci&oacute;n <b>financiados por organismos nacionales y/o internacionales</b> en proceso y/o terminados de los que <b>fue responsable</b></label>
			<div class="jqxNumberInput_ValidacionProyectos" id="txtPregunta1"></div>
			<br />

			<label for="txtPregunta2" class="label_multilinea">No. de proyectos de investigaci&oacute;n <b>financiados por la instituci&oacute;n</b> en proceso y/o terminados de los que <b>fue responsable</b></label>
			<div class="jqxNumberInput_ValidacionProyectos" id="txtPregunta2"></div>
			<br />

			<label for="txtPregunta3" class="label_multilinea">No. de proyectos de investigaci&oacute;n <b>financiados por la instituci&oacute;n y/o por organismos nacionales</b> en proceso y/o terminados en los que <b>&uacute;nicamente colabor&oacute;</b></label>
			<div class="jqxNumberInput_ValidacionProyectos" id="txtPregunta3"></div>
			<br />

			<label for="txtPregunta4" class="label_multilinea">No. de estudiantes en formaci&oacute;n en proyectos de investigaci&oacute;n</label>
			<div class="jqxNumberInput_ValidacionProyectos" id="txtPregunta4"></div>
		</div>
		<div class="columna ancho-30">
			<label>&iquest;Reconocimiento del <abbr title="Sistema Nacional de Investigadores">SNI</abbr>?</label>
			<input type="hidden" id="hdnSNI" name="hdnSNI" value="" required="required" />
			<div id="jqxButtonGroup_SNI">
				<button style="padding:4px 16px;" id="btnSNI_Si">S&iacute;</button>
				<button style="padding:4px 16px;" id="btnSNI_No">No</button>
			</div>

			<div id="SNI_CamposAdicionales" style="display: none;">
				<label>Fecha de inicio</label>
				<div id="jqxDateTimeInput_FechaInicioSNI"></div>

				<label>Fecha de t&eacute;rmino</label>
				<div id="jqxDateTimeInput_FechaTerminoSNI"></div>

				<label>Nivel <abbr title="Sistema Nacional de Investigadores">SNI</abbr></label>
				<div id="jqxComboBox_NivelSNI"></div>
			</div>

		</div>
		<div class="clear"></div>
	</form>
</div>