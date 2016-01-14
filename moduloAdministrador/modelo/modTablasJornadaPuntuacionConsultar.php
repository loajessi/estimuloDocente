<? 
	require("../../config.php");	
	require("../class/clsTablasPuntaje.php");
	
	$objConsulta = new clsConsulta("SELECT [jornada] + ' - ' + 
									case [rubro] when 'Global' then 'Puntuación global' 
												 when 'Total calidad' then 'Puntuación de calidad' end as jornada
									FROM [vtaC_estTabulador_Evaluacion] 
									where idTabulador = ".$_GET['iTabulador']);
	$objConsulta->FNCQueryEjecutar();
	$arrDatosJornada = $objConsulta->getArregloResultado();
	$sTitulo = "<h3>Docente ".$arrDatosJornada[0][jornada]."</h3>";
	
	$objTabla = new clsTabulador_Evaluacion_Nivel();
	$objTabla->setTablaEdicion(0);
	$objTabla->setidTabulador($_GET['iTabulador']);

	echo $sTitulo."<br/>".$objTabla->getTabla(-1);

?>