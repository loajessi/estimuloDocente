<div id="divContent" style="padding:10px">
	<div id="divBarraBotones" align="right" style="float:right; width:30%">
		<a id="btnRegresar" class='boton icon flechaIzquierda' title='Regresar a lista de revisi&oacute;n'>Regresar al listado</a>
	</div>
	<h1>Informaci&oacute;n del empleado</h1>
	<hr />
	<br />

	<div id="divDatosGenerales">
		<h4>
			<label>No. empleado: </label><strong><label id="lblNoEmpleado"></label></strong>&nbsp;&nbsp;&nbsp;
			<label>Nombre: </label><strong><label id="lblNombreEmpleado"></label></strong>
		</h4>
		&nbsp;
		<label>RFC: </label><strong><label id="lblRfc"></label></strong>&nbsp;&nbsp;&nbsp;
		<label>CURP: </label><strong><label id="lblCurp"></label></strong>&nbsp;&nbsp;&nbsp;
		<br/><br/>&nbsp;
		<label>Fecha de contrataci&oacute;n: </label><strong><label id="lblFechaContratacion"></label></strong>&nbsp;&nbsp;&nbsp;
		<label>Antig&uuml;edad: </label><strong><label id="lblAntiguedad"></label></strong>&nbsp;&nbsp;&nbsp;
		<label>Promedio de horas/semana/mes: </label><strong><label id="lblPromedioHoras"></label></strong>&nbsp;&nbsp;&nbsp;
	</div>
	<br />

	<div id="jqxTabs_DatosAcademicos">
		<ul>
			<li>Grado acad&eacute;mico</li>
			<li>Contratos actuales</li>
			<li>Clases del a&ntilde;o anterior</li>
		</ul>
		<div id="jqxGrid_GradoAcademico"></div>
		<div id="jqxGrid_Contratos"></div>
		<div id="jqxGrid_Clases"></div>
        <input type="hidden" id="hdnPersonaID" name="hdnPersonaID" value="0"/>
	</div>
</div>