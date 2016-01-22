<? require ("cntRolelegir.php");  ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="EN" lang="EN" dir="ltr">
<head profile="http://gmpg.org/xfn/11">
<title>UAEH ::: Programa Anual Operativo (PAO)</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="imagetoolbar" content="no" />

<script type="text/javascript" src="/generalesDIyS/_jscript/libFunc.js"></script>
<script type="text/javascript" src="/generalesDIyS/_jscript/prototype-1.6.0.2.js"></script>
<script type="text/javascript" src="/generalesDIyS/_jscript/scriptaculous-js-1.8.1/src/scriptaculous.js?load=builder,effects"></script>
<script type="text/javascript" src="/generalesDIyS/_jscript/modalbox/modalbox.js"></script>


<link rel="stylesheet" href="/generalesDIyS/_estilo/layout.css" type="text/css" />
<link type="text/css" href="/generalesDIyS/_jscript/modalbox/modalbox.css" rel="stylesheet"/>
<script type="text/javascript" src="../controlador/ajxAcceso.js"></script>
</head>

<body id="top">
<div class="wrapper">
  <div id="header">
    <div id="escudo"><a href="http://www.uaeh.edu.mx" target="_blank"><img src="/generalesDIyS/_img/escudo2.png" width="58" height="73" alt="P&aacute;gina Principal UAEH" /></a></div>
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
  <div id="topbar"><br class="clear" />
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
  <div id="topnav">
    <ul class="nav">
      <li class="active">
      </li>
</ul>
    <div class="clear"></div>
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
  <div id="breadcrumb"></div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper">
  <div class="container">
    <div class="whitebox" align="center">
      <!-- ####################################################################################################### -->
          <h4 align="left"><strong><? echo $_SESSION['VS_PersonaNombre']; ?></strong></h4>
          <p align="left">Por favor elija el rol con el que desea ingresar:</p>
          <br /><br />
          <form id="frmAccesoRol" name="frmAccesoRol" method="post" action="">
             <? echo $sListaRoles; ?>
             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
             <a href="#" onClick="sesionCerrar(1);" class="boton icon salir">Cerrar sesi&oacute;n </a>
             <br />
          </form>
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
    <p class="fl_left">Direcci&oacute;n General de Planeaci&oacute;n<a href="#"></a></p>
    <p class="fl_right"><a href="http://sgc.uaeh.edu.mx/dis/" target="_blank">Direcci&oacute;n de Informaci&oacute;n y Sistemas</a></p>
    <br class="clear" />
  </div>
</div>
</body>
</html>