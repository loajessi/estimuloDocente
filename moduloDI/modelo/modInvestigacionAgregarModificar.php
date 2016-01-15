<?php
//****************//
//  modInvestigacionAgregarModificar.php//
//****************//
	include("../class/clsInvestigacion.php");

	$objInvestigacion=new clsInvestigacion();

	$objInvestigacion->setidEstimulo($_POST['ctridEstimulo']);
	$objInvestigacion->setreconocimientoSNI($_POST['ctrreconocimientoSNI']);
	$objInvestigacion->setfechaInicioSNI($_POST['ctrfechaInicioSNI']);
	$objInvestigacion->setfechaTerminoSNI($_POST['ctrfechaTerminoSNI']);
	$objInvestigacion->setnivelSNI($_POST['ctrnivelSNI']);
	$objInvestigacion->setnoProyOrganismoResponsable($_POST['ctrnoProyOrganismoResponsable']);
	$objInvestigacion->setnoProyInstitucionResponsable($_POST['ctrnoProyInstitucionResponsable']);
	$objInvestigacion->setnoProyOrganismoParticipo($_POST['ctrnoProyOrganismoParticipo']);
	$objInvestigacion->setnoProyInstitucionParticipo($_POST['ctrnoProyInstitucionParticipo']);
	$objInvestigacion->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objInvestigacion->estInvestigacionAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>