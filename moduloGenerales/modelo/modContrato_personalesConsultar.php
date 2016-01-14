<?php 
//****************//
//  mod_contrato_personalesConsultar.php//
//****************//
	include("../class/clsAp_Contrato_Personales.php");
	$objConsulta=new cls_contrato_personales();

	// setters para configurar el filtro de la consulta
	$objConsulta->setnum_empleado($_POST['piNoEmpleado']);
	$objConsulta->setOrdenQuery("NUM_CONTRATO");

	echo $objConsulta->getDatosJson(false);
?>
