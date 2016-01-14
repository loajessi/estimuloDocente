<?
	// Valida que no exista una sesi�n abierta
	if($_SESSION['iUsuarioEstimuloDocenteVS'] != '') {
		echo "json={'iError':'1', 'sMsjError':'Ya existe una sesi�n abierta de esta aplicaci�n, contin�e trabajando en ella o si desea ingresar con otro usuario, cierre esa sesi�n e intente ingresar nuevamente.'}";
		exit;
	}

	// Valida acceso general
	require($_SERVER['DOCUMENT_ROOT'] . "/generalesDIyS/rutas.php");
	//require('modVerificarCredenciales.php');

	if($iNoError != 0){
		echo "json={'iError':'$iNoError', 'sMsjError':'$sMsjError'}";
		exit;
	}

	require('../_class/clsAcceso.php');

	$sIpUsuario = $arrDatosEquipo[0]; // IP del usuario, obtenida en modVerificarCredenciales.php

	// Valida que el usuario tenga permisos de entrar a la aplicaci�n (rol)
	$objAcceso = new clsAcceso();
	$objAcceso->setUsuario($txtUsuario);
	if($hdnRol == 'Administrador') $sModulo = 'Administraci�n';
	elseif($hdnRol == 'ComiteEval') $sModulo = 'Evaluaci�n al Desempe�o Docente';

	// JLA
	elseif($hdnRol == 'SecretarioAcademico') $sModulo = 'Secretario Academico';
	////////

	$objAcceso->setModulo($sModulo);

	$arrSalida = $objAcceso->estPersona_Modulo_AccesoValidar();

	if($arrSalida['noError'] == 0) {
		// Valida que la aplicaci�n se ejecute desde una IP autorizada.
		if(($hdnRol == 'Administrador') && (!in_array($sIpUsuario, $arrIpsAdministracion, true))){
			echo "json={'iError':'1', 'sMsjError':'Este equipo de c�mputo no est� autorizado para ejecutar la aplicaci�n.'}";
			exit;
		}
		elseif(($hdnRol == 'ComiteEval') && (!in_array($sIpUsuario, $arrIpsComite, true))){
			echo "json={'iError':'1', 'sMsjError':'Este equipo de c�mputo no est� autorizado para ejecutar la aplicaci�n.'}";
			exit;
		}

		// Si todo est� bien, crea la sesi�n.
		session_start();
		$_SESSION['iUsuarioEstimuloDocenteVS'] = $txtUsuario;
		$_SESSION['iPersonaID'] = $arrSalida['idPersona'];
		$_SESSION['sPersonaVS'] = $arrSalida['nombre'].' '.$arrSalida['paterno'].' '.$arrSalida['materno'];
		$_SESSION['sRolVS'] = $hdnRol;
		$_SESSION['sIpUsuarioVS'] = $sIpUsuario;
		$_SESSION['iEstimuloTiempoActividadVS'] = time();
	}
	else if($hdnRol == 'SecretarioAcademico'){ // JLA
		$arrSalida['noError'] = 0;

		session_start();
		$_SESSION['iUsuarioEstimuloDocenteVS'] = $txtUsuario;
		$_SESSION['sRolVS'] = $hdnRol;
		$_SESSION['sIpUsuarioVS'] = $sIpUsuario;
		$_SESSION['iEstimuloTiempoActividadVS'] = time();
	}

	echo "json={'iError':'" . $arrSalida['noError']. "', 'sMsjError':'" . $arrSalida['mensaje'] . $sModulo."'}";
?>