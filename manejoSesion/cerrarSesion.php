<?
	if (!isset($_SESSION['iEstimuloTiempoActividadVS']))
		echo 0;
	else {
		/*session_unset("iUsuarioEstimuloDocenteVS");
		session_unset("iPersonaID");
		session_unset("sPersonaVS");
		session_unset("sRolVS");
		session_unset("sIpUsuarioVS");*/

		session_unset();
		session_destroy();
		session_start();

		$_SESSION['Alerta'] = true;
		$_SESSION['AlertaMensaje'] = 'Sesión terminada exitosamente';
		$_SESSION['AlertaTipo'] = 'info';
		$_SESSION['AlertaAnimacion'] = 'fadeIn';

		echo 1;
	}
