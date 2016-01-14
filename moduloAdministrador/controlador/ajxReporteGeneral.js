// JavaScript Document

function _docenteEstimuloconsultar(piPagina){
	var piValor=$("hdnTipoFiltro").value;
	var sPagina= "../moduloAdministrador/vista/cntReporteGeneral.php?pagina="+piPagina+"&TipoFiltro="+piValor;
	var sParametros;
	if(piValor=='' || piValor==-1){
	 alert("Debes seleccionar una opci\u00F3n");
	 return;   
    }
    else{ 	
	    	if(piValor>1){
			     if($("selFiltro").value<=-1){
			          alert("Seleccionar una opci\u00F3n en el segundo elemento para buscar");
	                  return; 
			     }
			// Demas Parametros
	          sPagina+="&filtro="+$("selFiltro").value;
			}
	       var ajax=nuevoAjax();
	       ajax.open("POST",sPagina, true);
	       ajax.onreadystatechange=function() 
	       { 
		          if (ajax.readyState==1){
			          $("divTabla").innerHTML="<p> Consultando Informaci&oacute;...</p>"
		          }
		          if (ajax.readyState==4){
			         // alert(ajax.responseText);
			          $("divTabla").innerHTML=ajax.responseText;
					  $("hdnTabla").value=ajax.responseText;
					  $("divBoton").style.display="block";
		          }
	       }
		   ajax.send(null);	
     }
}

function docenteEstimuloconsultar (piPagina){	
	var sPagina= "../moduloAdministrador/vista/cntReporteGeneral.php?pagina="+piPagina+"&filtro="+$("selFiltro").value;
	var ajax=nuevoAjax();
	       ajax.open("GET",sPagina, true);
	       ajax.onreadystatechange=function() 
	       { 
		          if (ajax.readyState==1){
			          $("divTabla").innerHTML="<p> Consultando Informaci&oacute;...</p>"
		          }
		          if (ajax.readyState==4){
			         // alert(ajax.responseText);
			          $("divTabla").innerHTML=ajax.responseText;
					  $("hdnTabla").value=ajax.responseText;
					  $("divBoton").style.display="block";
		          }
	       }
		   ajax.send(null);
}

function fncTipoFiltro(piValor){
	$("hdnTipoFiltro").value=piValor;
	//alert("valor: "+$("hdnTipoFiltro").value);
	if($("hdnTipoFiltro").value==1){
			$("divFiltro").innerHTML="";	
	}
	else{
		  var ajax=nuevoAjax();
		  var sPagina= "../moduloAdministrador/vista/cntFiltroReporteGeneral.php?valor="+piValor;
	      ajax.open("GET",sPagina, true);
	      ajax.onreadystatechange=function() 
	      { 
		      if (ajax.readyState==1){
			      $("divFiltro").innerHTML="<p> Consultando Informaci&oacute;...</p>"
		      }
		      if (ajax.readyState==4){
		   	      $("divFiltro").innerHTML=ajax.responseText;
		      }
	      }
	      ajax.send(null);	
	}
}

function fncExportarExcel(){
	$("frmReporte").submit(); 
}


