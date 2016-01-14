// JavaScript Document

function PCDTiempoInactividadCalcular(){
	var ajax=nuevoAjax();
	ajax.open("GET", "../manejoSesion/tiempoInactividadCalcular.php", true);
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){ 
			eval(ajax.responseText);
			if(json.cerrarSesion == -1) {
				alert("Por seguridad de su informaci\u00F3n y debido a que ha excedido el periodo de inactividad permitido,"+
				"\nsu sesi\u00F3n ha sido terminada, si desea continuar trabajando debe ingresar nuevamente al sitio.");
				PCDCerrarSesion();
			}
			else if(json.cerrarSesion == -2) {
				alert("Ha cerrado su sesi\u00F3n en otra ventana, por favor inicie de nuevo.\nEsto es necesario para proteger su informaci\u00F3n.");
				window.location = "../index.php";
			}
			//else if(json.cerrarSesion == 0) alert(json.tiempoTranscurrido);
		}
	}
	ajax.send(null);	
}

function PCDCerrarSesion(){
	var ajax=nuevoAjax();
	ajax.open("GET", "../manejoSesion/cerrarSesion.php", true);
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){ 
			if(ajax.responseText == 1) window.location = "../index.php";
		}
	}
	ajax.send(null);
}