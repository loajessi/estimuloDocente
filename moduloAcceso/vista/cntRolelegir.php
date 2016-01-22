<?
  require_once("../../config.php");
  require($_SERVER['DOCUMENT_ROOT']."/generalesDIyS/fncLib.php");
  
  if(isset($_POST['hdnNumeroRoles'])){
	$iNumRoles = $_POST['hdnNumeroRoles'];
	$sRoles = $_POST['hdnListaRoles'];
	$arrRoles = array();	
	FNCObtValores($sRoles, $arrRoles);  
	$_SESSION['VS_NumRoles'] = $iNumRoles;
	$_SESSION['VS_Roles'] = $arrRoles;
  }
  else{
	$iNumRoles = $_SESSION['VS_NumRoles'];  
	$arrRoles = $_SESSION['VS_Roles'];  
  }
  
  $fPorcentaje = 100 / $iNumRoles;
  
  for($i=0;$i<$iNumRoles;$i++){
     $sRol = $arrRoles[$i];
     $sRol=trim($sRol);
     $sRol1= utf8_encode($sRol);
	 
	 switch($sRol1){
		case 'ESTIMULO_EVALUACION':
			$sRol_texto = "Direcci�n General de Evaluaci�n";
			break;
		case 'ESTIMULO_POSGRADO':
			$sRol_texto ="Direcci�n de Investigaci�n y Posgrado";
			break;
		case 'ESTIMULO_DIA':
			$sRol_texto="Direcci�n de Relaciones Internacionales";
			break;
		case 'ESTIMULO_SUPERACION':
			$sRol_texto="Direcci�n de Superaci�n Acad�mica";
			break;
		case 'ESTIMULO_CENTROCOMPUTO':
			$sRol_texto="Centro de c�mputo acad�mico";
			break;
		case 'ESTIMULO_PARQUECIENTIFICO':
			$sRol_texto="Parque cient�fico y tecnol�fico";
			break;
		case 'DAP':
			$sRol_texto="Direcci�n de Administraci�n de Personal";
			break;
		case 'ESTIMULO_SECRETARIO':
			$sRol_texto = "Secretario Acad�mico";
			break;
		default:
			$sRol_texto="";
	}						
		
	 $sListaRoles .= "<a href='#' style='float:left; width:".$fPorcentaje."%;' onclick='javascript:validarRol(\"$sRol\", 0);'>
	 					<img title='".$sRol_texto."' src='/generalesDIyS/_img/usuario.png'/><br />".$sRol_texto."
					  </a>";
  }
?>