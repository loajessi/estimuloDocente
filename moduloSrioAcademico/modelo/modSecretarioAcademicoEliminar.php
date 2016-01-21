<?php
//****************//
//  modSecretarioAcademicoEliminar.php//
//****************//
	include("../class/clsSecretarioAcademico.php");

	$objSecretarioAcademico=new clsSecretarioAcademico();

	$objSecretarioAcademico->setidSecretario($_POST['pRegistroID']);
	$objSecretarioAcademico->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objSecretarioAcademico->estSecretarioAcademicoEliminar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>