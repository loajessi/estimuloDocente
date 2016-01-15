<?php
//****************//
//  modSupAcademicaConsultar.php//
//****************//
	include("../class/clsSupAcademica.php");
	$objConsulta=new clsSupAcademica();

	// setters para configurar el filtro de la consulta
	//$objConsulta->setIdSupAcademica($_POST['pSupAcademicaID']);
	//$objConsulta->setOrdenQuery("XX");

	echo $objConsulta->getDatosJson(false);
?>