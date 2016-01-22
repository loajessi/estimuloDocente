// JavaScript Document

function sObtienePaginaAcceso(psRol){
	var sPagina="";	
	
	var rolComiteDictaminador = escape('Miembro del Comit\u00E9 Dictaminador');
	rolComiteDictaminador = unescape(rolComiteDictaminador);

	switch(psRol){
		case 'ESTIMULO_EVALUACION':
			sPagina="moduloDGE/index.php";
			break;
		case 'ESTIMULO_POSGRADO':
			sPagina="moduloDI/index.php";
			break;
		case 'ESTIMULO_DIA':
			sPagina="moduloDRI/index.php";
			break;
		case 'ESTIMULO_SUPERACION':
			sPagina="moduloDISA/index.php";
			break;
		case 'ESTIMULO_CentroComputo':
			sPagina="moduloCECA/index.php";
			break;
		case 'ESTIMULO_ParqueCientifico':  		
			sPagina="moduloPCyT/index.php";
			break;
		case 'DAP':
			sPagina="moduloDAP/index.php";
			break;
		case 'ESTIMULO_SECRETARIO':
			sPagina = "moduloSrioAcademico/index.php";
			break;
		default:
			sPagina="";
	}
	
	return(sPagina);
}

function accesoValidar(){	
	var sPagina, nombre, rolesS;
	
	// Validacion de datos de entrada
	if(trim_long($("txtUsuario").value) == 0){
		alert("Introduzca su usuario.");
		$("txtUsuario").focus();
		return;
	}
	else if(trim_long($("txtContrasenya").value) == 0){
		alert("Introduzca su contrase\u00f1a.");
		$("txtContrasenya").focus();
		return;
	}
	
	// Valida Acceso
	$("btnEntrar").innerHTML = "Validando acceso...";
	
	var ajax = nuevoAjax();	
	sModelo="moduloAcceso/modelo/modAcceso.php"
	
	ajax.open("POST", sModelo, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4)
		{			
			//alert(ajax.responseText);
			$("btnEntrar").innerHTML = "Iniciar sesi&oacute;n";
			
			eval(ajax.responseText);
			if(json.iError > 0){
				alert(json.sMsjError);
			}
			else{
				 if(json.numRoles==1){
				   sPagina=sObtienePaginaAcceso(json.rol0);
				 }
				 else{
					   $("hdnNumeroRoles").value = json.numRoles;
					   $("hdnListaRoles").value = json.todos;

					   sPagina="moduloAcceso/vista/vtaRoles.php";
				 }
				$("frmAcceso").action=sPagina;
				$("frmAcceso").submit();
			}				
		}
	}
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");		
	var formularioReg = $("frmAcceso").serialize();
	ajax.send(formularioReg);
		
}

function PCDTiempoInactividadCalcular(){
	var ajax=nuevoAjax();
	ajax.open("GET", "../moduloAcceso/modelo/modTiempoInactividadCalcular.php", true);
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){ 
//			alert(ajax.responseText);
			eval(ajax.responseText);
			if(json.cerrarSesion == -1) {				
				alert("Por seguridad de su informaci\u00F3n y debido a que ha excedido el periodo de inactividad permitido,"+
				"\nsu sesi\u00F3n ha sido terminada, si desea continuar trabajando debe ingresar nuevamente al sitio.");
				sesionCerrar();
			}
			else if(json.cerrarSesion == -2) {				
				alert("Ha cerrado su sesi\u00F3n en otra ventana, por favor inicie de nuevo.\nEsto es necesario para proteger su informaci\u00F3n.");
				sesionCerrar();				
			
			}
		}
	}
	ajax.send(null);	
}

function PCDTiempoActividadRegistrar(){
	var ajax=nuevoAjax();
	ajax.open("GET", "../moduloAcceso/modelo/modTiempoActividadRegistrar.php", true);
	ajax.onreadystatechange=function(){}
	ajax.send(null);
}

function sesionCerrar(piValor){
	var ajax = nuevoAjax();
	ajax.open("GET", "/estimuloDocente/moduloAcceso/modelo/modAccesoCerrar.php", true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4)	{
			if(piValor==1) {window.location="../../index.php";}
			else{window.location="../index.php";}
		}
	}
	ajax.send(null);
}

function validarRol(sRol, bLoad){
	var sPagina = "";
    var ajax = nuevoAjax();

    if(!bLoad) sPagina = "../modelo/modRolAsignar.php?rol="+sRol;
    else sPagina = "../moduloAcceso/modelo/modRolAsignar.php?rol="+sRol;

	ajax.open("GET", sPagina, true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4)	{
			eval(ajax.responseText);
			if(json.iError == 0){
				if(bLoad){
					$("#lblRol").html(sRol);
					$("#hdnRolUsuario").val(sRol);
				}
				else{
					sPagina=sObtienePaginaAcceso(sRol);
					$("frmAccesoRol").action="../../"+sPagina;
					$("frmAccesoRol").submit();	
				}
			}
			else{
				alert(json.sMsjError);
				if(json.bElegirRol == 1)
					window.location="../moduloAcceso/vista/vtaRoles.php";
				else
					sesionCerrar();
			}			
		}
	}
	ajax.send(null);
}