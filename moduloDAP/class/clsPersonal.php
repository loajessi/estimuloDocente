<?php 
require_once("../../config.php");
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
/*** Clase Generada por CTool 3.3.3 para el objeto Personal
* @author nombreAutor
* Fecha:14/01/2016
* @property int $idPersonal descripcion
* @property int $idEstimulo descripcion
* @property varchar $gradoAcademico descripcion
* @property varchar $puestoDrectivo descripcion
* @property float $asistencias descripcion
* @property datetime $fechaRegistro descripcion
* @property string usuarioRealizo 
* @property string ordenQuery agrega un orden especifico en el query 
*/
class clsPersonal{
	private $idPersonal;
	private $idEstimulo;
	private $gradoAcademico;
	private $puestoDrectivo;
	private $asistencias;
	private $fechaRegistro;
	private $usuarioRealizo;
	private $ordenQuery;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->idPersonal=-1;
		$this->idEstimulo=-1;
		$this->gradoAcademico="";
		$this->puestoDrectivo="";
		$this->asistencias=-1;
		$this->fechaRegistro="";
		$this->usuarioRealizo="";
		$this->ordenQuery="";
	}
	/**
	*  Metodo que inicializa el atributo idPersonal
	*  @access public
	*  @param int $pidPersonal descripcion.
	*  
	*/
	public function setidPersonal($pidPersonal){
		$this->idPersonal=$pidPersonal;
	}
	/**
	*  Metodo que obtiene el atributo idPersonal
	*  @access private
	*  @return int atributo idPersonal
	*  
	*/
	private function getidPersonal(){
		return $this->idPersonal;
	}
	/**
	*  Metodo que inicializa el atributo idEstimulo
	*  @access public
	*  @param int $pidEstimulo descripcion.
	*  
	*/
	public function setidEstimulo($pidEstimulo){
		$this->idEstimulo=$pidEstimulo;
	}
	/**
	*  Metodo que obtiene el atributo idEstimulo
	*  @access private
	*  @return int atributo idEstimulo
	*  
	*/
	private function getidEstimulo(){
		return $this->idEstimulo;
	}
	/**
	*  Metodo que inicializa el atributo gradoAcademico
	*  @access public
	*  @param varchar $pgradoAcademico descripcion.
	*  
	*/
	public function setgradoAcademico($pgradoAcademico){
		$this->gradoAcademico=$pgradoAcademico;
	}
	/**
	*  Metodo que obtiene el atributo gradoAcademico
	*  @access private
	*  @return varchar atributo gradoAcademico
	*  
	*/
	private function getgradoAcademico(){
		return $this->gradoAcademico;
	}
	/**
	*  Metodo que inicializa el atributo puestoDrectivo
	*  @access public
	*  @param varchar $ppuestoDrectivo descripcion.
	*  
	*/
	public function setpuestoDrectivo($ppuestoDrectivo){
		$this->puestoDrectivo=$ppuestoDrectivo;
	}
	/**
	*  Metodo que obtiene el atributo puestoDrectivo
	*  @access private
	*  @return varchar atributo puestoDrectivo
	*  
	*/
	private function getpuestoDrectivo(){
		return $this->puestoDrectivo;
	}
	/**
	*  Metodo que inicializa el atributo asistencias
	*  @access public
	*  @param float $pasistencias descripcion.
	*  
	*/
	public function setasistencias($pasistencias){
		$this->asistencias=$pasistencias;
	}
	/**
	*  Metodo que obtiene el atributo asistencias
	*  @access private
	*  @return float atributo asistencias
	*  
	*/
	private function getasistencias(){
		return $this->asistencias;
	}
	/**
	*  Metodo que inicializa el atributo fechaRegistro
	*  @access public
	*  @param datetime $pfechaRegistro descripcion.
	*  
	*/
	public function setfechaRegistro($pfechaRegistro){
		$this->fechaRegistro=$pfechaRegistro;
	}
	/**
	*  Metodo que obtiene el atributo fechaRegistro
	*  @access private
	*  @return datetime atributo fechaRegistro
	*  
	*/
	private function getfechaRegistro(){
		return $this->fechaRegistro;
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
		if($this->idPersonal!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idPersonal=" . $this->idPersonal . " ";
		}
		if($this->idEstimulo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idEstimulo=" . $this->idEstimulo . " ";
		}
		if(strlen(trim($this->gradoAcademico))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="gradoAcademico='" . $this->gradoAcademico . "'" ;
		}
		if(strlen(trim($this->puestoDrectivo))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="puestoDrectivo='" . $this->puestoDrectivo . "'" ;
		}
		if($this->asistencias!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="asistencias=" . $this->asistencias . " ";
		}
		if(strlen(trim($this->fechaRegistro))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fechaRegistro='" . $this->fechaRegistro . "'" ;
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
			 idPersonal
			,per.idEstimulo
			,per.gradoAcademico
			,per.puestoDrectivo
			,per.asistencias
			,per.fechaRegistro
			,est.num_empleado
			,est.tipo_contrato
			,est.id_estimulo
		FROM vtaC_estPersonal per 
		RIGHT JOIN ms_estimulo est 
		ON per.idEstimulo = est.id_estimulo
		where id_ciclo = 11
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
			$arrDatos=$arrDatos[0];
		}
		return $arrDatos;
	}
	/**
	* Metodo que obtiene el json como resultado de la consulta datos y sus filtros
	* @access public
	* @param boolean $bPrimero si se manda a false, entrega todos los registros
	*                          se se manda en true, devuelve el primer registro en forma de vector
	*                           Por defecto esta en true
 	* @return array $arrDatos arreglo de datos
	*/
	public function getDatosJson($bPrimero=true){

		$arrDatos=$this->getDatos($bPrimero);
		
		if(empty($arrDatos)) return "null";
		if($bPrimero){
			foreach($arrDatos as $llaveFila=>$fila){
				$arrDatos[$llaveFila]=utf8_encode($fila);
			}
		}
		else{
			$i=0;
			foreach($arrDatos as $llaveFila=>$fila){
				$iPersonalID = $arrDatos[$llaveFila]['idPersonal'];
				$iNoEmpleado = $arrDatos[$llaveFila]['num_empleado'];
				foreach($fila as $llaveColumna=>$valor){
					$arrDatos[$llaveFila]['accion']="<button class='btnInfoEmpleado' id='btngVerInfo' title='Ver informaci&oacute;n del empleado'
						 onclick='verInformacionEmpleado(".$iNoEmpleado.")'; >Ver informaci&oacute;n del empleado</button>";
					$arrDatos[$llaveFila][$llaveColumna] = utf8_encode($valor); 
					$i++;
				}
			}
		}
		
		return json_encode($arrDatos);
	}
	/**
	* Metodo que ejecuta el SP estPersonalAgregarModificar
	* 
	* @access public
	* @param int idEstimulo 
	* @param varchar gradoAcademico 
	* @param varchar puestoDrectivo 
	* @param float asistencias 
	* @param datetime fechaRegistro 
	* @param varchar usuarioRealizo 
	* @return int idPersonal 
	* @return int noError 
	* @return varchar mensaje 
	*/
	public function estPersonalAgregarModificar(){
		$objProc=new clsProcedimientos("estPersonalAgregarModificar");
		$objProc->FNCAgregaParametrosEntrada($this->idEstimulo);
		$objProc->FNCAgregaParametrosEntrada($this->gradoAcademico,1);
		$objProc->FNCAgregaParametrosEntrada($this->puestoDrectivo,1);
		$objProc->FNCAgregaParametrosEntrada($this->asistencias);
		$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo,1);
		if($this->idPersonal != -1)
			$objProc->FNCAgregaParametrosEntrada($this->idPersonal);		
		else
			$objProc->FNCAgregaParametroSalida("idPersonal","INT");
		$objProc->FNCAgregaParametroSalida("noError","INT");
		$objProc->FNCAgregaParametroSalida("mensaje","VARCHAR",255);


		$arrSalida=$objProc->FNCObtieneResultado();

		if(empty($arrSalida[0][noError])){
			$arrSalida[0][noError]=0;
		}

		//echo $objProc->getCadenaQuery();
		if($arrSalida['noError']>0){
			str_replace('"','',$arrSalida['mensaje']);
			str_replace("'",'',$arrSalida['mensaje']);
		}
		return $arrSalida[0];
	}


	/**
	* Metodo que ejecuta el SP estPersonalEliminar
	* 
	* @access public
	* @param int idPersonal 
	* @param varchar usuarioRealizo 
	* @return int noError 
	* @return varchar mensaje 
	*/
	public function estPersonalEliminar(){
		$objProc=new clsProcedimientos("estPersonalEliminar");
		$objProc->FNCAgregaParametrosEntrada($this->idPersonal);
		$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo,1);
		$objProc->FNCAgregaParametroSalida("noError","INT");
		$objProc->FNCAgregaParametroSalida("mensaje","VARCHAR",255);


		$arrSalida=$objProc->FNCObtieneResultado();

		if(empty($arrSalida[0][noError])){
			$arrSalida[0][noError]=0;
		}

		//echo $objProc->getCadenaQuery();
		if($arrSalida['noError']>0){
			str_replace('"','',$arrSalida['mensaje']);
			str_replace("'",'',$arrSalida['mensaje']);
		}
		return $arrSalida[0];
	}


} 
?>