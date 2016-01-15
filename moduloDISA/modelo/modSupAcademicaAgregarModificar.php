<?php
//****************//
//  modSupAcademicaAgregarModificar.php//
//****************//
	include("../class/clsSupAcademica.php");

	$objSupAcademica=new clsSupAcademica();

	$objSupAcademica->setidEstimulo($_POST['iddEstimulo']);
	$objSupAcademica->setcertificacionIngles($_POST['certificacionIngles']);
	$objSupAcademica->setcursoCompetencia($_POST['cursoCompetencia']);
	$objSupAcademica->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objSupAcademica->estSupAcademicaAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>