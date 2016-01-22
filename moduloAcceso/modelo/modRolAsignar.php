<?
  $sRol = $_GET['rol'];
  
  $bPermitir = 0;
  $bElegirRol = 0;

  if(isset($_SESSION['VS_Roles'])){
	  if(in_array($sRol, $_SESSION['VS_Roles'])) $bPermitir = 1;  
	  $bElegirRol = 1;
  }
  else if(strcmp($sRol, $_SESSION['VS_Rol']) == 0) $bPermitir = 1;

  if($bPermitir){
	  $_SESSION['VS_Rol']=$sRol;
  	  echo "json={'iError':'0', 'sMsjError':''}";
  }  
  else
  	  echo "json={'iError':'1', 'sMsjError':'Intenta acceder a un módulo que no le corresponde', 'bElegirRol':'".$bElegirRol."'}";
?>