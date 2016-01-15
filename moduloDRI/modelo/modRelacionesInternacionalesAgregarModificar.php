<?php
	//****************//
	//  modRelacionesInternacionalesAgregarModificar.php//
	//****************//
	include("../class/clsRelacionesInternacionales.php");

	$objRelacionesInternacionales = new clsRelacionesInternacionales();

	$objRelacionesInternacionales->setidEstimulo($_POST['ctridEstimulo']);
	$objRelacionesInternacionales->setbecaFederal($_POST['ctrbecaFederal']);
	$objRelacionesInternacionales->setfechaInicioBecaFederal($_POST['ctrfechaInicioBecaFederal']);
	$objRelacionesInternacionales->setfechaTerminoBecaFederal($_POST['ctrfechaTerminoBecaFederal']);
	$objRelacionesInternacionales->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objRelacionesInternacionales->estRelacionesInternacionalesAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>
