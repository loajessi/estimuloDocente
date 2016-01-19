<?php
	//****************//
	//  modRelacionesInternacionalesAgregarModificar.php//
	//****************//
	include("../class/clsRelacionesInternacionales.php");

	$objRelacionesInternacionales = new clsRelacionesInternacionales();

	$objRelacionesInternacionales->setidEstimulo($_POST['idEstimulo']);
	$objRelacionesInternacionales->setbecaFederal($_POST['becaFederal']);
	$objRelacionesInternacionales->setfechaInicioBecaFederal($_POST['fechaInicioBecaFederal']);
	$objRelacionesInternacionales->setfechaTerminoBecaFederal($_POST['fechaTerminoBecaFederal']);
	$objRelacionesInternacionales->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objRelacionesInternacionales->estRelacionesInternacionalesAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>
