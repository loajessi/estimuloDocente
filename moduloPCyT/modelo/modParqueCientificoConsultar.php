<?php
//****************//
//  modParqueCientificoConsultar.php//
//****************//
    include("../class/clsParqueCientifico.php");
    $objConsulta = new clsParqueCientifico();

    // setters para configurar el filtro de la consulta
    $objConsulta->setIdParqueCientifico($_POST['pParqueCientificoID']);
    $objConsulta->setOrdenQuery("XX");

    echo $objConsulta->getDatosJson(false);
?>