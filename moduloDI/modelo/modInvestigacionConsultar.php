<?php
    //****************//
    //  modInvestigacionConsultar.php//
    //****************//
    include("../class/clsInvestigacion.php");
    $objConsulta = new clsInvestigacion();

    // setters para configurar el filtro de la consulta
    $objConsulta->setIdInvestigacion($_POST['pInvestigacionID']);
    $objConsulta->setOrdenQuery("XX");

    echo $objConsulta->getDatosJson(false);
?>
