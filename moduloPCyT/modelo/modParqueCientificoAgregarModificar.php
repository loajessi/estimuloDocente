<?php
	//****************//
	//  modParqueCientificoAgregarModificar.php//
	//****************//
	include("../class/clsParqueCientifico.php");

	$objParqueCientifico = new clsParqueCientifico();

	$objParqueCientifico->setidEstimulo($_POST['hdnEstimuloID']);
	$objParqueCientifico->setidParqueCientifico($_POST['hdnParqueCientificoID']);
	$objParqueCientifico->setpatente(utf8_decode($_POST['txtPatente']));
	$objParqueCientifico->setfase(utf8_decode($_POST['jqxComboBox_idEstadoPatente']));
	$objParqueCientifico->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objParqueCientifico->estParqueCientificoAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>
