<? 
	require("../../config.php");
	require("clsConsulta.php");
	
	$sTipoResponsabilidad = "Miembro del Comité Evaluador";

	$objConsulta = new clsConsulta("SELECT idTipoResponsabilidad
									FROM vtaC_estTipoResponsabilidad
									where tipoResponsabilidad = '".$sTipoResponsabilidad."'");
	$objConsulta->FNCQueryEjecutar();
	$arrTipoResp = $objConsulta->getArregloResultado();
	$iTipoResponsabilidadID = $arrTipoResp[0]['idTipoResponsabilidad'];
		
	$arrPeriodos = array();
	$objPeriodos = new clsConsulta("select * from vtaC_estPeriodo order by idPeriodo desc");
	$objPeriodos->FNCQueryEjecutar();
	$arrPeriodos = $objPeriodos->getArregloResultado();
	
	foreach ($arrPeriodos as $arrPeriodo){
		$sListaPeriodos .= "<option value='".$arrPeriodo[idPeriodo]."'>".$arrPeriodo[periodo]."</option>";	
	}
	
?>