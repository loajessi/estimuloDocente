<?php
require_once("../../config.php");
require_once("clsProcedimientos.php");
require_once("clsConsulta.php");
require('clsAutenticacion.php');
require('clsEncripta.php');
class clsAcceso{
	private $sUsuario;
	private $sNip;
	private $sRol;
	private $app;
	private $modulo;
	private $sProceso;
	private $iError;
	private $sMensajeError;
	private $sNombreCompleto;
	private $personaID;


	public function __construct(){
		$this->sUsuario="";
		$this->sNip="";
		$this->sRol="";
		$this->sProceso="";
		$this->app="";
		$this->modulo="";
		$this->sNombreCompleto="";
		$this->personaID=-1;
	}

	public function setUsuario($psUsuario){
		$this->sUsuario=utf8_decode($psUsuario);
	}
	public function getUsuario(){
		return $this->sUsuario;
	}
	public function setContrasenya($psContrasenya){
		$objEncripta=new clsEncripta($psContrasenya);
		$this->sNip=$objEncripta->getNipEncriptado();
	}
	public function setApp($psApp){
		$this->app=$psApp;
	}
	public function getApp(){
		return $this->app;
	}
	public function setRol($psRol){
		$this->sRol=$psRol;
	}
	public function getRol(){
		return $this->sRol;
	}
	public function setModulo($psModulo){
		$this->modulo=$psModulo;
	}
	public function getModulo(){
		return $this->modulo;
	}
	public function setNombreCompleto($psNombreCompleto){
		$this->sNombreCompleto=utf8_decode($psNombreCompleto);
	}
	public function getNombrecompleto(){
		return $this->sNombreCompleto;
	}
	public function setpersonaID($ppersonaID){
		$this->personaID=$ppersonaID;
	}
	public function getpersonaID(){
		return $this->personaID;
	}

	private function FNCProcesoValidacionEjecutar(){
		require_once('conexionAccesoBD_test.php');

		$objUsuario = new clsUsuario();
		$arrDatosEquipo = $objUsuario->segUsuario_DatosEquipoObtener();
		$objUsuario->setusuario($this->sUsuario);
		$objUsuario->setpasswordNuevo($this->sNip);
		$objUsuario->setApp($this->app);
		$objUsuario->setDispositivo($arrDatosEquipo[1]);
		$objUsuario->setDireccionIP($arrDatosEquipo[0]);

		$arrResultado = array();
		$arrResultado = $objUsuario->segUsuario_App_PasswordValidar();

		return $arrResultado;
	}

	private function FNCTipoResponsabilidadAccesoValidar(){
		include("../../config.php");

		$sQuery = "SELECT distinct TUSR.usuario, TUSR.rol,
						  nombreCompleto = rtrim(ltrim(TUSR.ape_paterno) + ' ' + ltrim(TUSR.ape_materno) + ' ' + ltrim(TUSR.nombres))
				   FROM seg_cg_usuarios TUSR
				   WHERE TUSR.usuario = '".$this->sUsuario."'
				   AND (TUSR.rol like 'estimulo_%' OR TUSR.rol LIKE 'dap')
				   UNION
				   SELECT distinct TUSR.usuario, rol = 'ESTIMULO_SECRETARIO',
						  nombreCompleto = rtrim(ltrim(TUSR.ape_paterno) + ' ' + ltrim(TUSR.ape_materno) + ' ' + ltrim(TUSR.nombres))				   				   FROM seg_cg_usuarios TUSR
				   INNER JOIN cg_secacademicoestimulo TSEC
				   ON TSEC.usuario = TUSR.usuario
				   WHERE TUSR.usuario = '".$this->sUsuario."'";

		$objConsulta=new clsConsulta($sQuery);
		$objConsulta->FNCQueryEjecutar();

		$arrDatos=$objConsulta->getArregloResultado();
		return $arrDatos;
	}

	public function sFNCAccesoValidar(){
		$this->iError=0;
		$this->sMensajeError="";
		$arrSalida=array();
		$arrDatosPersona=array();
		$arrDatosRol=array();

		//checa el acceso del usuario
		$arrSalida=$this->FNCProcesoValidacionEjecutar();
		$this->iError=$arrSalida['noError'];
		$this->sMensajeError=$arrSalida['mensaje'];

		if($this->iError<=0){
			 //Acceso valido, Verifica Permisos
			 $this->personaID=$arrSalida['idUsuario'];

			$arrDatosRol=$this->FNCTipoResponsabilidadAccesoValidar();  //checa los roles
			$i=count($arrDatosRol);
			if($i<=0){
				 $arrSalida['noError']=1;
				 $arrSalida['mensaje']="El usuario no tiene roles asignados para la aplicaci�n.";
			}
			else{
				  $arrSalida['roles']=$i;
				  $this->sNombreCompleto=$arrDatosRol[0]['nombreCompleto'];
				  if($i==1) $arrSalida['rol0'] = $arrDatosRol[0]['rol'];
				  else{
						$arrSalida['rol0']='';
						for($c=0;$c<$i;$c++){
							  $arrSalida['todos'] .= $arrDatosRol[$c]['rol']."@";
						}
				  }

				 session_start();
				 $_SESSION['iEstimuloTiempoActividadVS'] = time();
				 $_SESSION['VS_PersonaID'] = $this->personaID;
				 $_SESSION['VS_PersonaNombre'] = $this->sNombreCompleto;
				 $_SESSION['VS_Usuario'] = $this->sUsuario;

				 if($i==1) $_SESSION['VS_Rol'] = $arrSalida['rol0'];
				 else $_SESSION['VS_Rol'] = 'por definir';
			 }
		} // If $this->iError
		return $arrSalida;
	}

	public function FNCCerrarSesion(){
		/*session_unset($_SESSION['iEstimuloTiempoActividadVS']);
		session_unset($_SESSION['VS_Usuario']);
		session_unset($_SESSION['VS_PersonaID']);
		session_unset($_SESSION['VS_PersonaNombre']);
		session_unset($_SESSION['VS_Rol']);
		session_unset($_SESSION['VS_NumRoles']);
		session_unset($_SESSION['VS_Roles']);*/
		session_unset();
		session_destroy();
	}

}

?>