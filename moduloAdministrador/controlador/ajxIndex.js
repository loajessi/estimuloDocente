// JavaScript Document

function opcionMenuAdmon(piOpcion){

	var sPagina = "";
	switch(piOpcion){
		case 1: 	
			sPagina="../moduloComite/vista/vtaOpciones.php";
			break;	
		case 21: 	
			sPagina="vista/vtaTablasPuntaje.php";
			break;
		case 22: 	
			sPagina="vista/vtaMiembrosComite.php";
			break;
		case 23: 	
			sPagina="vista/vtaReporteGeneral.php";
			break;		
	}
	
	$("divPrincipal").innerHTML = "Cargando...";
	
	var ajax = nuevoAjax();
	ajax.open("GET", sPagina, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4)	{			
			$("divPrincipal").innerHTML = ajax.responseText;			
		}
		if(piOpcion == 1) BuscarEmpleadoEstimulo();
		if(piOpcion == 22) BuscarEmpleadoGeneral();
		if(piOpcion == 23) docenteEstimuloconsultar(-1);
	}
	ajax.send(null);
}


function mostrarSeccionRegistro(piOpcion){

	if($("hdnDocenteEstimuloID"))
    {
	    var sPagina = "/estimuloDocente/moduloComite/vista/"; 
   	    $("divSeccion").innerHTML = "Cargando...";

	    switch(piOpcion){
		   case 1: 	
			   sPagina += "vtaA1.php?valor="+'A.1.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 2:	
			   sPagina += "vtaA1.php?valor="+'A.2.1.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 3: 
			   sPagina += "vtaA1.php?valor="+'A.2.2.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 4: 
			   sPagina += "vtaA1.php?valor="+'A.2.3.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 5:		
			   sPagina += "vtaA1.php?valor="+'A.3.1.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 6:		
			   sPagina += "vtaA1.php?valor="+'A.3.2.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 7: 				
			   sPagina += "vtaA1.php?valor="+'A.3.3.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 8: 
			   sPagina += "vtaA1.php?valor="+'A.4.1.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;	
		   case 9: 
			   sPagina += "vtaA1.php?valor="+'A.4.2.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;	
		   case 10: 
			   sPagina += "vtaA1.php?valor="+'A.5.1.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
		       break;	
		   case 11: 
			   sPagina += "vtaA1.php?valor="+'A.5.2.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 12: 
			   sPagina += "vtaA1.php?valor="+'B.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;
		   case 13: 
			   sPagina += "vtaA1.php?valor="+'C.'+"&docenteID="+$("hdnDocenteEstimuloID").value;
			   break;	
		   case 14: 
			   sPagina += "vtaTotal.php?docenteID="+$("hdnDocenteEstimuloID").value;
			   break;	
		   case 15: 
			   sPagina += "vtaX.php?docenteID="+$("hdnDocenteEstimuloID").value;
			   break;		
										
	     }
	
	     var opcionSeleccionada = "";
	     var opcion = "";
	     for(var i=0;i<=15;i++){
		     opcionSeleccionada = "opcionSelec_"+i;
		     opcion = "opcion_"+i;
		     if($(opcionSeleccionada)!=null){
			      $(opcionSeleccionada).style.display = "none";	
			      $(opcion).style.display = "block";
		     }
	     }
	     var ajax = nuevoAjax();
	     ajax.open("GET", sPagina, true);
	     ajax.onreadystatechange=function() 
	     { 
		     if (ajax.readyState==4)	{			
			     opcionSeleccionada = "opcionSelec_"+piOpcion;
			     opcion = "opcion_"+piOpcion;
			     $(opcionSeleccionada).style.display = "block";
			     $(opcion).style.display = "none";
			     $("divSeccion").innerHTML = ajax.responseText;
		     }
	     }
	     ajax.send(null);
  }
  else{
	    alert("Debes seleccionar primero un empleado");
	  }
}