<?php 
require_once("../../config.php");
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
/*** Clase Generada por CTool 3.1 para el objeto ms_estimulo
* @author JLA
* Fecha:13/01/2016
 
*/
class clsMs_Estimulo{
	private $id_estimulo;
    private $id_ciclo;
    private $num_empleado;
    private $id_contrato;
    private $tipo_contrato;
    private $grado_minimo;
    private $directivo;
    private $asistencias;
    private $horas_asesoria;
    private $horas_tutoria;
    private $amonestacion;
    private $usuario;
    private $fecha_reg;
    private $estado;
    private $becaPromep;
    private $perfilPromep;
    private $evaluoAlumno;
    private $evaluoAcademico;
    private $reconocimiento;
    private $becaFederal;
    private $actividadInstitucional;
    private $cursoCuf;
    private $validado;
    private $noHojas;
    private $fechaInicioReconocimiento;
    private $fechaTerminoReconocimiento;
    private $fechaInicioPerfilPromep;
    private $fechaTerminoPerfilPromep;
    private $fechaInicioBecaPromep;
    private $fechaTerminoBecaPromep;
    private $becaPosgCalidad;
    private $fechaInicioBecaPosgCalidad;
    private $fechaTerminoBecaPosgCalidad;
    private $cursoImpartidoCuf;
    private $fechaInicioBecaFederal;
    private $fechaTerminoBecaFederal;
    private $planta;
    private $fila;
    private $butaca;
    private $supAcademica;
    private $nivelReconocimiento;
    private $innovacionEducativa;
    private $tics;
    private $egelCeneval;
    private $becaBecanet;
    private $liderCuerpoAcademico;
	private $usuarioRealizo;
	private $ordenQuery;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->id_estimulo = -1;
		$this->id_ciclo = -1;
		$this->num_empleado = -1;
		$this->id_contrato = -1;
		$this->tipo_contrato = -1;
		$this->grado_minimo = -1;
		$this->directivo = -1;
		$this->asistencias = -1;
		$this->horas_asesoria = -1;
		$this->horas_tutoria = -1;
		$this->amonestacion = -1;
		$this->usuario = -1;
		$this->fecha_reg = -1;
		$this->estado = -1;
		$this->becaPromep = -1;
		$this->perfilPromep = -1;
		$this->evaluoAlumno = -1;
		$this->evaluoAcademico = -1;
		$this->reconocimiento = -1;
		$this->becaFederal = -1;
		$this->actividadInstitucional = -1;
		$this->cursoCuf = -1;
		$this->validado = -1;
		$this->noHojas = -1;
		$this->fechaInicioReconocimiento = -1;
		$this->fechaTerminoReconocimiento = -1;
		$this->fechaInicioPerfilPromep = -1;
		$this->fechaTerminoPerfilPromep = -1;
		$this->fechaInicioBecaPromep = -1;
		$this->fechaTerminoBecaPromep = -1;
		$this->becaPosgCalidad = -1;
		$this->fechaInicioBecaPosgCalidad = -1;
		$this->fechaTerminoBecaPosgCalidad = -1;
		$this->cursoImpartidoCuf = -1;
		$this->fechaInicioBecaFederal = -1;
		$this->fechaTerminoBecaFederal = -1;
		$this->planta = -1;
		$this->fila = -1;
		$this->butaca = -1;
		$this->supAcademica = -1;
		$this->nivelReconocimiento = -1;
		$this->innovacionEducativa = -1;
		$this->tics = -1;
		$this->egelCeneval = -1;
		$this->becaBecanet = -1;
		$this->liderCuerpoAcademico = -1;
		$this->usuarioRealizo = -1;
		$this->ordenQuery = -1;
	}
	
	/** Métodos set y get para cada propiedad
	*/
	public function setActividadInstitucional($pactividadInstitucional){
		$this->actividadInstitucional=$pactividadInstitucional;
	}
	private function getActividadInstitucional(){
		return $this->actividadInstitucional;
	}
	public function setAmonestacion($pamonestacion){
		$this->amonestacion=$pamonestacion;
	}
	private function getAmonestacion(){
		return $this->amonestacion;
	}
	public function setAsistencias($pasistencias){
		$this->asistencias=$pasistencias;
	}
	private function getAsistencias(){
		return $this->asistencias;
	}
	public function setBecaBecanet($pbecaBecanet){
		$this->becaBecanet=$pbecaBecanet;
	}
	private function getBecaBecanet(){
		return $this->becaBecanet;
	}	
		
	public function setUsuarioRealizo($pUsuarioRealizo){
		$this->usuarioRealizo=$pUsuarioRealizo;
	}
	private function getUsuarioRealizo(){
		return $this->usuarioRealizo;
	}
	public function setOrdenQuery($psOrdenQuery){
		$this->ordenQuery=$psOrdenQuery;
	}
	private function getOrdenQuery(){
		return $this->$psOrdenQuery;
	}


	/**
	* Metodo que genera el filtro que se anexa a la cadena del query
	* en funcion de los atributos setteados
	*
	* @access public
	* @return string la cadena correpondiente al filtro WHERE del query
	*/
	private function getFiltroQuery(){
		$sFiltro="";
		if($this->idActividad!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idActividad=" . $this->idActividad . " ";
		}
		if($this->costo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="costo=" . $this->costo . " ";
		}
		if($this->idActividadEstado!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idActividadEstado=" . $this->idActividadEstado . " ";
		}
		if(strlen(trim($this->idEstado))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idEstado='" . $this->idEstado . "'" ;
		}
		if(strlen(trim($this->estado))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="estado='" . $this->estado . "'" ;
		}
		if($this->porcentaje!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="porcentaje=" . $this->porcentaje . " ";
		}
		if(strlen(trim($this->observacion))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="observacion='" . $this->observacion . "'" ;
		}
		if($this->idBitacora!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idBitacora=" . $this->idBitacora . " ";
		}
		if(strlen(trim($this->fecha))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha='" . $this->fecha . "'" ;
		}
		if($this->idPersona!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idPersona=" . $this->idPersona . " ";
		}
		if(strlen(trim($this->paterno))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="paterno='" . $this->paterno . "'" ;
		}
		if(strlen(trim($this->materno))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="materno='" . $this->materno . "'" ;
		}
		if(strlen(trim($this->nombres))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="nombres='" . $this->nombres . "'" ;
		}
		if(strlen(trim($this->usuario))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="usuario='" . $this->usuario . "'" ;
		}
		if(strlen(trim($this->usuarioBaseDatos))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="usuarioBaseDatos='" . $this->usuarioBaseDatos . "'" ;
		}
		if(strlen(trim($this->direccionIP))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="direccionIP='" . $this->direccionIP . "'" ;
		}
		if(strlen(trim($this->dispositivo))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="dispositivo='" . $this->dispositivo . "'" ;
		}
		return $sFiltro;
	}

	/**
	* Metodo que genera la cadena SQL del query
	* en funcion de los atributos setteados
	*
	* @access public
	* @return string la cadena correpondiente codigo SQL del query de consulta
	*/
	public function getQuery(){
		$sFiltro=$this->getFiltroQuery();
		if(strlen(trim($sFiltro))>0){
			$sFiltro="WHERE " . $sFiltro . " ";
		}
		$sOrdenQuery="";
		if(strlen(trim($this->ordenQuery))>0){
			$sOrdenQuery="ORDER BY " . $this->ordenQuery . " ";
		}
		$sQuery="
		SELECT
			 idActividad
			,costo
			,idActividadEstado
			,idEstado
			,estado
			,porcentaje
			,observacion
			,idBitacora
			,fecha
			,idPersona
			,paterno
			,materno
			,nombres
			,usuario
			,usuarioBaseDatos
			,direccionIP
			,dispositivo
		FROM vtaC_ptoActividad_CostoSugerido_Observacion
		" . $sFiltro . " 
		" . $sOrdenQuery . " ";
		
		return $sQuery;
	}


	/**
	* Metodo que obtiene el arreglo como resultado de la consulta datos y sus filtros
	* @access public
	* @param boolean $bPrimero si se manda a false, entrega todos los registros
	*                          se se manda en true, devuelve el primer registro en forma de vector
	*                           Por defecto esta en true
 	* @return array $arrDatos arreglo de datos
	*/
	function getDatos($bPrimero=true){
		//echo $this->getQuery();

		$objConsulta=new clsConsulta($this->getQuery());
		$objConsulta->FNCQueryEjecutar();

		$arrDatos=$objConsulta->getArregloResultado();
		if($bPrimero){
			$arrDatos=$arrDatos[0;;
		}
		return $arrDatos;
	}
	/**
	* Quita acentos al dato y los convierte en &Xacute;
	* @access private
	* @param String $pDato datos a formatear
	* @return array $arrDatos arreglo de datos
	*/
	private function formateaDatosHTML($pDato){
		$pDato=str_replace("á","&aacute;",$pDato);
		$pDato=str_replace("é","&eacute;",$pDato);
		$pDato=str_replace("í","&iacute;",$pDato);
		$pDato=str_replace("ó","&oacute;",$pDato);
		$pDato=str_replace("ú","&uacute;",$pDato);
		
		$pDato=str_replace("Á","&Aacute;",$pDato);
		$pDato=str_replace("É","&Eacute;",$pDato);
		$pDato=str_replace("Í","&Iacute;",$pDato);
		$pDato=str_replace("Ó","&Oacute;",$pDato);
		$pDato=str_replace("Í","&Uacute;",$pDato);
		
		$pDato=str_replace("ñ","&ntilde;",$pDato);
		$pDato=str_replace("Ñ","&Ntilde;",$pDato);
		
		return $pDato;
	}	/**
	* Metodo que obtiene el json como resultado de la consulta datos y sus filtros
	* @access public
	* @param boolean $bPrimero si se manda a false, entrega todos los registros
	*                          se se manda en true, devuelve el primer registro en forma de vector
	*                           Por defecto esta en true
 	* @return array $arrDatos arreglo de datos
	*/
	public function getDatosJson($bPrimero=true){

		$arrDatos=$this->getDatos($bPrimero);
		if(count($arrDatos) > 0) {
			if($bPrimero){
				foreach($arrDatos as $llaveFila=>$fila){
					$arrDatos[$llaveFila;=utf8_encode($fila);
				}
			}
			else{
				$i=0;
				foreach($arrDatos as $llaveFila=>$fila){
					foreach($fila as $llaveColumna=>$valor){
						$arrDatos[$llaveFila;['accion';="";
						$arrDatos[$llaveFila;[$llaveColumna; = utf8_encode($valor); 
						$i++;
					}
				}
			}		
		}
		return json_encode($arrDatos);
	}
	/**
	* Metodo que ejecuta el SP ptoActividad_CostoSugeridoAgregarModificar
	* 
	* @access public
	* @param bigint idActividad 
	* @param money costo 
	* @param varchar estado 
	* @param varchar direccionIP 
	* @param varchar dispositivo 
	* @param varchar observacion 
	* @param int idPersonaRealizo 
	* @param varchar usuarioRealizo 
	* @return int noError 
	* @return varchar mensaje 
	*/
	public function ptoActividad_CostoSugeridoAgregarModificar(){
		$objProc=new clsProcedimientos("ptoActividad_CostoSugeridoAgregarModificar");
		$objProc->FNCAgregaParametrosEntrada($this->idActividad);
		$objProc->FNCAgregaParametrosEntrada($this->costo);
		$objProc->FNCAgregaParametrosEntrada($this->estado,1);
		$objProc->FNCAgregaParametrosEntrada($this->direccionIP,1);
		$objProc->FNCAgregaParametrosEntrada($this->dispositivo,1);
		$objProc->FNCAgregaParametrosEntrada($this->observacion,1);
		$objProc->FNCAgregaParametrosEntrada($this->idPersona);
		$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo,1);
		$objProc->FNCAgregaParametroSalida("noError","INT");
		$objProc->FNCAgregaParametroSalida("mensaje","VARCHAR",255);


		$arrSalida=$objProc->FNCObtieneResultado();

		if(empty($arrSalida[0;[noError;)){
			$arrSalida[0;[noError;=0;
		}

//		echo $objProc->getCadenaQuery();
		if($arrSalida['noError';>0){
			str_replace('"','',$arrSalida['mensaje';);
			str_replace("'",'',$arrSalida['mensaje';);
		}
		return $arrSalida[0;;
	}


} 
?>