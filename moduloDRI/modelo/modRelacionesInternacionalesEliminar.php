<?php
	//****************//
	//  modRelacionesInternacionalesEliminar.php//
	//****************//
	include("../class/clsRelacionesInternacionales.php");

	$objRelacionesInternacionales = new clsRelacionesInternacionales();

	$objRelacionesInternacionales->setidRelacionesInternacionales($_POST['pRegistroID']);
	$objRelacionesInternacionales->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objRelacionesInternacionales->estRelacionesInternacionalesEliminar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>


