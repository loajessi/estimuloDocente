<?php 
require_once("../../config.php");
require_once("clsTabla.php"); 
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
require_once("clsCombo.php"); 
/*** Clase Generada por CTool 2.2 para el objeto Responsable
* @author nombreAutor
* Fecha:23/02/2015
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
class clsResponsable{
	private $idResponsable;
	private $idPeriodo;
	private $periodo;
	private $idTipoResponsabilidad;
	private $tipoResponsabilidad;
	private $idPersona;
	private $nombre;
	private $paterno;
	private $materno;
	private $genero;
	private $numeroEmpleado;
	private $tablaEdicion;
	private $usuarioRealizo;
	private $orden;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->idResponsable=-1;
		$this->idPeriodo=-1;
		$this->periodo="";
		$this->idTipoResponsabilidad=-1;
		$this->tipoResponsabilidad="";
		$this->idPersona=-1;
		$this->nombre="";
		$this->paterno="";
		$this->materno="";
		$this->genero="";
		$this->numeroEmpleado=-1;
		$this->usuarioRealizo="";
		$this->tablaEdicion=true;
		$this->orden="";
	}
	/**
	*  Metodo que inicializa el atributo idResponsable
	*  @access public
	*  @param int $pidResponsable descripcion.
	*  
	*/
	public function setidResponsable($pidResponsable){
		$this->idResponsable=$pidResponsable;
	}
	/**
	*  Metodo que obtiene el atributo idResponsable
	*  @access private
	*  @return int atributo idResponsable
	*  
	*/
	private function getidResponsable(){
		return $this->idResponsable;
	}
	/**
	*  Metodo que inicializa el atributo idPeriodo
	*  @access public
	*  @param int $pidPeriodo descripcion.
	*  
	*/
	public function setidPeriodo($pidPeriodo){
		$this->idPeriodo=$pidPeriodo;
	}
	/**
	*  Metodo que obtiene el atributo idPeriodo
	*  @access private
	*  @return int atributo idPeriodo
	*  
	*/
	private function getidPeriodo(){
		return $this->idPeriodo;
	}
	/**
	*  Metodo que inicializa el atributo periodo
	*  @access public
	*  @param varchar $pperiodo descripcion.
	*  
	*/
	public function setperiodo($pperiodo){
		$this->periodo=$pperiodo;
	}
	/**
	*  Metodo que obtiene el atributo periodo
	*  @access private
	*  @return varchar atributo periodo
	*  
	*/
	private function getperiodo(){
		return $this->periodo;
	}
	/**
	*  Metodo que inicializa el atributo idTipoResponsabilidad
	*  @access public
	*  @param smallint $pidTipoResponsabilidad descripcion.
	*  
	*/
	public function setidTipoResponsabilidad($pidTipoResponsabilidad){
		$this->idTipoResponsabilidad=$pidTipoResponsabilidad;
	}
	/**
	*  Metodo que obtiene el atributo idTipoResponsabilidad
	*  @access private
	*  @return smallint atributo idTipoResponsabilidad
	*  
	*/
	private function getidTipoResponsabilidad(){
		return $this->idTipoResponsabilidad;
	}
	/**
	*  Metodo que inicializa el atributo tipoResponsabilidad
	*  @access public
	*  @param varchar $ptipoResponsabilidad descripcion.
	*  
	*/
	public function settipoResponsabilidad($ptipoResponsabilidad){
		$this->tipoResponsabilidad=$ptipoResponsabilidad;
	}
	/**
	*  Metodo que obtiene el atributo tipoResponsabilidad
	*  @access private
	*  @return varchar atributo tipoResponsabilidad
	*  
	*/
	private function gettipoResponsabilidad(){
		return $this->tipoResponsabilidad;
	}
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
	*  Metodo que inicializa el atributo numeroEmpleado
	*  @access public
	*  @param int $pnumeroEmpleado descripcion.
	*  
	*/
	public function setnumeroEmpleado($pnumeroEmpleado){
		$this->numeroEmpleado=$pnumeroEmpleado;
	}
	/**
	*  Metodo que obtiene el atributo numeroEmpleado
	*  @access private
	*  @return int atributo numeroEmpleado
	*  
	*/
	private function getnumeroEmpleado(){
		return $this->numeroEmpleado;
	}
	public function setUsuarioRealizo($pUsuarioRealizo){
		$this->usuarioRealizo=$pUsuarioRealizo;
	}
	private function getUsuarioRealizo(){
		return $this->usuarioRealizo;
	}
	public function setTablaEdicion($pbTablaEdicion){
		$this->tablaEdicion=$pbTablaEdicion;
	}
	private function getTablaEdicion(){
		return $this->tablaEdicion;
	}
	public function setOrden($psOrden){
		$this->orden=$psOrden;
	}
	private function getOrden(){
		return $this->$psOrden;
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
		if($this->idResponsable!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idResponsable=" . $this->idResponsable . " ";
		}
		if($this->idPeriodo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idPeriodo=" . $this->idPeriodo . " ";
		}
		if(strlen(trim($this->periodo))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="periodo='" . $this->periodo . "'" ;
		}
		if($this->idTipoResponsabilidad!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idTipoResponsabilidad=" . $this->idTipoResponsabilidad . " ";
		}
		if(strlen(trim($this->tipoResponsabilidad))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="tipoResponsabilidad='" . $this->tipoResponsabilidad . "'" ;
		}
		if($this->idPersona!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idPersona=" . $this->idPersona . " ";
		}
		if(strlen(trim($this->nombre))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="nombre='" . $this->nombre . "'" ;
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
		if(strlen(trim($this->genero))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="genero='" . $this->genero . "'" ;
		}
		if($this->numeroEmpleado!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="numeroEmpleado=" . $this->numeroEmpleado . " ";
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
		$sOrden="Order by nombreCompleto";
		if(strlen(trim($this->orden))>0){
			$sOrden="ORDER BY " . $this->orden . " ";
		}
		$sQuery="
		SELECT
			 idResponsable
			,idPeriodo
			,periodo
			,idTipoResponsabilidad
			,tipoResponsabilidad
			,idPersona
			,paterno + ' ' + materno + ' ' + nombre as nombreCompleto
			,genero
			,numeroEmpleado
		FROM vtaC_estResponsable
		" . $sFiltro . " 
		" . $sOrden . " ";
		
		return $sQuery;
	}


	/**
	* Metodo que obtiene el codigo HTML de la tabla resultado de la consulta datos y sus filtros
	* @access public
	* @param int $piPagina Pagina de datos que se desea mostra, la primera vez se le pasara -1
	* @return string $sTabla codigo HTML de la tabla de datos
	*/
	public function getTabla($piPagina){
		$objTabla=new clsTabla($this->getQuery(),"cgResponsable");
		$objTabla->setMaxRegistrosPagina(10);
		$objTabla->setPagina($piPagina);

		$arrDatos=$objTabla->getArregloTabla();
		//echo $objTabla->getQuery();
		if(empty($arrDatos)){
			$sTabla="No existen registros disponibles.";
		}
		else{
			$sFilas="";
			foreach($arrDatos as $Responsable){
				$sIconoEliminar="
				<a href=\"javascript:responsableEliminar(" . $Responsable['idResponsable'] . ")\" class=\"boton icon papelera\" title=\"Eliminar\">Eliminar</a>";
				
				$sIconos=$sIconoEliminar . $sIconoEditar; //Contenido de las filas
				$sColumnaIconos="";
				if($this->tablaEdicion){
					$sColumnaIconos="<td>" . $sIconos . "</td>";
					}

				$sFilas.="
				<tr>
					" . $sColumnaIconos . "
					<td>" . $Responsable['numeroEmpleado'] . "</td>
					<td>" . $Responsable['nombreCompleto'] . "</td>					
				</tr>";
			}
			$sColumnaIconos="";
			if($this->tablaEdicion){
				$sColumnaIconos="<th>&nbsp;</th>";
			}
			$sTabla="
			<table>
			<tr>
				" . $sColumnaIconos . "
				<th>Número de empleado</th>
				<th>Nombre completo</th>				
			</tr>
			" . $sFilas . "
			</table>
			" . $objTabla->getListaPaginas(varMetodo);
		}
		return $sTabla;
	}
	/**
	* Metodo que obtiene el codigo HTML de combo basado en la consulta datos y sus filtros
	* @access public'
	* @param int $piIdSel id del elemento seleccionado, por defecto esta en -1 
	* @return string codigo HTML del combo de datos
	*/
	public function getCombo($piIdSel=-1){
		$objCombo=new clsCombo($this->getQuery(),$varId,$varMostrar,$piIdSel);
		return $objCombo->getListacombo();
	}
	/**
	* Metodo que obtiene el codigo json  para el listado de combo basado en la consulta datos y sus filtros
	* @access public'
	* @param int $piIdSel id del elemento seleccionado, por defecto esta en -1 
	* @return string codigo json del listado para el combo de datos
	*/
	public function getListadoCombo($piIdSel=-1){
		$objCombo=new clsCombo($this->getQuery(),$varId,$varMostrar,$piIdSel);
		return $objCombo->getListadoJson();
	}
	/**
	* Metodo que obtiene el arreglo como resultado de la consulta datos y sus filtros
	* @access public'
	* @param boolean $bPrimero si se manda a false, entrega todos los registros
	*                          se se manda en true, devuelve el primer registro en forma de vector
t*                           Por defecto esta en true
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
	* Metodo que ejecuta el SP estResponsableAgregarModificar
	* 
	* @access public
	* @param int idPeriodo 
	* @param int idPersona 
	* @param varchar tipoResponsabilidad 
	* @param varchar usuarioRealizo 
	* @return int idResponsable 
	* @return int noError 
	* @return varchar mensaje 
	*/
	public function estResponsableAgregarModificar(){
		$objProc=new clsProcedimientos("estResponsableAgregarModificar");
		$objProc->FNCAgregaParametrosEntrada($this->idPeriodo);
		$objProc->FNCAgregaParametrosEntrada($this->idPersona);
		$objProc->FNCAgregaParametrosEntrada($this->tipoResponsabilidad,1);
		$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo,1);
		$objProc->FNCAgregaParametroSalida("idResponsable","INT");
		$objProc->FNCAgregaParametroSalida("noError","INT");
		$objProc->FNCAgregaParametroSalida("mensaje","VARCHAR",255);


		$arrSalida=$objProc->FNCObtieneResultado();

		if(empty($arrSalida[0][noError])){
			$arrSalida[0][noError]=0;
		}

//		echo $objProc->getCadenaQuery();

		return $arrSalida[0];
	}


	/**
	* Metodo que ejecuta el SP estResponsableEliminar
	* 
	* @access public
	* @param int idResponsable 
	* @param varchar usuarioRealizo 
	* @return int noError 
	* @return varchar mensaje 
	*/
	public function estResponsableEliminar(){
		$objProc=new clsProcedimientos("estResponsableEliminar");
		$objProc->FNCAgregaParametrosEntrada($this->idResponsable);
		$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo,1);
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