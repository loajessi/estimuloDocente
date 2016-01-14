<? 
	require("cntMiembrosComite.php");
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>
<body>
<form id="frmComite" name="frmComite" class="dataForm" method="post" action="">
  <h1>Miembros del comit&eacute; evaluador</h1>
  <p>
    <label for="selPeriodoEstimulo"></label>
    Ciclo del est&iacute;mulo docente:
    <select name="selPeriodoEstimulo" id="selPeriodoEstimulo" onchange="responsableconsultar(-1);">
      <option value="-1"></option>
      <? echo $sListaPeriodos; ?>
    </select>
  </p>
  <input type="hidden" id="hdnTipoResponsabilidadID" name="hdnTipoResponsabilidadID" value="<? echo $iTipoResponsabilidadID; ?>"/>
  <input type="hidden" id="hdnTipoResponsabilidad" name="hdnTipoResponsabilidad" value="<? echo $sTipoResponsabilidad; ?>"/>  
  
  <hr />  
  <div id="divAgregar" style="display:none">  	
    <div style="width:80%; float:left;" id="divBusqueda"></div>
    <div style="width:20%; float:right; height:55px;" align="right">
    	<br/><br/>
    	<a href="javascript:responsableAgregarModificar();" class="boton icon agregar" title="Agregar empleado al comité">Agregar</a>
    </div>
  </div>
  <br/><br/><br/><br/><br/><br/>
  <div id="divListaMiembrosComite"></div>
</form>
</body>
</html>