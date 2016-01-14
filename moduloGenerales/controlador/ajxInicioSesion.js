function seleccionaRol (psRol){
	
	$("hdnRol").value = psRol;
	if($("hdnRol").value == 'Administrador') {
		$("hdnApp").value = "SisEDDNT-Adm";
		$("RolMostrar").innerHTML = "Administrador";
	}
	else if($("hdnRol").value == 'ComiteEval') {
		$("hdnApp").value = "SisEDDNT-Evl";
		$("RolMostrar").innerHTML = "Comité de evaluación";
	}
	else if($("hdnRol").value == 'SecretarioAcademico') { // JLA
		$("hdnApp").value = "SisEDDNT-Adm";
		$("RolMostrar").innerHTML = "Secretario Académico";
	}

}

function validaAcceso(){
	if($("hdnRol").value == 0){
		alert("Especifique el módulo al que desea entrar.");
		return;
	}
	
	$("btnEntrar").innerHTML = "Validando acceso";
	var ajax=nuevoAjax();
	ajax.open("POST", "_modelo/modAcceso.php", true);
	ajax.onreadystatechange=function() 
	{ 
		if (ajax.readyState==4){
			$("btnEntrar").disabled = 0;
			//alert(ajax.responseText);
			eval(ajax.responseText);
			if(json.iError > 0){
				alert("Ocurrió un error de base de datos al accesar: \n\n" + json.sMsjError);
				$("btnEntrar").innerHTML = "Entrar";
			}
			else {
				if($("hdnRol").value == 'Administrador')
					$("frmAcceso").action = "moduloAdministrador/index.php";
				else if($("hdnRol").value == 'ComiteEval')
					$("frmAcceso").action = "moduloComite/index.php";
				else if($("hdnRol").value == 'SecretarioAcademico')
					$("frmAcceso").action = "moduloSrioAcademico/index.php";
				$("frmAcceso").submit();
			}
		}
	}
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");		
	var formulario = $("frmAcceso").serialize();
	ajax.send(formulario);	
}