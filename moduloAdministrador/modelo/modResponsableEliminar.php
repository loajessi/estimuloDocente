<?php 
	include("../class/clsResponsables.php");

	$objResponsable=new clsResponsable();	
	
	$objResponsable->setidResponsable($_GET['iResponsableID']);
	$objResponsable->setusuarioRealizo($_SESSION['iUsuarioEstimuloDocenteVS']);
	
	$arrSalida = $objResponsable->estResponsableEliminar();
	
	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>