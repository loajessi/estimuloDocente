<?php
//****************//
//  modSecretarioAcademicoAgregarModificar.php//
//****************//
	include("../class/clsSecretarioAcademico.php");

	$objSecretarioAcademico = new clsSecretarioAcademico();

	$objSecretarioAcademico->setidEstimulo($_POST['idEstimulo']);
	//$objSecretarioAcademico->setvalidado($_POST['validado']);
	$objSecretarioAcademico->setnumeroHojas($_POST['numeroHojas']);
	$objSecretarioAcademico->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objSecretarioAcademico->estSecretarioAcademicoAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>