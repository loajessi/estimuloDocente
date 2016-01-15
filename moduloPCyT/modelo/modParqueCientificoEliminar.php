<?php
//****************//
//  modParqueCientificoEliminar.php//
//****************//
	include("../class/clsParqueCientifico.php");

	$objParqueCientifico = new clsParqueCientifico();

	$objParqueCientifico->setidParqueCientifico($_POST['pRegistroID']);
	$objParqueCientifico->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objParqueCientifico->estParqueCientificoEliminar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>