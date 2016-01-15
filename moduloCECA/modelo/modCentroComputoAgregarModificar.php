<?php
//****************//
//  modCentroComputoAgregarModificar.php//
//****************//
	include("../class/clsCentroComputo.php");

	$objCentroComputo=new clsCentroComputo();

	$objCentroComputo->setidEstimulo($_POST['idEstimulo']);
	$objCentroComputo->setnoMultimedioElaborado($_POST['noMultimedioElaborado']);
	$objCentroComputo->setidCentroComputo($_POST['idCentroComputo']);
	$objCentroComputo->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objCentroComputo->estCentroComputoAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>