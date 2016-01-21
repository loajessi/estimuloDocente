<?php
//****************//
//  modEvaluacionAgregarModificar.php//
//****************//
	include("../class/clsEvaluacion.php");

	$objEvaluacion = new clsEvaluacion();

	$objEvaluacion->setidEstimulo($_POST['idEstimulo']);
	$objEvaluacion->setdesempenoAula($_POST['desempenoAula']);
	$objEvaluacion->setdesempenoAcademico($_POST['desempenoAcademico']);
	$objEvaluacion->setinnovacion($_POST['innovacion']);
	$objEvaluacion->settics($_POST['tics']);
	$objEvaluacion->setegel($_POST['egel']);
	if (isset($_POST['idEvaluacion']) && $_POST['idEvaluacion']!='') {
		$objPersonal->setidEvaluacion($_POST['idEvaluacion']);
	}
	$objEvaluacion->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objEvaluacion->estEvaluacionAgregarModificar();

	//echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
	echo "json={'noError':'{$arrSalida['noError']}', 'mensaje':'{$arrSalida['mensaje']}', 'idEvaluacion':'{$arrSalida['idEvaluacion']}'}";
?>