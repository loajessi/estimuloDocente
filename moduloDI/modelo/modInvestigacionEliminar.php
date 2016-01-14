<?php
//****************//
//  modInvestigacionEliminar.php//
//****************//
    include("../class/clsInvestigacion.php");

    $objInvestigacion = new clsInvestigacion();

    $objInvestigacion->setidInvestigacion($_POST['pRegistroID']);
    $objInvestigacion->setusuarioRealizo($_SESSION['VS_Usuario']);

    $arrSalida = $objInvestigacion->estInvestigacionEliminar();

    echo "json={'noError':'" . $arrSalida['noError'] . "', 'mensaje':'" . $arrSalida['mensaje'] . "'}";
?>
