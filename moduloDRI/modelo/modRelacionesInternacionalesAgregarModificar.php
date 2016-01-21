<?php
	//****************//
	//  modRelacionesInternacionalesAgregarModificar.php//
	//****************//
	include("../class/clsRelacionesInternacionales.php");

	$objRelacionesInternacionales = new clsRelacionesInternacionales();

	$objRelacionesInternacionales->setidEstimulo($_POST['idEstimulo']);
	$objRelacionesInternacionales->setbecaFederal($_POST['becaFederal']);

	if ($_POST['becaFederal']==1) {
		$objRelacionesInternacionales->setfechaInicioBecaFederal(utf8_decode($_POST['fechaInicioBecaFederal']));
		$objRelacionesInternacionales->setfechaTerminoBecaFederal(utf8_decode($_POST['fechaTerminoBecaFederal']));
	} else {
		$objRelacionesInternacionales->setfechaInicioBecaFederal(null);
		$objRelacionesInternacionales->setfechaTerminoBecaFederal(null);
	}

	if (isset($_POST['idRelacionesInternacionales']) && $_POST['idRelacionesInternacionales']!='') {
		$objRelacionesInternacionales->setidRelacionesInternacionales($_POST['idRelacionesInternacionales']);
	}

	$objRelacionesInternacionales->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objRelacionesInternacionales->estRelacionesInternacionalesAgregarModificar();

	echo "json={'noError':'{$arrSalida['noError']}', 'mensaje':'{$arrSalida['mensaje']}', 'idRelacionesInternacionales':'{$arrSalida['idRelacionesInternacionales']}'}";
	//echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>
