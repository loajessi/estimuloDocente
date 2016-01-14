<?php 
//****************//
//  mod_contrato_personalesConsultar.php//
//****************//
	include("../class/clsAp_Contrato_Personales.php");
	$objConsulta=new cls_contrato_personales();

	// setters para configurar el filtro de la consulta
	$objConsulta->setid_persona($_POST['piPersonaID']);
	$objConsulta->setOrdenQuery("NUM_CONTRATO");

	echo $objConsulta->getDatosJson(false);
?>
