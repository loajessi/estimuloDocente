<?php
//****************//
//  modPersonalAgregarModificar.php//
//****************//
	include("../class/clsPersonal.php");
	
	$objPersonal=new clsPersonal();	

	$objPersonal->setidPersonal($_POST['idPersonal']);	
	$objPersonal->setidEstimulo($_POST['idEstimulo']);
	$objPersonal->setgradoAcademico($_POST['gradoAcademico']);
	$objPersonal->setpuestoDrectivo($_POST['puestoDrectivo']);
	$objPersonal->setasistencias($_POST['asistencias']);
	$objPersonal->setusuarioRealizo($_SESSION['VS_Usuario']);
	
	$arrSalida = $objPersonal->estPersonalAgregarModificar();
	
	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>
