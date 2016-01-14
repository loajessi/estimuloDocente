<?php
//****************//
//  modPersonalAgregarModificar.php//
//****************//
    include("..class/clsPersonal.php");

    $objPersonal = new clsPersonal();

    $objPersonal->setidEstimulo($_POST['ctridEstimulo']);
    $objPersonal->setgradoAcademico($_POST['ctrgradoAcademico']);
    $objPersonal->setpuestoDrectivo($_POST['ctrpuestoDrectivo']);
    $objPersonal->setasistencias($_POST['ctrasistencias']);
    $objPersonal->setfechaRegistro($_POST['ctrfechaRegistro']);
    $objPersonal->setusuarioRealizo($_SESSION['VS_Usuario']);

    $arrSalida = $objPersonal->estPersonalAgregarModificar();

    echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>