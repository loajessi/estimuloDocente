<div class="txtCentrado ayudaCargando">
	<h2 style="width: 500px; padding-top: 90px; margin: 0 auto; color: #ABABAB;">Cargando...</h2>
</div>
<div class="animated slideInLeft">
	<div class="barraSuperiorAcciones" style="display: none;">
		<button type="submit" id="btnGuardar" form="frmModalAgregarProyecto" class="boton icon guardar">Guardar</button>
		<a id="btnCancelar" class="boton peligro icon remover">Cancelar</a>
	</div>

	<h3 class="dobleLinea">Evaluación del empleado <small id="NombreEmpleado" class="validado"></small></h3>
	<hr />

	<br />

	<form id="frmDetalleEvaluacion" name="frmDetalleEvaluacion" action="" method="post" class="dataForm" style="border:0; padding: 0;">
		<input type="hidden" value="" id="hdnIdEstimulo" name="idEstimulo" />
		<input type="hidden" value="" id="hdnIdEvaluacion" name="idEvaluacion" />
		<input type="hidden" value="" id="hdnNumeroEmpleado" />
		<input type="hidden" value="" id="hdnEGEL" name="egel" required="required" />
		<input type="hidden" value="" id="hdnInnovacion" name="innovacion" required="required" />
		<input type="hidden" value="" id="hdnTICs" name="tics" required="required" />
		<input type="hidden" value="" id="hdnCalidad" name="calidadProgramaEducativo" required="required" />

		<div class="columna ancho-25 separador-der-slim txtCentrado">
			<label for="desempenoAula" class="label_multilinea">Desempeño en el aula<br /><small>(Alumnos)</small></label>
			<input type="number" step="1" id="desempenoAula" name="desempenoAula" maxlength="3" min="0" max="115" required="required" />
		</div>

		<div class="columna ancho-25 separador-der-slim txtCentrado">
			<label for="desempenoAcademico" class="label_multilinea">Desempeño académico<br /><small>(Directivos, Académicos)</small></label>
			<input type="number" step="1" id="desempenoAcademico" name="desempenoAcademico" maxlength="2" min="0" max="47" required="required" />
		</div>

		<div class="columna ancho-25 separador-der-slim txtCentrado">
			<label for="innovacion" class="label_multilinea">Innovación educativa<br /><small>&nbsp;</small></label>
			<div id="jqxDropDownList_innovacion"></div>
		</div>

		<div class="columna ancho-25 txtCentrado">
			<label for="tics" class="label_multilinea"><abbr title="Tecnologías de la Información y la Comunicación">TICs</abbr><br /><small>&nbsp;</small></label>
			<div id="jqxDropDownList_tics"></div>
		</div>

		<div class="clear"></div>

		<br />
		<br />
		<hr class="slim" />
		<br />

		<div class="columna ancho-60">
			<label>Programas educativos en los que imparte clase</label>
			<div id="ListaProgramasEducativosEmpleado"></div>
		</div>

		<div class="columna ancho-40">
			<label>Nivel <abbr title="Examen General para el Egreso de Licenciatura">EGEL</abbr> (<abbr title="Centro Nacional de Evaluación para la Educación Superior">CENEVAL</abbr>)</label>
			<div id="botonesEGEL">
				<button type="button" class="btn" data-valor="0">0</button>
				<button type="button" class="btn btnCorrecto" data-valor="12">1</button>
				<button type="button" class="btn btnCorrecto" data-valor="10">2</button>
				<button type="button" class="btn btnCorrecto" data-valor="8">3</button>
			</div>

			<br />

			<label>Calidad del programa educativo</label>
			<div id="jqxDropDownList_calidad"></div>
		</div>

		<div class="clear"></div>
	</form>
</div>