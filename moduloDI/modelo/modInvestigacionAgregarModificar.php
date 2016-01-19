<?php
//****************//
//  modInvestigacionAgregarModificar.php//
//****************//
	include("../class/clsInvestigacion.php");

	$objInvestigacion = new clsInvestigacion();

	$objInvestigacion->setidEstimulo($_POST['idEstimulo']);
	$objInvestigacion->setreconocimientoSNI($_POST['reconocimientoSNI']);

	if (isset($_POST['fechaInicioSNI']) && $_POST['fechaInicioSNI'] == "") {
		$_POST['fechaInicioSNI'] = null;
	}
	$objInvestigacion->setfechaInicioSNI(utf8_decode($_POST['fechaInicioSNI']));

	if (isset($_POST['fechaTerminoSNI']) && $_POST['fechaTerminoSNI'] == "") {
		$_POST['fechaTerminoSNI'] = null;
	}
	$objInvestigacion->setfechaTerminoSNI(utf8_decode($_POST['fechaTerminoSNI']));

	if (isset($_POST['nivelSNI']) && $_POST['nivelSNI'] == "") {
		$_POST['fechaTerminoSNI'] = null;
	}
	$objInvestigacion->setnivelSNI($_POST['nivelSNI']);

	if (isset($_POST['idInvestigacion']) && $_POST['idInvestigacion'] != "") {
		$objInvestigacion->setidInvestigacion($_POST['idInvestigacion']);
	}

	$objInvestigacion->setnoProyOrganismoResponsable($_POST['noProyOrganismoResponsable']);
	$objInvestigacion->setnoProyInstitucionResponsable($_POST['noProyInstitucionResponsable']);
	$objInvestigacion->setnoProyOrganismoParticipo($_POST['noProyOrganismoParticipo']);
	$objInvestigacion->setnoProyInstitucionParticipo($_POST['noProyInstitucionParticipo']);
	$objInvestigacion->setusuarioRealizo($_SESSION['VS_Usuario']);

	$arrSalida = $objInvestigacion->estInvestigacionAgregarModificar();

	//echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
	echo "json={'noError':'{$arrSalida['noError']}', 'mensaje':'{$arrSalida['mensaje']}', 'idInvestigacion':'{$arrSalida['idInvestigacion']}'}";
?>