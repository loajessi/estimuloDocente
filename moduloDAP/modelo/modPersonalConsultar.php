<?php
//****************//
//  modPersonalConsultar.php//
//****************//
	include("../class/clsPersonal.php");
	$objConsulta = new clsPersonal();

	/* setters para configurar el filtro de la consulta
	$objConsulta->setIdPersonal($_POST['pPersonalID']);*/
	$objConsulta->setOrdenQuery("nombreCompleto");

	echo $objConsulta->getDatosJson(false);
?>