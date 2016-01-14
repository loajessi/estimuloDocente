<? 
	require("../../config.php");	
	require("clsConsulta.php");
	
	$arrJornadas = array();
	$objJornadas = new clsConsulta("SELECT [idTabulador], [jornada] + ' - ' + 
									case [rubro] when 'Global' then 'Puntuación global' 
												 when 'Total calidad' then 'Puntuación de calidad' end as jornada
									FROM [vtaC_estTabulador_Evaluacion] 
									where idPeriodo = ".$_GET['iPeriodoID']);
	$objJornadas->FNCQueryEjecutar();
	$arrJornadas = $objJornadas->getArregloResultado();
	
	$sListaJornadas = '<select name="selJornadaDocente" id="selJornadaDocente" onchange="PCDTablaPuntajeConsultar(this.value);">
     					 <option value="-1"></option>';
    
	foreach ($arrJornadas as $arrJornada){
		$sListaJornadas .= "<option value='".$arrJornada[idTabulador]."'>".$arrJornada[jornada]."</option>";	
	}
	
	$sListaJornadas .= "</select>";
	
	echo $sListaJornadas;
	
?>