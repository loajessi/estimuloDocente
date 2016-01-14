<?php
//****************//
//  modCentroComputoEliminar.php//
//****************//
	include("../class/clsCentroComputo.php");

	$objCentroComputo = new clsCentroComputo();

	$objCentroComputo->setidCentroComputo($_POST['pRegistroID']);
	$objCentroComputo->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objCentroComputo->estCentroComputoEliminar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>