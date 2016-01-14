// JavaScript Document
function responsableconsultar(piPagina){
	var sPagina= "modelo/modResponsableConsultar.php";
	var sParametros;
	
	sParametros="piPagina="+piPagina;
	// Demas Parametros
	sPagina+="?" + sParametros;

	$("divListaMiembrosComite").innerHTML="<p><img src='/generalesDIyS/_img/loading.gif'/><em> Consultando Informaci&oacute;n...</em></p>"
	if($("selPeriodoEstimulo").value != -1) 
		$("divAgregar").style.display = 'block';
	else {
		$("divAgregar").style.display = 'none';
		$("divListaMiembrosComite").innerHTML="";
		return;
	}
	
	var ajax=nuevoAjax();
	ajax.open("POST",sPagina, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4){
			//alert(ajax.responseText);
			$("divListaMiembrosComite").innerHTML=ajax.responseText;
		}
	}
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");		
	var formulario = $("frmComite").serialize();
	ajax.send(formulario);
}

function responsableAgregarModificar(){
	if($("hdnPersonaID") == null){
		alert("Busque el empleado que desea agregar al comit\u00e9 y de clic en AGREGAR.");
		$("txtNoEmpleado").focus();
		return;
	}

	var sPagina="modelo/modResponsableAgregarModificar.php";
	var ajax=nuevoAjax();
	ajax.open("POST", sPagina, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4){
			//alert(ajax.responseText);
			eval(ajax.responseText);
			if(json.noError > 0)
				alert("Ocurri\u00F3 un error de base de datos: \n\n" + json.mensaje);
			else {
				$("txtNoEmpleado").value = "";
				$("divNombreEmpleado").innerHTML = "";
				responsableconsultar(-1);
			}
		}
	}	
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");		
	var formulario = $("frmComite").serialize();
	ajax.send(formulario);
}

function responsableEliminar(piResponsableID){
	var sPagina="modelo/modResponsableEliminar.php?iResponsableID="+piResponsableID;
	var ajax=nuevoAjax();
	ajax.open("POST", sPagina, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4){
			//alert(ajax.responseText);
			eval(ajax.responseText);
			if(json.noError > 0)
				alert("Ocurri\u00F3 un error de base de datos: \n\n" + json.mensaje);
			else {				
				responsableconsultar(-1);
			}
		}
	}	
	ajax.send(null);
}

