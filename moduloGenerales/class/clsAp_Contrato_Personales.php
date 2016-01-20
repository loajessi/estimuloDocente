<?php 
require_once("../../config.php");
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
/*** Clase Generada por CTool 3.3.3 para el objeto _contrato_personales
* @author nombreAutor
* Fecha:13/01/2016
* @property smallint $ID_CENTRO descripcion
* @property int $id_contrato descripcion
* @property int $id_persona descripcion
* @property int $id_plaza descripcion
* @property char $NUM_CONTRATO descripcion
* @property char $Ap_Materno descripcion
* @property char $Ap_Paterno descripcion
* @property char $nombre descripcion
* @property int $num_empleado descripcion
* @property char $nombre_tipo descripcion
* @property char $categoria descripcion
* @property char $descripcionCategoria descripcion
* @property smallint $id_tiempo descripcion
* @property char $tiempo descripcion
* @property char $CENTRO_COSTOS descripcion
* @property char $nombre_plaza descripcion
* @property smallint $id_nombre_plaza descripcion
* @property char $rfc descripcion
* @property char $curp descripcion
* @property varchar $genero descripcion
* @property char $estado_contrato descripcion
* @property datetime $fecha_alta descripcion
* @property varchar $fecha_contratacion descripcion
* @property int $anio_anti descripcion
* @property int $mes_anti descripcion
* @property int $anio_anti_est descripcion
* @property int $mes_anti_est descripcion
* @property smallint $edad descripcion
* @property datetime $fecha_nacimiento descripcion
* @property string usuarioRealizo 
* @property string ordenQuery agrega un orden especifico en el query 
*/
class cls_contrato_personales{
	private $ID_CENTRO;
	private $id_contrato;
	private $id_persona;
	private $id_plaza;
	private $NUM_CONTRATO;
	private $Ap_Materno;
	private $Ap_Paterno;
	private $nombre;
	private $num_empleado;
	private $nombre_tipo;
	private $categoria;
	private $descripcionCategoria;
	private $id_tiempo;
	private $tiempo;
	private $CENTRO_COSTOS;
	private $nombre_plaza;
	private $id_nombre_plaza;
	private $rfc;
	private $curp;
	private $genero;
	private $estado_contrato;
	private $fecha_alta;
	private $fecha_contratacion;
	private $anio_anti;
	private $mes_anti;
	private $anio_anti_est;
	private $mes_anti_est;
	private $edad;
	private $fecha_nacimiento;
	private $nivel;
	private $estudio;
	private $fechaInicioEvaluacionCiclo;
	private $fechaTerminoEvaluacionCiclo;
	private $bConsultarHorario;
	private $usuarioRealizo;
	private $ordenQuery;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->ID_CENTRO=-1;
		$this->id_contrato=-1;
		$this->id_persona=-1;
		$this->id_plaza=-1;
		$this->NUM_CONTRATO="";
		$this->Ap_Materno="";
		$this->Ap_Paterno="";
		$this->nombre="";
		$this->num_empleado=-1;
		$this->nombre_tipo="";
		$this->categoria="";
		$this->descripcionCategoria="";
		$this->id_tiempo=-1;
		$this->tiempo="";
		$this->CENTRO_COSTOS="";
		$this->nombre_plaza="";
		$this->id_nombre_plaza=-1;
		$this->rfc="";
		$this->curp="";
		$this->genero="";
		$this->estado_contrato="";
		$this->fecha_alta="";
		$this->fecha_contratacion="";
		$this->anio_anti=-1;
		$this->mes_anti=-1;
		$this->anio_anti_est=-1;
		$this->mes_anti_est=-1;
		$this->edad=-1;
		$this->fecha_nacimiento="";
		$this->nivel="";
		$this->estudio="";
		$this->bConsultarHorario = 0;
		$this->usuarioRealizo="";
		$this->ordenQuery="";
	}
	/**
	*  Metodo que inicializa el atributo ID_CENTRO
	*  @access public
	*  @param smallint $pID_CENTRO descripcion.
	*  
	*/
	public function setID_CENTRO($pID_CENTRO){
		$this->ID_CENTRO=$pID_CENTRO;
	}
	/**
	*  Metodo que obtiene el atributo ID_CENTRO
	*  @access private
	*  @return smallint atributo ID_CENTRO
	*  
	*/
	private function getID_CENTRO(){
		return $this->ID_CENTRO;
	}
	/**
	*  Metodo que inicializa el atributo id_contrato
	*  @access public
	*  @param int $pid_contrato descripcion.
	*  
	*/
	public function setid_contrato($pid_contrato){
		$this->id_contrato=$pid_contrato;
	}
	/**
	*  Metodo que obtiene el atributo id_contrato
	*  @access private
	*  @return int atributo id_contrato
	*  
	*/
	private function getid_contrato(){
		return $this->id_contrato;
	}
	/**
	*  Metodo que inicializa el atributo id_persona
	*  @access public
	*  @param int $pid_persona descripcion.
	*  
	*/
	public function setid_persona($pid_persona){
		$this->id_persona=$pid_persona;
	}
	/**
	*  Metodo que obtiene el atributo id_persona
	*  @access private
	*  @return int atributo id_persona
	*  
	*/
	private function getid_persona(){
		return $this->id_persona;
	}
	/**
	*  Metodo que inicializa el atributo id_plaza
	*  @access public
	*  @param int $pid_plaza descripcion.
	*  
	*/
	public function setid_plaza($pid_plaza){
		$this->id_plaza=$pid_plaza;
	}
	/**
	*  Metodo que obtiene el atributo id_plaza
	*  @access private
	*  @return int atributo id_plaza
	*  
	*/
	private function getid_plaza(){
		return $this->id_plaza;
	}
	/**
	*  Metodo que inicializa el atributo NUM_CONTRATO
	*  @access public
	*  @param char $pNUM_CONTRATO descripcion.
	*  
	*/
	public function setNUM_CONTRATO($pNUM_CONTRATO){
		$this->NUM_CONTRATO=$pNUM_CONTRATO;
	}
	/**
	*  Metodo que obtiene el atributo NUM_CONTRATO
	*  @access private
	*  @return char atributo NUM_CONTRATO
	*  
	*/
	private function getNUM_CONTRATO(){
		return $this->NUM_CONTRATO;
	}
	/**
	*  Metodo que inicializa el atributo Ap_Materno
	*  @access public
	*  @param char $pAp_Materno descripcion.
	*  
	*/
	public function setAp_Materno($pAp_Materno){
		$this->Ap_Materno=$pAp_Materno;
	}
	/**
	*  Metodo que obtiene el atributo Ap_Materno
	*  @access private
	*  @return char atributo Ap_Materno
	*  
	*/
	private function getAp_Materno(){
		return $this->Ap_Materno;
	}
	/**
	*  Metodo que inicializa el atributo Ap_Paterno
	*  @access public
	*  @param char $pAp_Paterno descripcion.
	*  
	*/
	public function setAp_Paterno($pAp_Paterno){
		$this->Ap_Paterno=$pAp_Paterno;
	}
	/**
	*  Metodo que obtiene el atributo Ap_Paterno
	*  @access private
	*  @return char atributo Ap_Paterno
	*  
	*/
	private function getAp_Paterno(){
		return $this->Ap_Paterno;
	}
	/**
	*  Metodo que inicializa el atributo nombre
	*  @access public
	*  @param char $pnombre descripcion.
	*  
	*/
	public function setnombre($pnombre){
		$this->nombre=$pnombre;
	}
	/**
	*  Metodo que obtiene el atributo nombre
	*  @access private
	*  @return char atributo nombre
	*  
	*/
	private function getnombre(){
		return $this->nombre;
	}
	/**
	*  Metodo que inicializa el atributo num_empleado
	*  @access public
	*  @param int $pnum_empleado descripcion.
	*  
	*/
	public function setnum_empleado($pnum_empleado){
		$this->num_empleado=$pnum_empleado;
	}
	/**
	*  Metodo que obtiene el atributo num_empleado
	*  @access private
	*  @return int atributo num_empleado
	*  
	*/
	private function getnum_empleado(){
		return $this->num_empleado;
	}
	/**
	*  Metodo que inicializa el atributo nombre_tipo
	*  @access public
	*  @param char $pnombre_tipo descripcion.
	*  
	*/
	public function setnombre_tipo($pnombre_tipo){
		$this->nombre_tipo=$pnombre_tipo;
	}
	/**
	*  Metodo que obtiene el atributo nombre_tipo
	*  @access private
	*  @return char atributo nombre_tipo
	*  
	*/
	private function getnombre_tipo(){
		return $this->nombre_tipo;
	}
	/**
	*  Metodo que inicializa el atributo categoria
	*  @access public
	*  @param char $pcategoria descripcion.
	*  
	*/
	public function setcategoria($pcategoria){
		$this->categoria=$pcategoria;
	}
	/**
	*  Metodo que obtiene el atributo categoria
	*  @access private
	*  @return char atributo categoria
	*  
	*/
	private function getcategoria(){
		return $this->categoria;
	}
	/**
	*  Metodo que inicializa el atributo descripcionCategoria
	*  @access public
	*  @param char $pdescripcionCategoria descripcion.
	*  
	*/
	public function setdescripcionCategoria($pdescripcionCategoria){
		$this->descripcionCategoria=$pdescripcionCategoria;
	}
	/**
	*  Metodo que obtiene el atributo descripcionCategoria
	*  @access private
	*  @return char atributo descripcionCategoria
	*  
	*/
	private function getdescripcionCategoria(){
		return $this->descripcionCategoria;
	}
	/**
	*  Metodo que inicializa el atributo id_tiempo
	*  @access public
	*  @param smallint $pid_tiempo descripcion.
	*  
	*/
	public function setid_tiempo($pid_tiempo){
		$this->id_tiempo=$pid_tiempo;
	}
	/**
	*  Metodo que obtiene el atributo id_tiempo
	*  @access private
	*  @return smallint atributo id_tiempo
	*  
	*/
	private function getid_tiempo(){
		return $this->id_tiempo;
	}
	/**
	*  Metodo que inicializa el atributo tiempo
	*  @access public
	*  @param char $ptiempo descripcion.
	*  
	*/
	public function settiempo($ptiempo){
		$this->tiempo=$ptiempo;
	}
	/**
	*  Metodo que obtiene el atributo tiempo
	*  @access private
	*  @return char atributo tiempo
	*  
	*/
	private function gettiempo(){
		return $this->tiempo;
	}
	/**
	*  Metodo que inicializa el atributo CENTRO_COSTOS
	*  @access public
	*  @param char $pCENTRO_COSTOS descripcion.
	*  
	*/
	public function setCENTRO_COSTOS($pCENTRO_COSTOS){
		$this->CENTRO_COSTOS=$pCENTRO_COSTOS;
	}
	/**
	*  Metodo que obtiene el atributo CENTRO_COSTOS
	*  @access private
	*  @return char atributo CENTRO_COSTOS
	*  
	*/
	private function getCENTRO_COSTOS(){
		return $this->CENTRO_COSTOS;
	}
	/**
	*  Metodo que inicializa el atributo nombre_plaza
	*  @access public
	*  @param char $pnombre_plaza descripcion.
	*  
	*/
	public function setnombre_plaza($pnombre_plaza){
		$this->nombre_plaza=$pnombre_plaza;
	}
	/**
	*  Metodo que obtiene el atributo nombre_plaza
	*  @access private
	*  @return char atributo nombre_plaza
	*  
	*/
	private function getnombre_plaza(){
		return $this->nombre_plaza;
	}
	/**
	*  Metodo que inicializa el atributo id_nombre_plaza
	*  @access public
	*  @param smallint $pid_nombre_plaza descripcion.
	*  
	*/
	public function setid_nombre_plaza($pid_nombre_plaza){
		$this->id_nombre_plaza=$pid_nombre_plaza;
	}
	/**
	*  Metodo que obtiene el atributo id_nombre_plaza
	*  @access private
	*  @return smallint atributo id_nombre_plaza
	*  
	*/
	private function getid_nombre_plaza(){
		return $this->id_nombre_plaza;
	}
	/**
	*  Metodo que inicializa el atributo rfc
	*  @access public
	*  @param char $prfc descripcion.
	*  
	*/
	public function setrfc($prfc){
		$this->rfc=$prfc;
	}
	/**
	*  Metodo que obtiene el atributo rfc
	*  @access private
	*  @return char atributo rfc
	*  
	*/
	private function getrfc(){
		return $this->rfc;
	}
	/**
	*  Metodo que inicializa el atributo curp
	*  @access public
	*  @param char $pcurp descripcion.
	*  
	*/
	public function setcurp($pcurp){
		$this->curp=$pcurp;
	}
	/**
	*  Metodo que obtiene el atributo curp
	*  @access private
	*  @return char atributo curp
	*  
	*/
	private function getcurp(){
		return $this->curp;
	}
	/**
	*  Metodo que inicializa el atributo genero
	*  @access public
	*  @param varchar $pgenero descripcion.
	*  
	*/
	public function setgenero($pgenero){
		$this->genero=$pgenero;
	}
	/**
	*  Metodo que obtiene el atributo genero
	*  @access private
	*  @return varchar atributo genero
	*  
	*/
	private function getgenero(){
		return $this->genero;
	}
	/**
	*  Metodo que inicializa el atributo estado_contrato
	*  @access public
	*  @param char $pestado_contrato descripcion.
	*  
	*/
	public function setestado_contrato($pestado_contrato){
		$this->estado_contrato=$pestado_contrato;
	}
	/**
	*  Metodo que obtiene el atributo estado_contrato
	*  @access private
	*  @return char atributo estado_contrato
	*  
	*/
	private function getestado_contrato(){
		return $this->estado_contrato;
	}
	/**
	*  Metodo que inicializa el atributo fecha_alta
	*  @access public
	*  @param datetime $pfecha_alta descripcion.
	*  
	*/
	public function setfecha_alta($pfecha_alta){
		$this->fecha_alta=$pfecha_alta;
	}
	/**
	*  Metodo que obtiene el atributo fecha_alta
	*  @access private
	*  @return datetime atributo fecha_alta
	*  
	*/
	private function getfecha_alta(){
		return $this->fecha_alta;
	}
	/**
	*  Metodo que inicializa el atributo fecha_contratacion
	*  @access public
	*  @param varchar $pfecha_contratacion descripcion.
	*  
	*/
	public function setfecha_contratacion($pfecha_contratacion){
		$this->fecha_contratacion=$pfecha_contratacion;
	}
	/**
	*  Metodo que obtiene el atributo fecha_contratacion
	*  @access private
	*  @return varchar atributo fecha_contratacion
	*  
	*/
	private function getfecha_contratacion(){
		return $this->fecha_contratacion;
	}
	/**
	*  Metodo que inicializa el atributo anio_anti
	*  @access public
	*  @param int $panio_anti descripcion.
	*  
	*/
	public function setanio_anti($panio_anti){
		$this->anio_anti=$panio_anti;
	}
	/**
	*  Metodo que obtiene el atributo anio_anti
	*  @access private
	*  @return int atributo anio_anti
	*  
	*/
	private function getanio_anti(){
		return $this->anio_anti;
	}
	/**
	*  Metodo que inicializa el atributo mes_anti
	*  @access public
	*  @param int $pmes_anti descripcion.
	*  
	*/
	public function setmes_anti($pmes_anti){
		$this->mes_anti=$pmes_anti;
	}
	/**
	*  Metodo que obtiene el atributo mes_anti
	*  @access private
	*  @return int atributo mes_anti
	*  
	*/
	private function getmes_anti(){
		return $this->mes_anti;
	}
	/**
	*  Metodo que inicializa el atributo anio_anti_est
	*  @access public
	*  @param int $panio_anti_est descripcion.
	*  
	*/
	public function setanio_anti_est($panio_anti_est){
		$this->anio_anti_est=$panio_anti_est;
	}
	/**
	*  Metodo que obtiene el atributo anio_anti_est
	*  @access private
	*  @return int atributo anio_anti_est
	*  
	*/
	private function getanio_anti_est(){
		return $this->anio_anti_est;
	}
	/**
	*  Metodo que inicializa el atributo mes_anti_est
	*  @access public
	*  @param int $pmes_anti_est descripcion.
	*  
	*/
	public function setmes_anti_est($pmes_anti_est){
		$this->mes_anti_est=$pmes_anti_est;
	}
	/**
	*  Metodo que obtiene el atributo mes_anti_est
	*  @access private
	*  @return int atributo mes_anti_est
	*  
	*/
	private function getmes_anti_est(){
		return $this->mes_anti_est;
	}
	/**
	*  Metodo que inicializa el atributo edad
	*  @access public
	*  @param smallint $pedad descripcion.
	*  
	*/
	public function setedad($pedad){
		$this->edad=$pedad;
	}
	/**
	*  Metodo que obtiene el atributo edad
	*  @access private
	*  @return smallint atributo edad
	*  
	*/
	private function getedad(){
		return $this->edad;
	}
	/**
	*  Metodo que inicializa el atributo fecha_nacimiento
	*  @access public
	*  @param datetime $pfecha_nacimiento descripcion.
	*  
	*/
	public function setfecha_nacimiento($pfecha_nacimiento){
		$this->fecha_nacimiento=$pfecha_nacimiento;
	}
	/**
	*  Metodo que obtiene el atributo fecha_nacimiento
	*  @access private
	*  @return datetime atributo fecha_nacimiento
	*  
	*/
	private function getfecha_nacimiento(){
		return $this->fecha_nacimiento;
	}
	
	public function setfechaInicioEvaluacionCiclo($fechaInicioEvaluacionCiclo){
		$this->fechaInicioEvaluacionCiclo=$fechaInicioEvaluacionCiclo;
	}
	private function getfechaInicioEvaluacionCiclo(){
		return $this->fechaInicioEvaluacionCiclo;
	}	
	public function setfechaTerminoEvaluacionCiclo($pfechaTerminoEvaluacionCiclo){
		$this->fechaTerminoEvaluacionCiclo=$pfechaTerminoEvaluacionCiclo;
	}
	private function getfechaTerminoEvaluacionCiclo(){
		return $this->fechaTerminoEvaluacionCiclo;
	}
	public function setnivel($pnivel){
		$this->nivel=$pnivel;
	}
	public function setbConsultarHorario($pbConsultarHorario){
		$this->bConsultarHorario=$pbConsultarHorario;
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
		if($this->ID_CENTRO!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="ID_CENTRO=" . $this->ID_CENTRO . " ";
		}
		if($this->id_contrato!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="id_contrato=" . $this->id_contrato . " ";
		}
		if($this->id_persona!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="id_persona=" . $this->id_persona . " ";
		}
		if($this->id_plaza!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="id_plaza=" . $this->id_plaza . " ";
		}
		if(strlen(trim($this->NUM_CONTRATO))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="NUM_CONTRATO='" . $this->NUM_CONTRATO . "'" ;
		}
		if(strlen(trim($this->Ap_Materno))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="Ap_Materno='" . $this->Ap_Materno . "'" ;
		}
		if(strlen(trim($this->Ap_Paterno))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="Ap_Paterno='" . $this->Ap_Paterno . "'" ;
		}
		if(strlen(trim($this->nombre))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="nombre='" . $this->nombre . "'" ;
		}
		if($this->num_empleado!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="num_empleado=" . $this->num_empleado . " ";
		}
		if(strlen(trim($this->nombre_tipo))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="nombre_tipo='" . $this->nombre_tipo . "'" ;
		}
		if(strlen(trim($this->categoria))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="categoria='" . $this->categoria . "'" ;
		}
		if(strlen(trim($this->descripcionCategoria))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="descripcionCategoria='" . $this->descripcionCategoria . "'" ;
		}
		if($this->id_tiempo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="id_tiempo=" . $this->id_tiempo . " ";
		}
		if(strlen(trim($this->tiempo))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="tiempo='" . $this->tiempo . "'" ;
		}
		if(strlen(trim($this->CENTRO_COSTOS))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="CENTRO_COSTOS='" . $this->CENTRO_COSTOS . "'" ;
		}
		if(strlen(trim($this->nombre_plaza))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="nombre_plaza='" . $this->nombre_plaza . "'" ;
		}
		if($this->id_nombre_plaza!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="id_nombre_plaza=" . $this->id_nombre_plaza . " ";
		}
		if(strlen(trim($this->rfc))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="rfc='" . $this->rfc . "'" ;
		}
		if(strlen(trim($this->curp))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="curp='" . $this->curp . "'" ;
		}
		if(strlen(trim($this->genero))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="genero='" . $this->genero . "'" ;
		}
		if(strlen(trim($this->estado_contrato))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="estado_contrato='" . $this->estado_contrato . "'" ;
		}
		if(strlen(trim($this->fecha_alta))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_alta='" . $this->fecha_alta . "'" ;
		}
		if(strlen(trim($this->fecha_contratacion))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_contratacion='" . $this->fecha_contratacion . "'" ;
		}
		if($this->anio_anti!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="anio_anti=" . $this->anio_anti . " ";
		}
		if($this->mes_anti!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="mes_anti=" . $this->mes_anti . " ";
		}
		if($this->anio_anti_est!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="anio_anti_est=" . $this->anio_anti_est . " ";
		}
		if($this->mes_anti_est!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="mes_anti_est=" . $this->mes_anti_est . " ";
		}
		if($this->edad!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="edad=" . $this->edad . " ";
		}
		if(strlen(trim($this->fecha_nacimiento))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_nacimiento='" . $this->fecha_nacimiento . "'" ;
		}
		return $sFiltro;
	}
	
	/**
	* Metodo que genera la cadena SQL del query del horario del empleado 
	* en funcion de los atributos setteados
	*
	* @access public
	* @return string la cadena correpondiente codigo SQL del query de consulta
	*/
	public function getQueryHorario(){		
		$sQuery="EXECUTE [ofe_sp_horario_empleado_sv] " .$this->num_empleado.", '"
														.$this->fechaInicioEvaluacionCiclo."', '"
														.$this->fechaTerminoEvaluacionCiclo."' ";
		
		return $sQuery;
	}
	
	/**
	* Metodo que genera la cadena SQL del query de grados académicos 
	* en funcion de los atributos setteados
	*
	* @access public
	* @return string la cadena correpondiente codigo SQL del query de consulta
	*/
	public function getQueryGradosAcademicos(){
		$sFiltro=$this->getFiltroQuery();
		if(strlen(trim($sFiltro))>0){
			$sFiltro="WHERE a.id_persona = ".$this->id_persona;
		}
		$sOrdenQuery="";
		if(strlen(trim($this->ordenQuery))>0){
			$sOrdenQuery="ORDER BY " . $this->ordenQuery . " ";
		}
		$sQuery="SELECT c.nivel,d.estudio
				 FROM ap_ms_empleado a, ap_det_academico b, ap_cg_nivel c, ap_cg_estudios d
		" . $sFiltro . " 
					AND a.id_persona=b.id_persona
					AND b.id_nivel=c.id_nivel
					AND b.id_estudio=d.id_estudio
		" . $sOrdenQuery . " ";
		
		return $sQuery;
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
			 ID_CENTRO
			,id_contrato
			,id_persona
			,id_plaza
			,NUM_CONTRATO
			,Ap_Materno
			,Ap_Paterno
			,nombre
			,num_empleado
			,nombre_tipo
			,categoria
			,descripcionCategoria
--			,id_tiempo test
			,tiempo
			,CENTRO_COSTOS
			,nombre_plaza
			,id_nombre_plaza
			,rfc
			,curp
			,genero
			,estado_contrato
			,fecha_alta
			,convert(varchar(10), fecha_alta, 103) as fecha_altaStr
			,fecha_contratacion
			,anio_anti
			,mes_anti
			,anio_anti_est
			,mes_anti_est
			,edad
--			,fecha_nacimiento test
		FROM ap_contrato_personales
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
		
		if($this->nivel == 1) 		
			$objConsulta=new clsConsulta($this->getQueryGradosAcademicos());
		else if($this->bConsultarHorario == 1)
			$objConsulta=new clsConsulta($this->getQueryHorario());
		else
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
				$i_contrato_personalesID = $arrDatos[$llaveFila]['id_contrato_personales'];
				foreach($fila as $llaveColumna=>$valor){
					$arrDatos[$llaveFila]['accion']="<a id='btnEliminar_". $i . "' href=# class='boton icon papelera' title='Eliminar' onclick='_contrato_personalesEliminar(" . $i_contrato_personalesID . ")'></a> <a id='btnEditar_". $i . "' href='#' class='boton icon editar' title='Editar' onclick='_contrato_personalesEditar(" . $i_contrato_personalesID . ")'></a>";
					$arrDatos[$llaveFila][$llaveColumna] = utf8_encode($valor); 
					$i++;
				}
			}
		}
		
		return json_encode($arrDatos);
	}
	
	/**
	* Metodo que ejecuta el SP [ofe_sp_thoras_empleado]
	* 
	* @access public
	* @param bigint idDocenteEstimulo 
	* @param varchar usuarioRealizo 
	* @param varchar direccionIP 
	* @return int noError 
	* @return varchar mensaje 
	*/
	public function totalHorasEmpleado_Calcular(){
		$objProc=new clsProcedimientos("ofe_sp_thoras_empleado");
		$objProc->FNCAgregaParametrosEntrada($this->id_persona);
		$objProc->FNCAgregaParametrosEntrada($this->fechaInicioEvaluacionCiclo,1);
		$objProc->FNCAgregaParametrosEntrada($this->fechaTerminoEvaluacionCiclo,1);
		$objProc->FNCAgregaParametroSalida("total","INT");

		$arrSalida=$objProc->FNCObtieneResultado();

		//echo $objProc->getCadenaQuery();

		return $arrSalida[0];
	}
} 
?>