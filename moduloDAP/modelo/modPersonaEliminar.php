<?php
//****************//
//  modPersonalEliminar.php//
//****************//
    include("../class/clsPersonal.php");

    $objPersonal = new clsPersonal();

    $objPersonal->setidPersonal($_POST['pRegistroID']);
    $objPersonal->setusuarioRealizo($_SESSION['VS_Usuario']);

    $arrSalida = $objPersonal->estPersonalEliminar();

    echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>