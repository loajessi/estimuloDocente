<?php 
//****************//
//  mod_contrato_personalesConsultar.php//
//****************//
	include("../class/clsAp_Contrato_Personales.php");
	$objConsulta=new cls_contrato_personales();

	// setters para configurar el filtro de la consulta
	$objConsulta->setnivel(1);
	$objConsulta->setid_persona($_POST['piPersonaID']);
	$objConsulta->setOrdenQuery("c.id_nivel");

	echo $objConsulta->getDatosJson(false);
?>
