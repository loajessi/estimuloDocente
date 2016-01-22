<?
	require_once("../class/clsAcceso.php");
	
	$objAcceso=new clsAcceso();
	
	$objAcceso->setUsuario($_POST['txtUsuario']);
	$objAcceso->setContrasenya($_POST['txtContrasenya']);
	$objAcceso->setApp("SisEDDNT-RH-CS");
	
	$arrSalida=$objAcceso->sFNCAccesoValidar();
    if($arrSalida['noError']<=0){
	   $sSalida= "json = {'iError' : '" . $arrSalida['noError'] . "', 'sMsjError' : '" . $arrSalida['mensaje'] . "','todos' : '".$arrSalida['todos']."','numRoles' : '" . $arrSalida['roles']."','rol0' : '".$arrSalida['rol0']."'}";
	}
	else{
		   $sSalida= "json = {'iError' : '" . $arrSalida['noError'] . "', 'sMsjError' : '" . $arrSalida['mensaje'] . "'}";
		}
	echo  $sSalida;
?>