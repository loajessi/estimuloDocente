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

<!DOCTYPE html>
<html lang="es">
<head>
	<title>UAEH:::Sistema del Est&iacute;mulo al Desempe&ntilde;o Docente </title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="imagetoolbar" content="no" />
	<!-- Estilos -->
	<link rel="stylesheet" href="/generalesDIyS/_estilo/layout.css" type="text/css" />
	<link rel="stylesheet" href="../_estilo/estimuloPersonalDocente.css" type="text/css" />
	<link rel="stylesheet" href="/generalesDIyS/_jscript/jquery-ui-1.11.4/jquery-ui.min.css" type="text/css" />
	<link rel="stylesheet" href="/generalesDIyS/_jscript/jqwidgets_3.9.1/styles/jqx.base.css" type="text/css" />
	<link rel="stylesheet" href="/generalesDIyS/_jscript/jqwidgets_3.9.1/styles/jqx.energyblue.css" type="text/css" />

	<!-- Librerias -->
	<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jquery-ui-1.11.4/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxcore.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/globalization/globalize.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/globalization/localizationGrid.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/globalization/globalize.culture.es-MX.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/libFunc.js"></script>
	<script type="text/javascript" src="../_jscript/notificaciones.js"></script>

	<!-- Widgets jqwidgets -->
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxmenu.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxbuttongroup.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxgrid.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxgrid.edit.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxgrid.filter.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxgrid.sort.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxgrid.pager.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxgrid.selection.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxdropdownlist.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxscrollbar.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxlistbox.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxbuttons.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxnumberinput.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxdata.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxtabs.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxcheckbox.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxcalendar.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/jqwidgets_3.9.1/jqxdatetimeinput.js"></script>

	<!-- Widgets estimulo -->
	<script type="text/javascript" src="widgets/jqxValidacionDatos.js"></script>

	<!-- Controladores -->
	<script type="text/javascript" src="../moduloAcceso/controlador/ajxAcceso.js"></script>
	<script type="text/javascript" src="/estimuloDocente/moduloGenerales/controlador/ajxInformacionEmpleado.js"></script>
	<script type="text/javascript" src="../moduloGenerales/controlador/ajxIndex.js"></script>
	<script type="text/javascript" src="controlador/ajxValidacionDatos.js"></script>

	<!-- Control de sesión -->
	<script type="text/javascript">
		window.onclick = function () {
			PCDTiempoInactividadCalcular();
		};

		window.onkeypress = function () {
			PCDTiempoInactividadCalcular();
		};

		$(document).ready(function () {
			indexInicializar();
		});
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

			<h2>Est&iacute;mulo al Desempe&ntilde;o del Personal Docente </h2>
		</div>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="topbar">
		<div class="info-fechaLimite animated fadeInLeft delay-10">
			<img src="/generalesDIyS/_img/info.png" height="20" width="20" />&nbsp;&nbsp;Fecha límite para captura de datos:
			<b id="FechaLimiteCaptura"><?= $_SESSION['fechaLimiteCaptura'] ?></b>
		</div>
		<div class="fl_right">
			<p><? echo $_SESSION['sPersonaVS']; ?>&nbsp;&nbsp;&nbsp;
				<a href="javascript:PCDCerrarSesion();" class="boton icon salir">Cerrar sesi&oacute;n </a></p></div>
		<br class="clear" />
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="topnav">
		<div id='jqxMenu_Index'>
			<ul>
				<li>Registro
					<ul>
						<li id="vtaValidacionDatos">Validaci&oacute;n de datos</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="breadcrumb">
		<ul class="animated fadeIn">
			<li class="first">M&oacute;dulo: Direcci&oacute;n de Relaciones Internacionales</li>
		</ul>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div class="container animated fadeIn">
		<div id="divPrincipal" class="whitebox"><h1>Bienvenid@</h1></div>
		<div id="divInformacionEmpleado" class="whitebox"></div>
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