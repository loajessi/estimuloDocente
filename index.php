<!DOCTYPE html>
<html lang="es-MX">
<head>
	<title>UAEH:::Sistema del Estímulo al Desempeño del Personal Docente</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="imagetoolbar" content="no" />
	<link rel="stylesheet" href="/generalesDIyS/_estilo/layout.css" type="text/css" />
	<link rel="stylesheet" href="_estilo/estimuloPersonalDocente.css" type="text/css" />
	<!--script-- type="text/javascript" src="/generalesDIyS/_jscript/tcal.js"></script-->
	<!--script type="text/javascript" src="/generalesDIyS/_jscript/jquery-1.4.1.min.js"></script-->
	<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/prototype-1.6.0.2.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/libFunc.js"></script>
	<!--script type="text/javascript" src="/generalesDIyS/_jscript/scriptaculous-js-1.8.1/src/scriptaculous.js?load=builder,effects"></script>
	<script type="text/javascript" src="/generalesDIyS/_jscript/modalbox/modalbox.js"></script>
	<script type="text/javascript" src="/generalesDIyS/_ckeditor/ckeditor.js"></script-->

	<script type="text/javascript" src="moduloGenerales/controlador/ajxInicioSesion.js"></script>
</head>
<body id="top">
<div class="wrapper">
	<div id="header">
		<div id="escudo">
			<a href="http://www.uaeh.edu.mx" target="_blank">
				<img src="/generalesDIyS/_img/escudo2.png" width="58" height="73" alt="P&aacute;gina Principal UAEH" />
			</a>
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
<!--div class="wrapper">
	<div id="topbar">
		<br class="clear" />
	</div>
</div-->
<div class="wrapper">
	<div id="breadcrumb"></div>
</div>

<!-- ####################################################################################################### -->
<div class="wrapper">
	<div class="container">
		<div class="whitebox">
			<p align="center"></p>
			<!-- ####################################################################################################### -->

			<?php if (isset($_SESSION['Alerta']) && $_SESSION['Alerta'] != '') { ?>
				<div class="box <?= $_SESSION['AlertaTipo'] ?>-box animated <?=$_SESSION['AlertaAnimacion']?>">
					<?= $_SESSION['AlertaMensaje'] ?>
				</div>
			<?php }
				unset($_SESSION['Alerta'], $_SESSION['AlertaMensaje'], $_SESSION['AlertaTipo']); ?>

			<!-- ####################################################################################################### -->
			<div id="stylized" class="formulario animated fadeInUp">
				<form id="frmAcceso" name="frmAcceso" method="post" action="#">
					<h1>ACCESO</h1>

					<p id="RolMostrar">&nbsp;</p>
					<label>Usuario:</label>
					<input name="txtUsuario" type="text" id="txtUsuario" size="6" />
					<label>Contrase&ntilde;a:</label>
					<input name="txtContrasenya" type="password" id="txtContrasenya" size="6" />
					<input type="hidden" id="hdnRol" name="hdnRol" value="0" />

					<button type="button" id="btnEntrar" onclick="validaAcceso();">Entrar</button>
					<!--a id="btnEntrar" href="moduloSrioAcademico/">Entrar</a-->

					<input type="hidden" id="hdnApp" name="hdnApp" value="" />

					<div class="spacer"></div>
				</form>
			</div>
			<div id="divReestablecerContrasenia" class="animated fadeIn txtCentrado">
				<form id="frmReestablecerContrasenia" name="frmReestablecerContrasenia" method="post" action="http://sistemas.uaeh.edu.mx/generalesDIyS/autenticacion/vista/vtaReestablecerEnviar.php" target="_blank">
					<br />
					<a href="#" onClick="document.frmReestablecerContrasenia.submit()">
						<strong>&iquest;Has olvidado tu contrase&ntilde;a?</strong>
					</a>
					<input type="hidden" id="hdnPerfil" name="hdnPerfil" value="Empleado" />
				</form>
			</div>
			<div id="cajaBotones">
				<div class="boton-group txtCentrado">
					<!--a href="#" class="boton icon usuario" onclick="seleccionaRol('Administrador');">Administrador</a>
					<a href="#" class="boton icon usuario" onclick="seleccionaRol('ComiteEval');">Comit&eacute; Evaluaci&oacute;n</a>
					<a href="#" class="boton icon usuario" onclick="seleccionaRol('SecretarioAcademico');">Secretario Acad&eacute;mico</a-->
					<a href="dummyAccesar.php?m=moduloSrioAcademico" class="boton icon usuario">Secretario Académico</a>
					<a href="dummyAccesar.php?m=moduloPCyT" class="boton icon usuario">Parque Científico y Tecnológico</a>
					<a href="dummyAccesar.php?m=moduloCECA" class="boton icon usuario">Centro de Cómputo Académico</a>
					<br />
					<a href="dummyAccesar.php?m=moduloDAP" class="boton icon usuario">Direcci&oacute;n de Administraci&oacute;n de Personal</a>
					<a href="dummyAccesar.php?m=moduloDGE" class="boton icon usuario">Direcci&oacute;n General de Evaluaci&oacute;n</a>
					<a href="dummyAccesar.php?m=moduloDI" class="boton icon usuario">Direcci&oacute;n de Investigaci&oacute;n</a>
					<br />
					<a href="dummyAccesar.php?m=moduloDRI" class="boton icon usuario">Direcci&oacute;n de Relaciones Internacionales</a>
					<a href="dummyAccesar.php?m=moduloDISA" class="boton icon usuario">Direcci&oacute;n de Superaci&oacute;n Acad&eacute;mica</a>
				</div>
			</div>

			<!-- ####################################################################################################### -->
			<div class="clear"></div>
		</div>
	</div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper"></div>
<!-- ####################################################################################################### -->
<div class="wrapper">
	<div id="copyright">
		<p class="fl_left">
			Direcci&oacute;n General de Planeaci&oacute;n
			<a href="#"></a>
		</p>

		<p class="fl_right">
			<a href="http://sgc.uaeh.edu.mx/dis/" target="_blank">Direcci&oacute;n de Informaci&oacute;n y Sistemas</a>
		</p>
		<br class="clear" />
	</div>
</div>
</body>
</html>