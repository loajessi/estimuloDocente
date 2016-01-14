<?php 
require_once("../../config.php");
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
/*** Clase Generada por CTool 3.1 para el objeto ms_estimulo
* @author JLA
* Fecha:13/01/2016
 
*/
class clsCg_Ciclos_Estimulo{
	private $id_ciclo;
	private $nombre;
	private $fecha_inicio_reg;
	private $fecha_termino_reg;
	private $fecha_impresion;
	private $fecha_expediente;
	private $fecha_horario_inicio;
	private $fecha_horario_termino;
	private $fecha_evaluar_inicio;
	private $fecha_evaluar_termino;
	private $estado;
	private $fecha_antiguedad;
	private $horas_tc;
	private $horas_mt;
	private $horas_pa;
	private $anio_anti;
	private $usuarioRealizo;
	private $ordenQuery;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->id_ciclo = -1;
		$this->nombre = "";
		$this->fecha_inicio_reg = "";
		$this->fecha_termino_reg = "";
		$this->fecha_impresion = "";
		$this->fecha_expediente = "";
		$this->fecha_horario_inicio = "";
		$this->fecha_horario_termino = "";
		$this->fecha_evaluar_inicio = "";
		$this->fecha_evaluar_termino = "";
		$this->estado = "";
		$this->fecha_antiguedad = "";
		$this->horas_tc = -1;
		$this->horas_mt = -1;
		$this->horas_pa = -1;
		$this->anio_anti = -1;
		$this->usuarioRealizo = "";
		$this->ordenQuery = "";		
	}
	
	/** Métodos set y get para cada propiedad
	*/
	public function setAnio_anti($panio){
		$this->anio_anti=$panio;
	}
	private function getAnio_anti(){
		return $this->anio_anti;
	}
	public function setEstado($pestado){
		$this->estado=$pestado;
	}
	private function getEstado(){
		return $this->estado;
	}
	public function setFecha_antiguedad($pfantiguedad){
		$this->fecha_antiguedad=$pfantiguedad;
	}
	private function getfecha_antiguedad(){
		return $this->fecha_antiguedad;
	}
	public function setfecha_evaluar_inicio($pfecha_evaluar_inicio){
		$this->fecha_evaluar_inicio=$pfecha_evaluar_inicio;
	}
	private function getfecha_evaluar_inicio(){
		return $this->fecha_evaluar_inicio;
	}
	public function setfecha_evaluar_termino($pfecha_evaluar_termino){
		$this->fecha_evaluar_termino=$pfecha_evaluar_termino;
	}
	private function getfecha_evaluar_termino(){
		return $this->fecha_evaluar_termino;
	}
	public function setfecha_expediente($pfecha_expediente){
		$this->fecha_expediente=$pfecha_expediente;
	}
	private function getfecha_expediente(){
		return $this->fecha_expediente;
	}
	public function setfecha_horario_inicio($pfecha_horario_inicio){
		$this->fecha_horario_inicio=$pfecha_horario_inicio;
	}
	private function getfecha_horario_inicio(){
		return $this->fecha_horario_inicio;
	}
	public function setfecha_horario_termino($pfecha_horario_termino){
		$this->fecha_horario_termino=$pfecha_horario_termino;
	}
	private function getfecha_horario_termino(){
		return $this->fecha_horario_termino;
	}
	public function setfecha_impresion($pfecha_impresion){
		$this->fecha_impresion=$pfecha_impresion;
	}
	private function getfecha_impresion(){
		return $this->fecha_impresion;
	}	
	public function setfecha_inicio_reg($pfecha_inicio_reg){
		$this->fecha_inicio_reg=$pfecha_inicio_reg;
	}
	private function getfecha_inicio_reg(){
		return $this->fecha_inicio_reg;
	}
	public function setfecha_termino_reg($pfecha_termino_reg){
		$this->fecha_termino_reg=$pfecha_termino_reg;
	}
	private function getfecha_termino_reg(){
		return $this->fecha_termino_reg;
	}
	public function sethoras_mt($phoras_mt){
		$this->horas_mt=$phoras_mt;
	}
	private function gethoras_mt(){
		return $this->horas_mt;
	}
	public function sethoras_pa($phoras_pa){
		$this->horas_pa=$phoras_pa;
	}
	private function gethoras_pa(){
		return $this->horas_pa;
	}
	public function sethoras_tc($phoras_tc){
		$this->horas_tc=$phoras_tc;
	}
	private function gethoras_tc(){
		return $this->horas_tc;
	}
	public function setid_ciclo($pid_ciclo){
		$this->id_ciclo=$pid_ciclo;
	}
	private function getid_ciclo(){
		return $this->id_ciclo;
	}
	public function setnombre($pnombre){
		$this->nombre=$pnombre;
	}
	private function getnombre(){
		return $this->nombre;
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
		return $this->ordenQuery;
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
		if($this->id_ciclo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="id_ciclo=" . $this->id_ciclo . " ";
		}		
		if(strlen(trim($this->nombre))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="nombre='" . $this->nombre . "'" ;
		}
		if(strlen(trim($this->fecha_inicio_reg))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_inicio_reg='" . $this->fecha_inicio_reg . "'" ;
		}
		if(strlen(trim($this->fecha_termino_reg))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_termino_reg='" . $this->fecha_termino_reg . "'" ;
		}
		if(strlen(trim($this->fecha_impresion))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_impresion='" . $this->fecha_impresion . "'" ;
		}
		if(strlen(trim($this->fecha_expediente))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_expediente='" . $this->fecha_expediente . "'" ;
		}
		if(strlen(trim($this->fecha_horario_inicio))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_horario_inicio='" . $this->fecha_horario_inicio . "'" ;
		}
		if(strlen(trim($this->fecha_horario_termino))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_horario_termino='" . $this->fecha_horario_termino . "'" ;
		}
		if(strlen(trim($this->fecha_evaluar_inicio))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_evaluar_inicio='" . $this->fecha_evaluar_inicio . "'" ;
		}
		if(strlen(trim($this->fecha_evaluar_termino))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_evaluar_termino='" . $this->fecha_evaluar_termino . "'" ;
		}
		if(strlen(trim($this->estado))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="estado='" . $this->estado . "'" ;
		}
		if(strlen(trim($this->fecha_antiguedad))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="fecha_antiguedad='" . $this->fecha_antiguedad . "'" ;
		}
		if($this->horas_tc!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="horas_tc=" . $this->horas_tc . " ";
		}
		if($this->horas_mt!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="horas_mt=" . $this->horas_mt . " ";
		}		
		if($this->horas_pa!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="horas_pa=" . $this->horas_pa . " ";
		}
		if($this->anio_anti!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="anio_anti=" . $this->anio_anti . " ";
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
		SELECT [id_ciclo]
			  ,[nombre]
			  ,[fecha_inicio_reg]
			  ,[fecha_termino_reg]
			  ,[fecha_impresion]
			  ,[fecha_expediente]
			  ,[fecha_horario_inicio]
			  ,[fecha_horario_termino]
			  ,[fecha_evaluar_inicio]
			  ,[fecha_evaluar_termino]
			  ,[estado]
			  ,[fecha_antiguedad]
			  ,[horas_tc]
			  ,[horas_mt]
			  ,[horas_pa]
			  ,[anio_anti]
		  FROM [Cg_ciclos_estimulo]
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
					$arrDatos[$llaveFila]=utf8_encode($fila);
				}
			}
			else{
				$i=0;
				foreach($arrDatos as $llaveFila=>$fila){
					foreach($fila as $llaveColumna=>$valor){
						$arrDatos[$llaveFila]['accion']="";
						$arrDatos[$llaveFila][$llaveColumna] = utf8_encode($valor); 
						$i++;
					}
				}
			}		
		}
		return json_encode($arrDatos);
	}
} 
?>