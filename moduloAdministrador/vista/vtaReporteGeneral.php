<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>
<form id="frmReporte" name="frmReporte" class="dataForm" method="post" action="vista/cntArchivoExcel.php">
<div id="divInfoFiltro">
<h1>Reporte Final de Evaluaci&oacute;n</h1>
<!-- <table id="sinBordes">
<tr>
   <td width="35%">
    <label for="selTipoFiltro"></label>
  Datos a presentar: 
    <select id="selTipoFiltro" name="selTipoFiltro" onchange="fncTipoFiltro(this.value);">
               <option value="-1">Selecciona como se presenta la informaci&oacute;n</option>
               <option value="1">Todos</option>
               <option value="2">Por categor&iacute;a</option>
               <option value="3">Por nivel</option>
           </select>         
&nbsp;&nbsp;&nbsp;&nbsp;
  </td>
  <td width="70%">
<a href="#" class="boton icon buscar" onclick="docenteEstimuloconsultar(-1);" id="btnBuscar" name="btnBuscar">Buscar</a>
</td>
</tr>
<tr> <td colspan="2"  width="35%"><div id="divFiltro">&nbsp;&nbsp;&nbsp;</div>
  </td>
  </tr>
</table> -->

<div id="divFiltro">
<p><label for='selFiltro'></label>Nivel:&nbsp;&nbsp;
<select name='selFiltro' id='selFiltro'  onchange='docenteEstimuloconsultar(-1)'>
			   <option value='-1'>Todos</option>
		       <option value='1'>1</option>
		       <option value='2'>2</option>
		       <option value='3'>3</option>
		       <option value='4'>4</option>
		       <option value='5'>5</option>
			   <option value='6'>6</option>
			   <option value='7'>7</option>
			   <option value='8'>8</option>
			   <option value='9'>9</option></p>
	</select>
</div>

</div>
<hr>
<div id="divBoton" style="display:none;"><p align="right"><a href="#" class="boton icon excel" onclick="fncExportarExcel();" id="btnExportar" name="btnExportar">Exportar a Excel</a></p></div>
<div id="divTabla">
</div>
<input type="hidden" name="hdnTipoFiltro" id="hdnTipoFiltro" value=""  />
<input type="hidden" name="hdnTabla" id="hdnTabla" value=""  />
</form>
</body>
</html>
