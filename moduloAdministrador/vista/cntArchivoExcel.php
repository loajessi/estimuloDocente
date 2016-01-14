<? 
 header ('Content-type: application/vnd.ms-excel');
   header ('Content-Disposition: attachment; filename=ReporteGeneral.xls' ); 
   header ('Pragma: no-cache');  
   header ('Expires: 0');
   
   //**** Genera la tabla con todos los registros ********
	require_once("../class/clsDocenteEstimulo.php");
	
	$objConsulta=new clsDocenteEstimulo();
/*	if($hdnTipoFiltro==2){
	    $objConsulta->setidJornada($selFiltro);
	}
	elseif($hdnTipoFiltro==3){ 
	    $objConsulta->setidNivel($selFiltro);
	}
	*/
	if($selFiltro != -1) $objConsulta->setidNivel($selFiltro);
	$sQuery=$objConsulta->getQuery();
	$sTabla=$objConsulta->getTablaCompleta($sQuery);
//*********************************************************

	/****Imprime la tabla que se muestra en pantalla
	 $sTabla=$hdnTabla;
	*********************************/

	
   echo $sTabla;
?>