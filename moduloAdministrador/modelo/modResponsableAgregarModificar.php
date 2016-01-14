<?php 
	include("../class/clsResponsables.php");
	
	$objResponsable=new clsResponsable();	
	
	$objResponsable->setidPeriodo($_POST['selPeriodoEstimulo']);
	$objResponsable->setidPersona($_POST['hdnPersonaID']);
	$objResponsable->settipoResponsabilidad(utf8_decode($_POST['hdnTipoResponsabilidad']));
	$objResponsable->setusuarioRealizo($_SESSION['iUsuarioEstimuloDocenteVS']);
	
	$arrSalida = $objResponsable->estResponsableAgregarModificar();
	
	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>