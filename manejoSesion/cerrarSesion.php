<?
	if(!isset($_SESSION['iEstimuloTiempoActividadVS'])) 
		echo 0;
	else {
		session_unset("iUsuarioEstimuloDocenteVS");
		session_unset("iPersonaID");
		session_unset("sPersonaVS");
		session_unset("sRolVS");
		session_unset("sIpUsuarioVS");

		session_destroy();
		echo 1;
	}			
?>
