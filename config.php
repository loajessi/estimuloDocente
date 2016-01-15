<?
	require($_SERVER['DOCUMENT_ROOT']."/generalesDIyS/rutas.php");
	require($_SERVER['DOCUMENT_ROOT'] . "/estimuloDocente/conexionBD.php");

	$arrIpsAdministracion = array('200.57.53.214', '200.57.53.215', '200.57.53.216', '200.57.53.218');
	$arrIpsComite = array('200.57.53.214', '200.57.53.210', '200.57.53.211', '200.57.53.212', '200.57.53.213');

	$_SESSION['iEstimuloTiempoActividadVS'] = time();
?>