<?php
//****************//
//  modPersonalAgregarModificar.php//
//****************//
	include("../class/clsPersonal.php");

	$objPersonal = new clsPersonal();

	/*$_POST['idEstimulo'] = 977;
	$_POST['idPersonal'] = 25;
	$_POST['gradoAcademico'] = 0;
	$_POST['puestoDrectivo'] = 1;
	$_POST['asistencias'] = 23.5;*/

	$objPersonal->setidEstimulo($_POST['idEstimulo']);
	$objPersonal->setgradoAcademico($_POST['gradoAcademico']);
	$objPersonal->setpuestoDrectivo($_POST['puestoDrectivo']);
	$objPersonal->setasistencias($_POST['asistencias']);
	$objPersonal->setidPersonal($_POST['idPersonal']);
	$objPersonal->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objPersonal->estPersonalAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>