<?php 
require_once("../../config.php");
require_once("clsTabla.php"); 
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
require_once("clsCombo.php"); 
/*** Clase Generada por CTool 2.2 para el objeto Tabulador_Evaluacion_Nivel
* @author nombreAutor
* Fecha:20/02/2015
* @property int $idTabuladorNivel descripcion
* @property smallint $idTabulador descripcion
* @property tinyint $idNivel descripcion
* @property varchar $nivel descripcion
* @property float $puntuacionInicial descripcion
* @property float $puntuacionFinal descripcion
* @property boolean $tablaEdicion booleano que define si se agregan los iconos para edicion de un registro en una tabla 
* @property string usuarioRealizo 
* @property string orden agrega un orden especifico en el query 
*/
class clsTabulador_Evaluacion_Nivel{
	private $idTabuladorNivel;
	private $idTabulador;
	private $idNivel;
	private $nivel;
	private $puntuacionInicial;
	private $puntuacionFinal;
	private $tablaEdicion;
	private $usuarioRealizo;
	private $orden;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->idTabuladorNivel=-1;
		$this->idTabulador=-1;
		$this->idNivel=-1;
		$this->nivel="";
		$this->puntuacionInicial=-1;
		$this->puntuacionFinal=-1;
		$this->usuarioRealizo="";
		$this->tablaEdicion=true;
		$this->orden="";
	}
	/**
	*  Metodo que inicializa el atributo idTabuladorNivel
	*  @access public
	*  @param int $pidTabuladorNivel descripcion.
	*  
	*/
	public function setidTabuladorNivel($pidTabuladorNivel){
		$this->idTabuladorNivel=$pidTabuladorNivel;
	}
	/**
	*  Metodo que obtiene el atributo idTabuladorNivel
	*  @access private
	*  @return int atributo idTabuladorNivel
	*  
	*/
	private function getidTabuladorNivel(){
		return $this->idTabuladorNivel;
	}
	/**
	*  Metodo que inicializa el atributo idTabulador
	*  @access public
	*  @param smallint $pidTabulador descripcion.
	*  
	*/
	public function setidTabulador($pidTabulador){
		$this->idTabulador=$pidTabulador;
	}
	/**
	*  Metodo que obtiene el atributo idTabulador
	*  @access private
	*  @return smallint atributo idTabulador
	*  
	*/
	private function getidTabulador(){
		return $this->idTabulador;
	}
	/**
	*  Metodo que inicializa el atributo idNivel
	*  @access public
	*  @param tinyint $pidNivel descripcion.
	*  
	*/
	public function setidNivel($pidNivel){
		$this->idNivel=$pidNivel;
	}
	/**
	*  Metodo que obtiene el atributo idNivel
	*  @access private
	*  @return tinyint atributo idNivel
	*  
	*/
	private function getidNivel(){
		return $this->idNivel;
	}
	/**
	*  Metodo que inicializa el atributo nivel
	*  @access public
	*  @param varchar $pnivel descripcion.
	*  
	*/
	public function setnivel($pnivel){
		$this->nivel=$pnivel;
	}
	/**
	*  Metodo que obtiene el atributo nivel
	*  @access private
	*  @return varchar atributo nivel
	*  
	*/
	private function getnivel(){
		return $this->nivel;
	}
	/**
	*  Metodo que inicializa el atributo puntuacionInicial
	*  @access public
	*  @param float $ppuntuacionInicial descripcion.
	*  
	*/
	public function setpuntuacionInicial($ppuntuacionInicial){
		$this->puntuacionInicial=$ppuntuacionInicial;
	}
	/**
	*  Metodo que obtiene el atributo puntuacionInicial
	*  @access private
	*  @return float atributo puntuacionInicial
	*  
	*/
	private function getpuntuacionInicial(){
		return $this->puntuacionInicial;
	}
	/**
	*  Metodo que inicializa el atributo puntuacionFinal
	*  @access public
	*  @param float $ppuntuacionFinal descripcion.
	*  
	*/
	public function setpuntuacionFinal($ppuntuacionFinal){
		$this->puntuacionFinal=$ppuntuacionFinal;
	}
	/**
	*  Metodo que obtiene el atributo puntuacionFinal
	*  @access private
	*  @return float atributo puntuacionFinal
	*  
	*/
	private function getpuntuacionFinal(){
		return $this->puntuacionFinal;
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
		if($this->idTabuladorNivel!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idTabuladorNivel=" . $this->idTabuladorNivel . " ";
		}
		if($this->idTabulador!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idTabulador=" . $this->idTabulador . " ";
		}
		if($this->idNivel!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idNivel=" . $this->idNivel . " ";
		}
		if(strlen(trim($this->nivel))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="nivel='" . $this->nivel . "'" ;
		}
		if($this->puntuacionInicial!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="puntuacionInicial=" . $this->puntuacionInicial . " ";
		}
		if($this->puntuacionFinal!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="puntuacionFinal=" . $this->puntuacionFinal . " ";
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
			 idTabuladorNivel
			,idTabulador
			,idNivel
			,nivel
			,puntuacionInicial
			,puntuacionFinal
		FROM vtaC_estTabulador_Evaluacion_Nivel
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
		$objTabla=new clsTabla($this->getQuery(),"cgTabulador_Evaluacion_Nivel");
		$objTabla->setMaxRegistrosPagina(10);
		$objTabla->setPagina($piPagina);

		$arrDatos=$objTabla->getArregloTabla();
		//echo $objTabla->getQuery();
		if(empty($arrDatos)){
			$sTabla="No existen registros disponibles.";
		}
		else{
			$sFilas="";
			foreach($arrDatos as $Tabulador_Evaluacion_Nivel){
				$sIconoEliminar="
				<a href=\"javascript:Tabulador_Evaluacion_NivelEliminar(" . $Tabulador_Evaluacion_Nivel['idTabuladorNivel'] . ")\" class=\"boton icon papelera\" title=\"Eliminar\">Eliminar</a>";
				$sIconoEditar="<a href=\"javascript:Tabulador_Evaluacion_NivelEditar(" . $Tabulador_Evaluacion_Nivel['idTabuladorNivel'] . ")\" class=\"boton icon editar\" title=\"Editar\">Editar</a>";
				
				$sIconos=$sIconoEliminar . $sIconoEditar; //Contenido de las filas
				$sColumnaIconos="";
				if($this->tablaEdicion){
					$sColumnaIconos="<td>" . $sIconos . "</td>";
					}

				$sFilas.="
				<tr>
					" . $sColumnaIconos . "
					<td>" . $Tabulador_Evaluacion_Nivel['nivel'] . "</td>
					<td>" . $Tabulador_Evaluacion_Nivel['puntuacionInicial'] . "</td>
					<td>" . $Tabulador_Evaluacion_Nivel['puntuacionFinal'] . "</td>
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
				<th>Nivel de estímulo</th>
				<th>Rango inicial</th>
				<th>Rango final</th>				
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
} 
?>