<?php 
//****************//
//  cntReporteGeneral.php//
//****************//
    $iPagina=$_GET['pagina'];
//	$iTipoFiltro=$_GET['TipoFiltro'];
	$iParametro=$_GET['filtro'];
	
	require_once("../class/clsDocenteEstimulo.php");
	
	$objConsulta=new clsDocenteEstimulo();
	// if($iTipoFiltro==2){
	    // $objConsulta->setidJornada($iParametro);
	// }
	// elseif($iTipoFiltro==3){ 
	    // $objConsulta->setidNivel($iParametro);
	// }
	
	if($iParametro != -1) $objConsulta->setidNivel($iParametro);
	$sQuery=$objConsulta->getQuery();
	$sTabla=$objConsulta->getTabla($iPagina);
	echo $sTabla;
	
?>