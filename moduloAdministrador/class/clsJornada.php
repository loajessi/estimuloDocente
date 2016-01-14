<?php 
require_once("../../config.php");
require_once("clsTabla.php"); 
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
require_once("clsCombo.php"); 
/*** Clase Generada por CTool 2.2 para el objeto Jornada
* @author nombreAutor
* Fecha:9/03/2015
* @property smallint $idJornada descripcion
* @property varchar $jornada descripcion
* @property boolean $tablaEdicion booleano que define si se agregan los iconos para edicion de un registro en una tabla 
* @property string usuarioRealizo 
* @property string orden agrega un orden especifico en el query 
*/
class clsJornada{
	private $idJornada;
	private $jornada;
	private $tablaEdicion;
	private $usuarioRealizo;
	private $orden;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->idJornada=-1;
		$this->jornada="";
		$this->usuarioRealizo="";
		$this->tablaEdicion=true;
		$this->orden="";
	}
	/**
	*  Metodo que inicializa el atributo idJornada
	*  @access public
	*  @param smallint $pidJornada descripcion.
	*  
	*/
	public function setidJornada($pidJornada){
		$this->idJornada=$pidJornada;
	}
	/**
	*  Metodo que obtiene el atributo idJornada
	*  @access private
	*  @return smallint atributo idJornada
	*  
	*/
	private function getidJornada(){
		return $this->idJornada;
	}
	/**
	*  Metodo que inicializa el atributo jornada
	*  @access public
	*  @param varchar $pjornada descripcion.
	*  
	*/
	public function setjornada($pjornada){
		$this->jornada=$pjornada;
	}
	/**
	*  Metodo que obtiene el atributo jornada
	*  @access private
	*  @return varchar atributo jornada
	*  
	*/
	private function getjornada(){
		return $this->jornada;
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


	/**
	* Metodo que genera el filtro que se anexa a la cadena del query
	* en funcion de los atributos setteados
	*
	* @access public
	* @return string la cadena correpondiente al filtro WHERE del query
	*/
	private function getFiltroQuery(){
		$sFiltro="";
		if($this->idJornada!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idJornada=" . $this->idJornada . " ";
		}
		if(strlen(trim($this->jornada))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="jornada='" . $this->jornada . "'" ;
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
		$sOrden="";
		if(strlen(trim($this->orden))>0){
			$sOrden="ORDER BY " . $this->orden . " ";
		}
		$sQuery="
		SELECT
			 idJornada
			,jornada
		FROM vtaC_estJornada
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
		$objTabla=new clsTabla($this->getQuery(),"cgJornada");
		$objTabla->setMaxRegistrosPagina(10);
		$objTabla->setPagina($piPagina);

		$arrDatos=$objTabla->getArregloTabla();
		//echo $objTabla->getQuery();
		if(empty($arrDatos)){
			$sTabla="No existen registros disponibles.";
		}
		else{
			$sFilas="";
			foreach($arrDatos as $Jornada){
				$sIconoEliminar="
				<a href=\"javascript:JornadaEliminar(" . $Jornada[idJornada] . ")\">
				<img src=\"../../_img/icon_eliminar.gif\" width=\"16\" height=\"16\" title=\"Eliminar\">
				</a>";
				$sIconoEditar="
				<a href=\"javascript:JornadaEditar(" . $Jornada[idJornada] . ")\">
					<img src=\"../../_img/editar.gif\" width=\"16\" height=\"16\"  title=\"Editar\">
				</a>";
				
				$sIconos=$sIconoEliminar . $sIconoEditar; //Contenido de las filas
				$sColumnaIconos="";
				if($this->tablaEdicion){
					$sColumnaIconos="<td>" . $sIconos . "</td>";
					}

				$sFilas.="
				<tr>
					" . $sColumnaIconos . "
					<td>" . $Jornada[idJornada] . "</td>
				</tr>";
			}
			$sColumnaIconos="";
			if($this->tablaEdicion){
				$sColumnaIconos="<th>&nbsp;</td>";
			}
			$sTabla="
			<table>
			<tr>
				" . $sColumnaIconos . "
				<th></th>
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
	public function getCombo($piIdSel){
		$objCombo=new clsCombo($this->getQuery(),"idJornada","jornada",$piIdSel);
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
} 
?>