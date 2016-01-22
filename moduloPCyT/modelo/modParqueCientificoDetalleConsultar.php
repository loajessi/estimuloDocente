<?php
//****************//
//  modParqueCientificoConsultar.php//
//****************//
	include("../class/clsParqueCientifico.php");
	$objConsulta = new clsParqueCientifico();

	// setters para configurar el filtro de la consulta
	$objConsulta->setidEstimulo($_POST['pEstimuloID']);
	$objConsulta->setOrdenQuery("patente");

	echo $objConsulta->getDatosJson(false);
?>