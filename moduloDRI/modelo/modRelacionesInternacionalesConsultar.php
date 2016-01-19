<?php
	//****************//
	//  modRelacionesInternacionalesConsultar.php//
	//****************//
	include("../class/clsRelacionesInternacionales.php");
	$objConsulta = new clsRelacionesInternacionales();

	// setters para configurar el filtro de la consulta
	//$objConsulta->setIdRelacionesInternacionales($_POST['pRelacionesInternacionalesID']);
	$objConsulta->setOrdenQuery("nombreCompleto");

	echo $objConsulta->getDatosJson(false);
?>
