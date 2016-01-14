<?php
require("../config.php");
//require_once("clsTabla.php");
//require_once("clsConsulta.php");
require_once("clsProcedimientos.php");
//require_once("clsCombo.php");
/*** Clase Generada por CTool 2.2 para el objeto Responsable
* @author nombreAutor
* Fecha:19/02/2015
* @property int $idResponsable descripcion
* @property int $idPeriodo descripcion
* @property varchar $periodo descripcion
* @property smallint $idTipoResponsabilidad descripcion
* @property varchar $tipoResponsabilidad descripcion
* @property int $idPersona descripcion
* @property varchar $nombre descripcion
* @property varchar $paterno descripcion
* @property varchar $materno descripcion
* @property varchar $genero descripcion
* @property int $numeroEmpleado descripcion
* @property boolean $tablaEdicion booleano que define si se agregan los iconos para edicion de un registro en una tabla
* @property string usuarioRealizo
* @property string orden agrega un orden especifico en el query
*/
class clsAcceso{
	private $usuario;
	private $modulo;
	private $idPersona;
	private $nombre;
	private $paterno;
	private $materno;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->usuario=-1;
		$this->modulo="";
		$this->idPersona=-1;
		$this->nombre="";
		$this->paterno="";
		$this->materno="";
	}
	/**
	*  Metodo que inicializa el atributo usuario
	*  @access public
	*  @param int $pUsuario descripcion.
	*
	*/
	public function setUsuario($pUsuario){
		$this->usuario=$pUsuario;
	}
	/**
	*  Metodo que obtiene el atributo usuario
	*  @access private
	*  @return int atributo usuario
	*
	*/
	private function getUsuario(){
		return $this->usuario;
	}
	/**
	*  Metodo que inicializa el atributo modulo
	*  @access public
	*  @param int $pModulo descripcion.
	*
	*/
	public function setModulo($pModulo){
		$this->modulo=$pModulo;
	}
	/**
	*  Metodo que obtiene el atributo modulo
	*  @access private
	*  @return int atributo modulo
	*
	*/
	private function getModulo(){
		return $this->modulo;
	}
	/**
	*  Metodo que inicializa el atributo nombre
	*  @access public
	*  @param varchar $pnombre descripcion.
	*
	*/

	/**
	*  Metodo que inicializa el atributo idPersona
	*  @access public
	*  @param int $pidPersona descripcion.
	*
	*/
	public function setidPersona($pidPersona){
		$this->idPersona=$pidPersona;
	}
	/**
	*  Metodo que obtiene el atributo idPersona
	*  @access private
	*  @return int atributo idPersona
	*
	*/
	private function getidPersona(){
		return $this->idPersona;
	}
	/**
	*  Metodo que inicializa el atributo nombre
	*  @access public
	*  @param varchar $pnombre descripcion.
	*
	*/
	public function setnombre($pnombre){
		$this->nombre=$pnombre;
	}
	/**
	*  Metodo que obtiene el atributo nombre
	*  @access private
	*  @return varchar atributo nombre
	*
	*/
	private function getnombre(){
		return $this->nombre;
	}
	/**
	*  Metodo que inicializa el atributo paterno
	*  @access public
	*  @param varchar $ppaterno descripcion.
	*
	*/
	public function setpaterno($ppaterno){
		$this->paterno=$ppaterno;
	}
	/**
	*  Metodo que obtiene el atributo paterno
	*  @access private
	*  @return varchar atributo paterno
	*
	*/
	private function getpaterno(){
		return $this->paterno;
	}
	/**
	*  Metodo que inicializa el atributo materno
	*  @access public
	*  @param varchar $pmaterno descripcion.
	*
	*/
	public function setmaterno($pmaterno){
		$this->materno=$pmaterno;
	}
	/**
	*  Metodo que obtiene el atributo materno
	*  @access private
	*  @return varchar atributo materno
	*
	*/
	private function getmaterno(){
		return $this->materno;
	}

	/**
	* Metodo que ejecuta el SP estPersona_Modulo_AccesoValidar
	*
	* @access public
	* @param varchar usuario
	* @param varchar modulo
	* @return int idPersona
	* @return varchar nombre
	* @return varchar paterno
	* @return varchar materno
	* @return int noError
	* @return varchar mensaje
	*/
	public function estPersona_Modulo_AccesoValidar(){
		$objProc=new clsProcedimientos("estPersona_Modulo_AccesoValidar");
		$objProc->FNCAgregaParametrosEntrada($this->usuario,1);
		$objProc->FNCAgregaParametrosEntrada($this->modulo,1);
		$objProc->FNCAgregaParametroSalida("idPersona","INT");
		$objProc->FNCAgregaParametroSalida("nombre","VARCHAR",40);
		$objProc->FNCAgregaParametroSalida("paterno","VARCHAR",30);
		$objProc->FNCAgregaParametroSalida("materno","VARCHAR",30);
		$objProc->FNCAgregaParametroSalida("noError","INT");
		$objProc->FNCAgregaParametroSalida("mensaje","VARCHAR",255);


		$arrSalida=$objProc->FNCObtieneResultado();

		if(empty($arrSalida[0][noError])){
			$arrSalida[0][noError]=0;
		}

		//echo $objProc->getCadenaQuery();

		return $arrSalida[0];
	}


}
?>