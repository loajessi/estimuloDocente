<?php
	if (!isset($_SESSION['VS_Usuario']) || $_SESSION['VS_Usuario'] == '') {
		$_SESSION['Alerta'] = true;
		$_SESSION['AlertaMensaje'] = 'Debes accesar al sistema';
		$_SESSION['AlertaTipo'] = 'alert';
		$_SESSION['AlertaAnimacion'] = 'shake';

		header('Location: ../index.php');
		die();
	}

	$_SESSION['iEstimuloTiempoActividadVS'] = time();
?>

<!doctype html>
<html lang="es">
<head>
	<title>UAEH:::Sistema del Est&iacute;mulo al Desempe&ntilde;o Docente </title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="imagetoolbar" content="no" />

	<!-- Estilos -->
	<link rel="stylesheet" href="/generalesDIyS/_estilo/layout.css" type="text/css" />
	<link rel="stylesheet" href="../_estilo/estimuloPersonalDocente.css" type="text/css" />

	<!-- Librerias -->
	<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/libFunc.js"></script>

	<!-- Controladores -->
	<script type="text/javascript" src="controlador/ajxIndex.js"></script>
	<script type="text/javascript" src="controlador/ajxTablasPuntaje.js"></script>
	<script type="text/javascript" src="controlador/ajxMiembrosComite.js"></script>
	<script type="text/javascript" src="controlador/ajxReporteGeneral.js"></script>
	<script type="text/javascript" src="/generalesDIyS/busquedaPersonal/controlador/ajxBuscarEmpleado.js"></script>
	<script type="text/javascript" src="../manejoSesion/controlador/ajxSesion.js"></script>
	<script type="text/javascript" src="../busquedaDocentesEstimulo/controlador/ajxBuscarDocenteEstimulo.js"></script>
	<script type="text/javascript" src="../moduloComite/controlador/ajxIndex.js"></script>
	<script type="text/javascript" src="../moduloComite/controlador/ajxBusqueda.js"></script>
	<script type="text/javascript" src="../moduloComite/controlador/ajxCaptura.js"></script>

	<!-- Control de sesión -->
	<script type="text/javascript">
		window.onclick = function () {
			PCDTiempoInactividadCalcular();
		}
		window.onkeypress = function () {
			PCDTiempoInactividadCalcular();
		}
	</script>
</head>
<body id="top" onfocus="PCDTiempoInactividadCalcular();">
<div class="wrapper">
	<div id="header">
		<div id="escudo">
			<a href="http://www.uaeh.edu.mx" target="_blank"><img src="/generalesDIyS/_img/escudo2.png" width="58" height="73" alt="P&aacute;gina Principal UAEH" /></a>
		</div>
		<div id="tituloHeaderPrincipal">
			<h1>Universidad Aut&oacute;noma del Estado de Hidalgo</h1>
		</div>
		<div id="tituloHeader">
			<h1>Secretar&iacute;a General</h1>

			<h2>Est&iacute;mulo al Desempeño del Personal Docente </h2>
		</div>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="topbar">
		<div class="fl_right">
			<p><? echo $_SESSION['sPersonaVS']; ?>&nbsp;&nbsp;&nbsp;
				<a href="javascript:PCDCerrarSesion();" class="boton icon salir">Cerrar sesi&oacute;n </a></p></div>
		<br class="clear" />
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="topnav">
		<ul class="nav">
			<li class="active"><a href="#">Administración</a>
				<ul>
					<li><a href="javascript:opcionMenuAdmon(21);">Tablas de niveles del estímulo</a></li>
					<li><a href="javascript:opcionMenuAdmon(22);">Miembros del comité evaluador</a></li>
				</ul>
			</li>
			<li class="active"><a href="javascript:opcionMenuAdmon(1);">Evaluación del docente</a></li>
			<li class="active"><a href="#">Reportes</a>
				<ul>
					<li class="active">
						<a href="javascript:opcionMenuAdmon(23);">Reporte Final de Evaluación</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="breadcrumb">
		<ul>
			<li class="first">Modulo: Administración</li>
		</ul>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div class="container">
		<div id="divPrincipal" class="whitebox"><h1>Bienvenid@</h1></div>
		<div class="clear"></div>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper"></div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="copyright">
		<p class="fl_left">Direcci&oacute;n General de Planeaci&oacute;n<a href="#"></a></p>

		<p class="fl_right">
			<a href="http://sgc.uaeh.edu.mx/dis/" target="_blank">Direcci&oacute;n de Informaci&oacute;n y Sistemas</a>
		</p>
		<br class="clear" />
	</div>
</div>
<script type="text/javascript" src="/generalesDIyS/_jscript/superfish.js"></script>
<script type="text/javascript">
	jQuery(function () {
		jQuery('ul.nav').superfish();
	});
</script>
</body>
</html>