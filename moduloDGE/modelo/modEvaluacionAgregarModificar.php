<?php
	//****************//
	//  modEvaluacionAgregarModificar.php//
	//****************//
	include("../class/clsEvaluacion.php");

	$objEvaluacion=new clsEvaluacion();

	$objEvaluacion->setidEstimulo($_POST['ctridEstimulo']);
	$objEvaluacion->setdesempeñoAula($_POST['ctrdesempeñoAula']);
	$objEvaluacion->setdesempeñoAcademico($_POST['ctrdesempeñoAcademico']);
	$objEvaluacion->setinnovacion($_POST['ctrinnovacion']);
	$objEvaluacion->settics($_POST['ctrtics']);
	$objEvaluacion->setegel($_POST['ctregel']);
	$objEvaluacion->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objEvaluacion->estEvaluacionAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>
