<?php
//****************//
//  modInvestigacionAgregarModificar.php//
//****************//
	include("../class/clsInvestigacion.php");

	$objInvestigacion=new clsInvestigacion();

	$objInvestigacion->setidEstimulo($_POST['idEstimulo']);
	$objInvestigacion->setreconocimientoSNI($_POST['reconocimientoSNI']);
	$objInvestigacion->setfechaInicioSNI($_POST['fechaInicioSNI']);
	$objInvestigacion->setfechaTerminoSNI($_POST['fechaTerminoSNI']);
	$objInvestigacion->setnivelSNI($_POST['nivelSNI']);
	$objInvestigacion->setnoProyOrganismoResponsable($_POST['noProyOrganismoResponsable']);
	$objInvestigacion->setnoProyInstitucionResponsable($_POST['noProyInstitucionResponsable']);
	$objInvestigacion->setnoProyOrganismoParticipo($_POST['noProyOrganismoParticipo']);
	$objInvestigacion->setnoProyInstitucionParticipo($_POST['|noProyInstitucionParticipo']);
	$objInvestigacion->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objInvestigacion->estInvestigacionAgregarModificar();

	echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>