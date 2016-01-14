<?php
//****************//
//  modParqueCientificoAgregarModificar.php//
//****************//
    include("../class/clsParqueCientifico.php");

    $objParqueCientifico = new clsParqueCientifico();

    $objParqueCientifico->setidEstimulo($_POST['ctridEstimulo']);
    $objParqueCientifico->setpatente($_POST['ctrpatente']);
    $objParqueCientifico->setfase($_POST['ctrfase']);
    $objParqueCientifico->setusuarioRealizo($_SESSION['VS_Usuario']);

    $arrSalida = $objParqueCientifico->estParqueCientificoAgregarModificar();

    echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>