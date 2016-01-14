<? 
	require("cntTablasPuntaje.php");
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>
<body>
<form id="form1" name="form1" class="dataForm" method="post" action="">
  <h1>Tablas de niveles del est&iacute;mulo</h1>
  <p>
    <label for="selPeriodoEstimulo"></label>
  Ciclo del est&iacute;mulo docente: 
  <select name="selPeriodoEstimulo" id="selPeriodoEstimulo" onchange="PCDJornadaPuntuacionConsultar(this.value);">
    <option value="-1"></option>
    <? echo $sListaPeriodos; ?>
  </select>
  </p>
  <div style="float:left; width:18%"><p>Jornada docente - puntuación: </p></div>
  <div style="float:right; width:82%" id="divListaJornadas">
    <select name="selJornadaDocente" id="selJornadaDocente" onchange="PCDTablaPuntajeConsultar(this.value);">
      <option value="-1"></option>      
    </select>
  </div>
  <p>&nbsp;</p>
  <hr>
  <div id="divTablasJornadaPuntuacion"></div>
</form>
</body>
</html>