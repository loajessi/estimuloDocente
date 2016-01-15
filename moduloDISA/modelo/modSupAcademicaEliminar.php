<?php
//****************//
//  modSupAcademicaEliminar.php//
//****************//
	include("../class/clsSupAcademica.php");

	$objSupAcademica=new clsSupAcademica();

	$objSupAcademica->setidSupAcademica($_POST['pRegistroID']);
	$objSupAcademica->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objSupAcademica->estSupAcademicaEliminar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>