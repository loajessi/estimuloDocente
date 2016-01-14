<?php 
require_once("../../config.php");
require_once("clsTabla.php"); 
require_once("clsConsulta.php"); 
require_once("clsProcedimientos.php"); 
require_once("clsCombo.php"); 
/*** Clase Generada por CTool 2.2 para el objeto DocenteEstimulo
* @author nombreAutor
* Fecha:4/03/2015
* @property int $idDocenteEstimulo descripcion
* @property int $idPeriodo descripcion
* @property int $idPersona descripcion
* @property int $idContrato descripcion
* @property smallint $idJornada descripcion
* @property int $idJornadaTabulador descripcion
* @property varchar $estado descripcion
* @property varchar $idActaEstado descripcion
* @property varchar $actaEstado descripcion
* @property boolean $tablaEdicion booleano que define si se agregan los iconos para edicion de un registro en una tabla 
* @property string usuarioRealizo 
* @property string orden agrega un orden especifico en el query 
*/
class clsDocenteEstimulo{
	private $idDocenteEstimulo;
	private $idPeriodo;
	private $idPersona;
	private $idContrato;
	private $idJornada;
	private $idJornadaTabulador;
	private $estado;
	private $idActaEstado;
	private $actaEstado;
	private $tablaEdicion;
	private $usuarioRealizo;
	private $orden;
	private $idNivel;


