// JavaScript Document

function PCDJornadaPuntuacionConsultar(piPeriodo){

	var ajax = nuevoAjax();
	ajax.open("GET", "modelo/modJornadaPuntuacionConsultar.php?iPeriodoID="+piPeriodo, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4)	{			
			$("divListaJornadas").innerHTML = ajax.responseText;			
		}		
	}
	ajax.send(null);
}



function PCDTablaPuntajeConsultar(piTabulador){

	var ajax = nuevoAjax();
	ajax.open("GET", "modelo/modTablasJornadaPuntuacionConsultar.php?iTabulador="+piTabulador, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4)	{			
			$("divTablasJornadaPuntuacion").innerHTML = ajax.responseText;			
		}		
	}
	ajax.send(null);
}
