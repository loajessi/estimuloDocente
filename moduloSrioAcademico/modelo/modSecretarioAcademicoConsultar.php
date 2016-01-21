<?php
//****************//
//  modSecretarioAcademicoConsultar.php//
//****************//
	include("../class/clsSecretarioAcademico.php");
	$objConsulta = new clsSecretarioAcademico();

	// setters para configurar el filtro de la consulta
	//$objConsulta->setIdSecretarioAcademico($_POST['pSecretarioAcademicoID']);
	$objConsulta->setOrdenQuery("nombreCompleto");

	echo $objConsulta->getDatosJson(false);
?>