	/**
	* Constructor de la clase
	*/
	public function __construct(){
		$this->idDocenteEstimulo=-1;
		$this->idPeriodo=-1;
		$this->idPersona=-1;
		$this->idContrato=-1;
		$this->idJornada=-1;
		$this->idJornadaTabulador=-1;
		$this->estado="";
		$this->idActaEstado="";
		$this->actaEstado="";
		$this->usuarioRealizo="";
		$this->tablaEdicion=true;
		$this->orden="";
		$this->idNivel=-1;
	}
	/**
	*  Metodo que inicializa el atributo idDocenteEstimulo
	*  @access public
	*  @param int $pidDocenteEstimulo descripcion.
	*  
	*/
	public function setidDocenteEstimulo($pidDocenteEstimulo){
		$this->idDocenteEstimulo=$pidDocenteEstimulo;
	}
	/**
	*  Metodo que obtiene el atributo idDocenteEstimulo
	*  @access private
	*  @return int atributo idDocenteEstimulo
	*  
	*/
	private function getidDocenteEstimulo(){
		return $this->idDocenteEstimulo;
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
	*  Metodo que inicializa el atributo idContrato
	*  @access public
	*  @param int $pidContrato descripcion.
	*  
	*/
	public function setidContrato($pidContrato){
		$this->idContrato=$pidContrato;
	}
	/**
	*  Metodo que obtiene el atributo idContrato
	*  @access private
	*  @return int atributo idContrato
	*  
	*/
	private function getidContrato(){
		return $this->idContrato;
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
	*  Metodo que inicializa el atributo idJornadaTabulador
	*  @access public
	*  @param int $pidJornadaTabulador descripcion.
	*  
	*/
	public function setidJornadaTabulador($pidJornadaTabulador){
		$this->idJornadaTabulador=$pidJornadaTabulador;
	}
	/**
	*  Metodo que obtiene el atributo idJornadaTabulador
	*  @access private
	*  @return int atributo idJornadaTabulador
	*  
	*/
	private function getidJornadaTabulador(){
		return $this->idJornadaTabulador;
	}
	/**
	*  Metodo que inicializa el atributo estado
	*  @access public
	*  @param varchar $pestado descripcion.
	*  
	*/
	public function setestado($pestado){
		$this->estado=$pestado;
	}
	/**
	*  Metodo que obtiene el atributo estado
	*  @access private
	*  @return varchar atributo estado
	*  
	*/
	private function getestado(){
		return $this->estado;
	}
	/**
	*  Metodo que inicializa el atributo idActaEstado
	*  @access public
	*  @param varchar $pidActaEstado descripcion.
	*  
	*/
	public function setidActaEstado($pidActaEstado){
		$this->idActaEstado=$pidActaEstado;
	}
	/**
	*  Metodo que obtiene el atributo idActaEstado
	*  @access private
	*  @return varchar atributo idActaEstado
	*  
	*/
	private function getidActaEstado(){
		return $this->idActaEstado;
	}
	/**
	*  Metodo que inicializa el atributo actaEstado
	*  @access public
	*  @param varchar $pactaEstado descripcion.
	*  
	*/
	public function setactaEstado($pactaEstado){
		$this->actaEstado=$pactaEstado;
	}
	/**
	*  Metodo que obtiene el atributo actaEstado
	*  @access private
	*  @return varchar atributo actaEstado
	*  
	*/
	private function getactaEstado(){
		return $this->actaEstado;
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
	*  Metodo que inicializa el atributo idNivel
	*  @access public
	*  @param int $pidNivel descripcion.
	*  
	*/
	public function setidNivel($pidNivel){
		$this->idNivel=$pidNivel;
	}
	/**
	*  Metodo que obtiene el atributo idNivel
	*  @access private
	*  @return int atributo idNivel
	*  
	*/
	private function getidNivel(){
		return $this->idNivel;
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
		if($this->idPeriodo!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idPeriodo=" . $this->idPeriodo . " ";
		}
		if($this->idPersona!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idPersona=" . $this->idPersona . " ";
		}
		if($this->idContrato!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idContrato=" . $this->idContrato . " ";
		}
		if($this->idJornada!= -1){
			/*if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}*/
			$sFiltro.="c.idJornada=" . $this->idJornada . " ";
		}
		if($this->idNivel!= -1){
			/*if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}*/
			$sFiltro.="idNivel=" . $this->idNivel . " ";
		}
		
		if($this->idJornadaTabulador!= -1){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idJornadaTabulador=" . $this->idJornadaTabulador . " ";
		}
		if(strlen(trim($this->estado))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="estado='" . $this->estado . "'" ;
		}
		if(strlen(trim($this->idActaEstado))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="idActaEstado='" . $this->idActaEstado . "'" ;
		}
		if(strlen(trim($this->actaEstado))>0){
			if(strlen(trim($sFiltro))>0){
				$sFiltro.="AND ";
			}
			$sFiltro.="actaEstado='" . $this->actaEstado . "'" ;
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
			$sFiltro="and " . $sFiltro . " ";
		}
		/*$sOrden="";
		if(strlen(trim($this->orden))>0){
			$sOrden="ORDER BY " . $this->orden . " ";
		}*/
		
		 $sOrden=" ORDER BY NombreCompleto "; 
		
		$sQuery="
		SELECT  distinct a.numeroEmpleado, a.paterno, a.materno, a.nombres,
                (a.paterno+' '+ a.materno+''+a.nombres) as NombreCompleto,
                 b.idDocenteEstimulo, c.idJornada, d.tipoContrato, d.centroCostoPadre, d.centroCosto,
                 d.programaEducativo, d.programaEducativoPosgrado, e.idNivel, e.nivel
        FROM vtaC_estJornada c, vtaC_estDocenteEstimulo_Acta d,
             vtaC_estDocenteEstimulo_Evaluacion_Nivel e,   
             vtaC_estEmpleado a
        inner join vtaC_estDocenteEstimulo b
               on a.idPersona = b.idPersona
        where b.idPeriodo = (select max(idPeriodo) from vtaC_estPeriodo)
              and b.estado = 'A'
              and b.idActaEstado='C'
              and c.idJornada=b.idJornada
              and e.idDocenteEstimulo=d.idDocenteEstimulo
              and d.idDocenteEstimulo=b.idDocenteEstimulo
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
		$objTabla=new clsTabla($this->getQuery(),"cgDocenteEstimulo");
		$objTabla->setMaxRegistrosPagina(10);
		$objTabla->setPagina($piPagina);

		$arrDatos=$objTabla->getArregloTabla();
		//echo $objTabla->getQuery();
		if(empty($arrDatos)){
			$sTabla="No existen registros disponibles.";
		}
		else{
			$sFilas="";
			require_once("clsDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje.php");
			$objValor= new clsDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje();
			foreach($arrDatos as $DocenteEstimulo){
				 //*************obtiene los totales calidad y global********************
				      $objValor->setidDocenteEstimulo($DocenteEstimulo[idDocenteEstimulo]);
				      //$sConsulta=$objValor->getQuery();
				      $arrDat=$objValor->getDatos($bPrimero);
				      if(!empty($arrDat)){
				            $iDocenteEstEvalSecc=$arrDat[0]['iDocenteEstEvalSecc'];
					        $sRubro1=$arrDat[0]['rubro'];
				            $iPuntosR1=$arrDat[0]['puntos'];
					        $sRubro2=$arrDat[1]['rubro'];
				            $iPuntosR2=$arrDat[1]['puntos'];
				      }	
				//****************obtiene los idSeccion de las claves********************
				      require_once("../../moduloComite/class/clsSeccion.php"); 
					  $objClave= new clsSeccion();
					  $arre['clave']=array("RD","RI","RT","RC","B","C");
					  $i=count($arre);
				      for($j=0;$j<6;$j++){
						  $objClave->setclave($arre['clave'][$j]);
	                      $arrDat=$objClave->getDatos($bPrimero);
						  $arre['seccion'][$j]=$arrDat[0]['idSeccion'];
					  }
				//*****************obtiene los puntos de cada seccion********************	  
					  require_once("../../moduloComite/class/clsDocenteEstimulo_Evaluacion_Seccion.php");
				      $objPunto= new clsDocenteEstimulo_Evaluacion_Seccion(); 
				       for($j=0;$j<6;$j++){
						  $objPunto->setidDocenteEstimulo($DocenteEstimulo[idDocenteEstimulo]); 
						  $objPunto->setidSeccion($arre['seccion'][$j]);
						  //$sConsulta=$objPunto->getQuery();
	                      $arrDat=$objPunto->getDatos($bPrimero);
						  $arre['puntos'][$j]=$arrDat[0]['puntos'];
					  }
					   
				$sFilas.="
				<tr>
					<td>" . $DocenteEstimulo[numeroEmpleado] . "</td>
					<td>" . trim($DocenteEstimulo[NombreCompleto]) . "</td>
					<td>" . $DocenteEstimulo[tipoContrato] . "</td>
					<td>" . $DocenteEstimulo[centroCostoPadre] . "</td>
					<td>" . $DocenteEstimulo[centroCosto] . "</td>
					<td>" . $DocenteEstimulo[programaEducativo] . "</td>
					<td>" . $DocenteEstimulo[programaEducativoPosgrado] . "</td>
					<td>" . $arre['puntos'][0] . "</td>
					<td>" . $arre['puntos'][1] . "</td>
					<td>" . $arre['puntos'][2] . "</td>
					<td>" . $arre['puntos'][3] . "</td>
					<td>" . $arre['puntos'][4] . "</td>
					<td>" . $arre['puntos'][5] . "</td>
					<td>" . $iPuntosR2 . "</td>
					<td>" . $iPuntosR1 . "</td>
					<td>" . $DocenteEstimulo[nivel] . "</td>
				</tr>";
			}
			/*$sColumnaIconos="";
			if($this->tablaEdicion){
				$sColumnaIconos="<th>&nbsp;</td>";
			}*/
			$sTabla="
			<table id='tblRegistros'>
			<tr>
				<th>No. de Empleado</th>
				<th>Nombre Completo</th>
				<th>Categor&iacute;a</th>
				<th>Escuela y/o Instituto</th>
				<th>&Aacute;rea Acad&eacute;mica</th>
				<th>Programa Calidad Licenciatura</th>
				<th>Programa Calidad Posgrado</th>
				<th>Docencia</th>
				<th>Investigaci&oacute;n</th>
				<th>Tutor&iacute;as</th>
				<th>Cuerpos Colegiados</th>
				<th>Permanencia</th>
				<th>Dedicaci&oacute;n</th>
				<th>Total Calidad</th>
				<th>Total Global</th>
				<th>Nivel</th>
			</tr>
			" . $sFilas . "
			</table>
			" . $objTabla->getListaPaginas(docenteEstimuloconsultar);
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
	* Metodo que obtiene el codigo HTML de la tabla resultado de la consulta datos y sus filtros
	* @access public
	* @param int $piPagina Pagina de datos que se desea mostra, la primera vez se le pasara -1
	* @return string $sTabla codigo HTML de la tabla de datos
	*/
	public function getTablaCompleta($sQuery){
		//$objTabla=new clsTabla($this->getQuery(),"cgDocenteEstimulo");
		//$objTabla->setMaxRegistrosPagina(10);
		//$objTabla->setPagina($piPagina);
        $objTabla=new clsTabla($sQuery,"cgCompleta");
		$arrDatos=$objTabla->getArregloTabla();
		//echo $objTabla->getQuery();
		if(empty($arrDatos)){
			$sTabla="No existen registros disponibles.";
		}
		else{
			$sFilas="";
			require_once("clsDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje.php");
			$objValor= new clsDocenteEstimulo_Evaluacion_Rubro_Nivel_Puntaje();
			foreach($arrDatos as $DocenteEstimulo){
				 //*************obtiene los totales calidad y global********************
				      $objValor->setidDocenteEstimulo($DocenteEstimulo[idDocenteEstimulo]);
				      //$sConsulta=$objValor->getQuery();
				      $arrDat=$objValor->getDatos($bPrimero);
				      if(!empty($arrDat)){
				            $iDocenteEstEvalSecc=$arrDat[0]['iDocenteEstEvalSecc'];
					        $sRubro1=$arrDat[0]['rubro'];
				            $iPuntosR1=$arrDat[0]['puntos'];
					        $sRubro2=$arrDat[1]['rubro'];
				            $iPuntosR2=$arrDat[1]['puntos'];
				      }	
				//****************obtiene los idSeccion de las claves********************
				      require_once("../../moduloComite/class/clsSeccion.php"); 
					  $objClave= new clsSeccion();
					  $arre['clave']=array("RD","RI","RT","RC","B","C");
					  $i=count($arre);
				      for($j=0;$j<6;$j++){
						  $objClave->setclave($arre['clave'][$j]);
	                      $arrDat=$objClave->getDatos($bPrimero);
						  $arre['seccion'][$j]=$arrDat[0]['idSeccion'];
					  }
				//*****************obtiene los puntos de cada seccion********************	  
					  require_once("../../moduloComite/class/clsDocenteEstimulo_Evaluacion_Seccion.php");
				      $objPunto= new clsDocenteEstimulo_Evaluacion_Seccion(); 
				       for($j=0;$j<6;$j++){
						  $objPunto->setidDocenteEstimulo($DocenteEstimulo[idDocenteEstimulo]); 
						  $objPunto->setidSeccion($arre['seccion'][$j]);
						  //$sConsulta=$objPunto->getQuery();
	                      $arrDat=$objPunto->getDatos($bPrimero);
						  $arre['puntos'][$j]=$arrDat[0]['puntos'];
					  }
					   
				$sFilas.="
				<tr>
					<td>" . $DocenteEstimulo[numeroEmpleado] . "</td>
					<td>" . trim($DocenteEstimulo[NombreCompleto]) . "</td>
					<td>" . $DocenteEstimulo[tipoContrato] . "</td>
					<td>" . $DocenteEstimulo[centroCostoPadre] . "</td>
					<td>" . $DocenteEstimulo[centroCosto] . "</td>
					<td>" . $DocenteEstimulo[programaEducativo] . "</td>
					<td>" . $DocenteEstimulo[programaEducativoPosgrado] . "</td>
					<td>" . $arre['puntos'][0] . "</td>
					<td>" . $arre['puntos'][1] . "</td>
					<td>" . $arre['puntos'][2] . "</td>
					<td>" . $arre['puntos'][3] . "</td>
					<td>" . $arre['puntos'][4] . "</td>
					<td>" . $arre['puntos'][5] . "</td>
					<td>" . $iPuntosR2 . "</td>
					<td>" . $iPuntosR1 . "</td>
					<td>" . $DocenteEstimulo[nivel] . "</td>
				</tr>";
			}
			/*$sColumnaIconos="";
			if($this->tablaEdicion){
				$sColumnaIconos="<th>&nbsp;</td>";
			}*/
			$sTabla="
			<table id='tblTodos' border='1'>
			<tr>
				<th>No. de Empleado</th>
				<th>Nombre Completo</th>
				<th>Categor&iacute;a</th>
				<th>Escuela y/o Instituto</th>
				<th>&Aacute;rea Acad&eacute;mica</th>
				<th>Programa Calidad Licenciatura</th>
				<th>Programa Calidad Posgrado</th>
				<th>Docencia</th>
				<th>Investigaci&oacute;n</th>
				<th>Tutor&iacute;as</th>
				<th>Cuerpos Colegiados</th>
				<th>Permanencia</th>
				<th>Dedicaci&oacute;n</th>
				<th>Total Calidad</th>
				<th>Total Global</th>
				<th>Nivel</th>
			</tr>
			" . $sFilas . "
			</table>
			";
		}
		return $sTabla;
	}
	
	
	
} 
?>