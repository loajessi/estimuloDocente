<?php
//****************//
//  modEvaluacionConsultar.php//
//****************//
	include("../class/clsEvaluacion.php");
	$objConsulta=new clsEvaluacion();

	// setters para configurar el filtro de la consulta
	//$objConsulta->setIdEvaluacion($_POST['pEvaluacionID']);
	$objConsulta->setOrdenQuery("nombreCompleto");

	echo $objConsulta->getDatosJson(false);
?>