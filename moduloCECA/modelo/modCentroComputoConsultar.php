<?php
//****************//
//  modCentroComputoConsultar.php//
//****************//
	include("../class/clsCentroComputo.php");
	$objConsulta=new clsCentroComputo();

	// setters para configurar el filtro de la consulta
	$objConsulta->setOrdenQuery("nombreCompleto");

	echo $objConsulta->getDatosJson(false);
?>