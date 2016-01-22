<?php
	//require_once("../class/clsAcceso.php");

	//$objAcceso=new clsAcceso();
	//$objAcceso->FNCCerrarSesion();

	session_unset();
	session_destroy();
	session_start();
	$_SESSION['Alerta'] = true;
	$_SESSION['AlertaMensaje'] = 'Sesión terminada exitosamente';
	$_SESSION['AlertaTipo'] = 'info';
	$_SESSION['AlertaAnimacion'] = 'fadeIn';
?>