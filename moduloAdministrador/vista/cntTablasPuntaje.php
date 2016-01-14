<? 
	require("../../config.php");
	require("clsConsulta.php");
	
	$arrPeriodos = array();
	$objPeriodos = new clsConsulta("select * from vtaC_estPeriodo order by idPeriodo desc");
	$objPeriodos->FNCQueryEjecutar();
	$arrPeriodos = $objPeriodos->getArregloResultado();
	
	foreach ($arrPeriodos as $arrPeriodo){
		$sListaPeriodos .= "<option value='".$arrPeriodo[idPeriodo]."'>".$arrPeriodo[periodo]."</option>";	
	}
	
?>