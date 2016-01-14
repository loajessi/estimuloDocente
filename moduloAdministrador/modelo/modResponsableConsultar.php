<?php 

	include("../class/clsResponsables.php");
	$iPagina=$_get[piPagina];
	
	$objConsulta=new clsResponsable();

	$objConsulta->setidTipoResponsabilidad($_POST['hdnTipoResponsabilidadID']);
	$objConsulta->setidPeriodo($_POST['selPeriodoEstimulo']);

	$sTabla=$objConsulta->getTabla($_GET['piPagina']);
	
	echo $sTabla;
?>