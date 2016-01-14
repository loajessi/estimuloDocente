<?php
//****************//
//  modEvaluacionEliminar.php//
//****************//
    include("../class/clsEvaluacion.php");

    $objEvaluacion = new clsEvaluacion();

    $objEvaluacion->setidEvaluacion($_POST['pRegistroID']);
    $objEvaluacion->setusuarioRealizo($_SESSION['VS_Usuario']);

    $arrSalida = $objEvaluacion->estEvaluacionEliminar();

    echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>