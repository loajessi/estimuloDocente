<div class="txtCentrado ayudaCargando">
	<h2 style="width: 500px; padding-top: 90px; margin: 0 auto; color: #ABABAB;">Cargando...</h2>
</div>
<div class="animated slideInLeft">
	<div class="barraSuperiorAcciones" style="display: none;">
		<button type="submit" form="frmModalAgregarProyecto" class="boton icon guardar">Guardar</button>
		<a id="btnCancelar" class="boton peligro icon remover">Cancelar</a>
	</div>

	<h3 class="dobleLinea">Validaci&oacute;n de proyectos <small id="ProyectoNombreEmpleado" class="validado"></small></h3>
	<hr>

	<form id="frmModalAgregarProyecto" name="frmModalAgregarProyecto" action="" method="post" class="dataForm" style="border:0; padding: 0;">
		<input type="hidden" value="" id="RowIndex" />
		<input type="hidden" value="" id="hdnIdEstimulo" name="idEstimulo" />
		<input type="hidden" value="" id="hdnIdInvestigacion" name="idInvestigacion" />
		<input type="hidden" id="hdnBotonSNI" name="reconocimientoSNI" value="" required="required" />

		<div class="columna ancho-70 separador-der">
			<label for="noProyOrganismoResponsable" class="label_multilinea">No. de proyectos de investigaci&oacute;n <b>financiados por organismos nacionales y/o internacionales</b> en proceso y/o terminados de los que <b>fue responsable</b></label>
			<!--div class="jqxNumberInput_ValidacionProyectos" id="noProyOrganismoResponsable"></div-->
			<input type="number" step="1" id="noProyOrganismoResponsable" name="noProyOrganismoResponsable" maxlength="3" min="0" max="999" required="required" pattern="[0-9]{1,3}" />
			<br />

			<label for="noProyInstitucionResponsable" class="label_multilinea">No. de proyectos de investigaci&oacute;n <b>financiados por la instituci&oacute;n</b> en proceso y/o terminados de los que <b>fue responsable</b></label>
			<!--div class="jqxNumberInput_ValidacionProyectos" id="noProyInstitucionResponsable"></div-->
			<input type="number" step="1" id="noProyInstitucionResponsable" name="noProyInstitucionResponsable" maxlength="3" min="0" max="999" required="required" pattern="[0-9]{1,3}" />
			<br />

			<label for="noProyOrganismoParticipo" class="label_multilinea">No. de proyectos de investigaci&oacute;n <b>financiados por la instituci&oacute;n y/o por organismos nacionales</b> en proceso y/o terminados en los que <b>&uacute;nicamente colabor&oacute;</b></label>
			<!--div class="jqxNumberInput_ValidacionProyectos" id="noProyOrganismoParticipo"></div-->
			<input type="number" step="1" id="noProyOrganismoParticipo" name="noProyOrganismoParticipo" maxlength="3" min="0" max="999" required="required" pattern="[0-9]{1,3}" />
			<br />

			<label for="noProyInstitucionParticipo" class="label_multilinea">No. de estudiantes en formaci&oacute;n en proyectos de investigaci&oacute;n</label>
			<!--div class="jqxNumberInput_ValidacionProyectos" id="noProyInstitucionParticipo"></div-->
			<input type="number" step="1" id="noProyInstitucionParticipo" name="noProyInstitucionParticipo" maxlength="3" min="0" max="999" required="required" pattern="[0-9]{1,3}" />
		</div>
		<div class="columna ancho-30">
			<label>&iquest;Reconocimiento del <abbr title="Sistema Nacional de Investigadores">SNI</abbr>?</label>
			<div id="jqxButtonGroup_SNI">
				<button style="padding:4px 16px;" id="btnSNI_Si">S&iacute;</button>
				<button style="padding:4px 16px;" id="btnSNI_No">No</button>
			</div>

			<div id="SNI_CamposAdicionales" style="display: none;">
				<label>Fecha de inicio</label>
				<div id="jqxDateTimeInput_FechaInicioSNI" name="fechaInicioSNI"></div>

				<label>Fecha de t&eacute;rmino</label>
				<div id="jqxDateTimeInput_FechaTerminoSNI" name="fechaTerminoSNI"></div>

				<label>Nivel <abbr title="Sistema Nacional de Investigadores">SNI</abbr></label>
				<div id="jqxComboBox_NivelSNI" name="nivelSNI" ></div>
				<!--div id="nivelSNI"></div-->

			</div>

		</div>
		<div class="clear"></div>
	</form>
</div>