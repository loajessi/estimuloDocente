<?php 

	include("../class/clsAp_Contrato_Personales.php");
	include("../class/clsCg_Ciclos_Estimulo.php");	
	
	$objCiclo = new clsCg_Ciclos_Estimulo();
	$objCiclo->setEstado('S');
	$arrCiclo = $objCiclo->getDatos(true);
	
	$objConsulta=new cls_contrato_personales();

	// setters para configurar el filtro de la consulta
	$objConsulta->setid_persona($_POST['piPersonaID']);
	$objConsulta->setfechaInicioEvaluacionCiclo($arrCiclo['fecha_evaluar_inicio']);
	$objConsulta->setfechaTerminoEvaluacionCiclo($arrCiclo['fecha_evaluar_termino']);
	$arrSalida = $objConsulta->totalHorasEmpleado_Calcular();

	echo $arrSalida['total'];
?>
