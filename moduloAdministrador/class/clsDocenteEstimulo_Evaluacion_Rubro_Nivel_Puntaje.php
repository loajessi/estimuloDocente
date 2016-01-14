<?php 
require_once("../../config.php");
require_once("clsTabla.php"); 
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
require_once("clsCombo.php"); 
/*** Clase Generada por CTool 2.2 para el objeto DocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje
* @author nombreAutor
* Fecha:6/03/2015
* @property bigint $idDocenteEstimulo descripcion
* @property int $idTabuladorNivel descripcion
* @property int $idPeriodo descripcion
* @property smallint $idJornada descripcion
* @property varchar $jornada descripcion
* @property tinyint $idNivel descripcion
* @property varchar $nivel descripcion
* @property smallint $idRubro descripcion
* @property varchar $rubro descripcion
* @property float $puntos descripcion
* @property float $puntuacionInicial descripcion
* @property float $puntuacionFinal descripcion
* @property boolean $tablaEdicion booleano que define si se agregan los iconos para edicion de un registro en una tabla 
* @property string usuarioRealizo 
* @property string orden agrega un orden especifico en el query 
*/
class clsDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje{
	private $idDocenteEstimulo;
	private $idTabuladorNivel;
	private $idPeriodo;
	private $idJornada;
	private $jornada;
	private $idNivel;
	private $nivel;
	private $idRubro;
	private $rubro;
	private $puntos;
	private $puntuacionInicial;
	private $puntuacionFinal;
	private $tablaEdicion;
	private $usuarioRealizo;
	private $orden;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->idDocenteEstimulo=-1;
		$this->idTabuladorNivel=-1;
		$this->idPeriodo=-1;
		$this->idJornada=-1;
		$this->jornada="";
		$this->idNivel=-1;
		$this->nivel="";
		$this->idRubro=-1;
		$this->rubro="";
		$this->puntos=-1;
		$this->puntuacionInicial=-1;
		$this->puntuacionFinal=-1;
		$this->usuarioRealizo="";
		$this->tablaEdicion=true;
		$this->orden="";
	}
	/**
	*  Metodo que inicializa el atributo idDocenteEstimulo
	*  @access public
	*  @param bigint $pidDocenteEstimulo descripcion.
	*  
	*/
	public function setidDocenteEstimulo($pidDocenteEstimulo){
		$this->idDocenteEstimulo=$pidDocenteEstimulo;
	}
	/**
	*  Metodo que obtiene el atributo idDocenteEstimulo
	*  @access private
	*  @return bigint atributo idDocenteEstimulo
	*  
	*/
	private function getidDocenteEstimulo(){
		return $this->idDocenteEstimulo;
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
	*  Metodo que inicializa el atributo idRubro
	*  @access public
	*  @param smallint $pidRubro descripcion.
	*  
	*/
	public function setidRubro($pidRubro){
		$this->idRubro=$pidRubro;
	}
	/**
	*  Metodo que obtiene el atributo idRubro
	*  @access private
	*  @return smallint atributo idRubro
	*  
	*/
	private function getidRubro(){
		return $this->idRubro;
	}
	/**
	*  Metodo que inicializa el atributo rubro
	*  @access public
	*  @param varchar $prubro descripcion.
	*  
	*/
	public function setrubro($prubro){
		$this->rubro=$prubro;
	}
	/**
	*  Metodo que obtiene el atributo rubro
	*  @access private
	*  @return varchar atributo rubro
	*  
	*/
	private function getrubro(){
		return $this->rubro;
	}
	/**
	*  Metodo que inicializa el atributo puntos
	*  @access public
	*  @param float $ppuntos descripcion.
	*  
	*/
	public function setpuntos($ppuntos){
		$this->puntos=$ppuntos;
	}
	/**
	*  Metodo que obtiene el atributo puntos
	*  @access private
	*  @return float atributo puntos
	*  
	*/
	private function getpuntos(){
		return $this->puntos;
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


	/**
	* Metodo que genera el filtro que se anexa a la cadena del query
	* en funcion de los atributos setteados
	*
	* @access public
	* @return string la cadena correpondiente al filtro WHERE del query
	*/
	private function getFiltroQuery(){
		$sFiltro="";
		if($this->idDocenteEstimulo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idDocenteEstimulo=" . $this->idDocenteEstimulo . " ";
		}
		if($this->idTabuladorNivel!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idTabuladorNivel=" . $this->idTabuladorNivel . " ";
		}
		if($this->idPeriodo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idPeriodo=" . $this->idPeriodo . " ";
		}
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
		if($this->idRubro!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idRubro=" . $this->idRubro . " ";
		}
		if(strlen(trim($this->rubro))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="rubro='" . $this->rubro . "'" ;
		}
		if($this->puntos!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="puntos=" . $this->puntos . " ";
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
			 idDocenteEstimulo
			,idTabuladorNivel
			,idPeriodo
			,idJornada
			,jornada
			,idNivel
			,nivel
			,idRubro
			,rubro
			,puntos
			,puntuacionInicial
			,puntuacionFinal
		FROM vtaC_estDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje
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
		$objTabla=new clsTabla($this->getQuery(),"cgDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje");
		$objTabla->setMaxRegistrosPagina(10);
		$objTabla->setPagina($piPagina);

		$arrDatos=$objTabla->getArregloTabla();
		//echo $objTabla->getQuery();
		if(empty($arrDatos)){
			$sTabla="No existen registros disponibles.";
		}
		else{
			$sFilas="";
			foreach($arrDatos as $DocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje){
				$sIconoEliminar="
				<a href=\"javascript:DocenteEstimulo_Evaluacion_Rubro_Nivel_PuntajeEliminar(" . $DocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje[idDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje] . ")\">
				<img src=\"../../_img/icon_eliminar.gif\" width=\"16\" height=\"16\" title=\"Eliminar\">
				</a>";
				$sIconoEditar="
				<a href=\"javascript:DocenteEstimulo_Evaluacion_Rubro_Nivel_PuntajeEditar(" . $DocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje[idDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje] . ")\">
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
					<td>" . $DocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje[idDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje] . "</td>
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