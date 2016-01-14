<?
	require($_SERVER['DOCUMENT_ROOT'] . "/generalesDIyS/credenciales/crdEstimuloDocente.php");
	$iConexionBD = mssql_connect($sql_host, $sql_usuario, $sql_pass);
	mssql_select_db($sql_db);
?>