<?php
//****************//
//  modParqueCientificoConsultar.php//
//****************//
	include("../class/clsParqueCientifico.php");
	$objConsulta = new clsParqueCientifico();

	// setters para configurar el filtro de la consulta
	$objConsulta->setOrdenQuery("nombreCompleto");

	echo $objConsulta->getDatosJson(false);
?>