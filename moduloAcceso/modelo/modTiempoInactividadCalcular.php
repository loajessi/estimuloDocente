<?
	 if(isset($_SESSION['iEstimuloTiempoActividadVS'])){
		$iTiempoTranscurrido = time() - $_SESSION['iEstimuloTiempoActividadVS'];
			
	// Comparamos el tiempo transcurrido (1800 segundos = 30 minutos) 
		if($iTiempoTranscurrido >= 1800) { 
			// Si pasaron 30 minutos o más
			$bCerrarSesion = -1;	
		}else { 
			// Sino, actualizo el tiempo de actividad
			$bCerrarSesion = 0;	
		}
	}
	else $bCerrarSesion = -2;
		
	echo "json={'cerrarSesion':'$bCerrarSesion', 'tiempoTranscurrido':'$iTiempoTranscurrido', 'timeSesion': '".$_SESSION['iEstimuloTiempoActividadVS']."'}"; 


?>
