<?php
//****************//
//  modParqueCientificoConsultar.php//
//****************//
	include("../class/clsParqueCientifico.php");
	$objConsulta = new clsParqueCientifico();

	// setters para configurar el filtro de la consulta
	$objConsulta->setidEstimulo($_POST['pEstimuloID']);
	$objConsulta->setidParqueCientifico($_POST['pParqueCientificoID']);
	$objConsulta->setningunaPatente($_POST['pNinguna']);

	echo $objConsulta->getDatosJson(false);
?>