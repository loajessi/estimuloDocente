<?php
	require_once("../../config.php");
	require_once("clsConsulta.php");
	require_once("clsProcedimientos.php");

	/*** Clase Generada por CTool 3.3.3 para el objeto SupAcademica
	 * @author nombreAutor
	 * Fecha:15/01/2016
	 * @property int $idSupAcademica             descripcion
	 * @property int $idEstimulo                 descripcion
	 * @property int $idPersona                  descripcion
	 * @property int $numeroEmpleado             descripcion
	 * @property varchar $nombreCompleto         descripcion
	 * @property varchar $tipoContrato           descripcion
	 * @property datetime $fechaRegistroEstimulo descripcion
	 * @property varchar $certificacionIngles    descripcion
	 * @property tinyint $cursoCompetencia       descripcion
	 * @property datetime $fechaRegistro         descripcion
	 * @property string usuarioRealizo
	 * @property string ordenQuery               agrega un orden especifico en el query
	 */
	class clsSupAcademica {
		private $idSupAcademica;
		private $idEstimulo;
		private $idPersona;
		private $numeroEmpleado;
		private $nombreCompleto;
		private $tipoContrato;
		private $fechaRegistroEstimulo;
		private $certificacionIngles;
		private $cursoCompetencia;
		private $fechaRegistro;
		private $usuarioRealizo;
		private $ordenQuery;


		/**
		 * Constructor de la clase
		 */
		public function __construct() {
			$this->idSupAcademica = -1;
			$this->idEstimulo = -1;
			$this->idPersona = -1;
			$this->numeroEmpleado = -1;
			$this->nombreCompleto = "";
			$this->tipoContrato = "";
			$this->fechaRegistroEstimulo = "";
			$this->certificacionIngles = "";
			$this->cursoCompetencia = -1;
			$this->fechaRegistro = "";
			$this->usuarioRealizo = "";
			$this->ordenQuery = "";
		}

		/**
		 *  Metodo que inicializa el atributo idSupAcademica
		 * @access public
		 *
		 * @param int $pidSupAcademica descripcion.
		 *
		 */
		public function setidSupAcademica($pidSupAcademica) {
			$this->idSupAcademica = $pidSupAcademica;
		}

		/**
		 *  Metodo que obtiene el atributo idSupAcademica
		 * @access private
		 * @return int atributo idSupAcademica
		 *
		 */
		private function getidSupAcademica() {
			return $this->idSupAcademica;
		}

		/**
		 *  Metodo que inicializa el atributo idEstimulo
		 * @access public
		 *
		 * @param int $pidEstimulo descripcion.
		 *
		 */
		public function setidEstimulo($pidEstimulo) {
			$this->idEstimulo = $pidEstimulo;
		}

		/**
		 *  Metodo que obtiene el atributo idEstimulo
		 * @access private
		 * @return int atributo idEstimulo
		 *
		 */
		private function getidEstimulo() {
			return $this->idEstimulo;
		}

		/**
		 *  Metodo que inicializa el atributo idPersona
		 * @access public
		 *
		 * @param int $pidPersona descripcion.
		 *
		 */
		public function setidPersona($pidPersona) {
			$this->idPersona = $pidPersona;
		}

		/**
		 *  Metodo que obtiene el atributo idPersona
		 * @access private
		 * @return int atributo idPersona
		 *
		 */
		private function getidPersona() {
			return $this->idPersona;
		}

		/**
		 *  Metodo que inicializa el atributo numeroEmpleado
		 * @access public
		 *
		 * @param int $pnumeroEmpleado descripcion.
		 *
		 */
		public function setnumeroEmpleado($pnumeroEmpleado) {
			$this->numeroEmpleado = $pnumeroEmpleado;
		}

		/**
		 *  Metodo que obtiene el atributo numeroEmpleado
		 * @access private
		 * @return int atributo numeroEmpleado
		 *
		 */
		private function getnumeroEmpleado() {
			return $this->numeroEmpleado;
		}

		/**
		 *  Metodo que inicializa el atributo nombreCompleto
		 * @access public
		 *
		 * @param varchar $pnombreCompleto descripcion.
		 *
		 */
		public function setnombreCompleto($pnombreCompleto) {
			$this->nombreCompleto = $pnombreCompleto;
		}

		/**
		 *  Metodo que obtiene el atributo nombreCompleto
		 * @access private
		 * @return varchar atributo nombreCompleto
		 *
		 */
		private function getnombreCompleto() {
			return $this->nombreCompleto;
		}

		/**
		 *  Metodo que inicializa el atributo tipoContrato
		 * @access public
		 *
		 * @param varchar $ptipoContrato descripcion.
		 *
		 */
		public function settipoContrato($ptipoContrato) {
			$this->tipoContrato = $ptipoContrato;
		}

		/**
		 *  Metodo que obtiene el atributo tipoContrato
		 * @access private
		 * @return varchar atributo tipoContrato
		 *
		 */
		private function gettipoContrato() {
			return $this->tipoContrato;
		}

		/**
		 *  Metodo que inicializa el atributo fechaRegistroEstimulo
		 * @access public
		 *
		 * @param datetime $pfechaRegistroEstimulo descripcion.
		 *
		 */
		public function setfechaRegistroEstimulo($pfechaRegistroEstimulo) {
			$this->fechaRegistroEstimulo = $pfechaRegistroEstimulo;
		}

		/**
		 *  Metodo que obtiene el atributo fechaRegistroEstimulo
		 * @access private
		 * @return datetime atributo fechaRegistroEstimulo
		 *
		 */
		private function getfechaRegistroEstimulo() {
			return $this->fechaRegistroEstimulo;
		}

		/**
		 *  Metodo que inicializa el atributo certificacionIngles
		 * @access public
		 *
		 * @param varchar $pcertificacionIngles descripcion.
		 *
		 */
		public function setcertificacionIngles($pcertificacionIngles) {
			$this->certificacionIngles = $pcertificacionIngles;
		}

		/**
		 *  Metodo que obtiene el atributo certificacionIngles
		 * @access private
		 * @return varchar atributo certificacionIngles
		 *
		 */
		private function getcertificacionIngles() {
			return $this->certificacionIngles;
		}

		/**
		 *  Metodo que inicializa el atributo cursoCompetencia
		 * @access public
		 *
		 * @param tinyint $pcursoCompetencia descripcion.
		 *
		 */
		public function setcursoCompetencia($pcursoCompetencia) {
			$this->cursoCompetencia = $pcursoCompetencia;
		}

		/**
		 *  Metodo que obtiene el atributo cursoCompetencia
		 * @access private
		 * @return tinyint atributo cursoCompetencia
		 *
		 */
		private function getcursoCompetencia() {
			return $this->cursoCompetencia;
		}

		/**
		 *  Metodo que inicializa el atributo fechaRegistro
		 * @access public
		 *
		 * @param datetime $pfechaRegistro descripcion.
		 *
		 */
		public function setfechaRegistro($pfechaRegistro) {
			$this->fechaRegistro = $pfechaRegistro;
		}

		/**
		 *  Metodo que obtiene el atributo fechaRegistro
		 * @access private
		 * @return datetime atributo fechaRegistro
		 *
		 */
		private function getfechaRegistro() {
			return $this->fechaRegistro;
		}

		public function setUsuarioRealizo($pUsuarioRealizo) {
			$this->usuarioRealizo = $pUsuarioRealizo;
		}

		private function getUsuarioRealizo() {
			return $this->usuarioRealizo;
		}

		public function setOrdenQuery($psOrdenQuery) {
			$this->ordenQuery = $psOrdenQuery;
		}

		private function getOrdenQuery() {
			return $this->$psOrdenQuery;
		}


		/**
		 * Metodo que genera el filtro que se anexa a la cadena del query
		 * en funcion de los atributos setteados
		 *
		 * @access public
		 * @return string la cadena correpondiente al filtro WHERE del query
		 */
		private function getFiltroQuery() {
			$sFiltro = "";
			if ($this->idSupAcademica != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "idSupAcademica=" . $this->idSupAcademica . " ";
			}
			if ($this->idEstimulo != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "idEstimulo=" . $this->idEstimulo . " ";
			}
			if ($this->idPersona != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "idPersona=" . $this->idPersona . " ";
			}
			if ($this->numeroEmpleado != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "numeroEmpleado=" . $this->numeroEmpleado . " ";
			}
			if (strlen(trim($this->nombreCompleto)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "nombreCompleto='" . $this->nombreCompleto . "'";
			}
			if (strlen(trim($this->tipoContrato)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "tipoContrato='" . $this->tipoContrato . "'";
			}
			if (strlen(trim($this->fechaRegistroEstimulo)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "fechaRegistroEstimulo='" . $this->fechaRegistroEstimulo . "'";
			}
			if (strlen(trim($this->certificacionIngles)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "certificacionIngles='" . $this->certificacionIngles . "'";
			}
			if ($this->cursoCompetencia != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "cursoCompetencia=" . $this->cursoCompetencia . " ";
			}
			if (strlen(trim($this->fechaRegistro)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "fechaRegistro='" . $this->fechaRegistro . "'";
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
		public function getQuery() {
			$sFiltro = $this->getFiltroQuery();
			if (strlen(trim($sFiltro)) > 0) {
				$sFiltro = "WHERE " . $sFiltro . " ";
			}
			$sOrdenQuery = "";
			if (strlen(trim($this->ordenQuery)) > 0) {
				$sOrdenQuery = "ORDER BY " . $this->ordenQuery . " ";
			}
			$sQuery = "
		SELECT
			 idSupAcademica
			,idEstimulo
			,idPersona
			,numeroEmpleado
			,nombreCompleto
			,tipoContrato
			,convert(varchar(10),fechaRegistroEstimulo,103) AS fechaRegistroEstimulo
			,certificacionIngles
			,cursoCompetencia
			,fechaRegistro
		FROM vtaC_estSupAcademica
		" . $sFiltro . "
		" . $sOrdenQuery . " ";

			return $sQuery;
		}


		/**
		 * Metodo que obtiene el arreglo como resultado de la consulta datos y sus filtros
		 * @access public
		 *
		 * @param boolean $bPrimero  si se manda a false, entrega todos los registros
		 *                           se se manda en true, devuelve el primer registro en forma de vector
		 *                           Por defecto esta en true
		 *
		 * @return array $arrDatos arreglo de datos
		 */
		function getDatos($bPrimero = true) {
			//echo $this->getQuery();

			$objConsulta = new clsConsulta($this->getQuery());
			$objConsulta->FNCQueryEjecutar();

			$arrDatos = $objConsulta->getArregloResultado();
			if ($bPrimero) {
				$arrDatos = $arrDatos[0];
			}

			return $arrDatos;
		}

		/**
		 * Metodo que obtiene el json como resultado de la consulta datos y sus filtros
		 * @access public
		 *
		 * @param boolean $bPrimero  si se manda a false, entrega todos los registros
		 *                           se se manda en true, devuelve el primer registro en forma de vector
		 *                           Por defecto esta en true
		 *
		 * @return array $arrDatos arreglo de datos
		 */
		public function getDatosJson($bPrimero = true) {

			$arrDatos = $this->getDatos($bPrimero);

			if (empty($arrDatos)) return "null";
			if ($bPrimero) {
				foreach ($arrDatos as $llaveFila => $fila) {
					$arrDatos[$llaveFila] = utf8_encode($fila);
				}
			} else {
				$i = 0;
				foreach ($arrDatos as $llaveFila => $fila) {
					$iSupAcademicaID = $arrDatos[$llaveFila]['idSupAcademica'];
					$numEmpleado = $arrDatos[$llaveFila]['numeroEmpleado'];
					foreach ($fila as $llaveColumna => $valor) {
						$arrDatos[$llaveFila]['accion'] = "<button class='btnInfoEmpleado' id='btngVerInfo' title='Ver informaci&oacute;n del empleado' onclick='verInformacionEmpleado(".$numEmpleado.")'; >Ver informaci&oacute;n del empleado</button>";
						$arrDatos[$llaveFila][$llaveColumna] = utf8_encode($valor);
						$i++;
					}
				}
			}

			return json_encode($arrDatos);
		}

		/**
		 * Metodo que ejecuta el SP estSupAcademicaAgregarModificar
		 *
		 * @access public
		 *
		 * @param int     idEstimulo
		 * @param varchar certificacionIngles
		 * @param tinyint cursoCompetencia
		 * @param varchar usuarioRealizo
		 *
		 * @return int idSupAcademica
		 * @return int noError
		 * @return varchar mensaje
		 */
		public function estSupAcademicaAgregarModificar() {
			$objProc = new clsProcedimientos("estSupAcademicaAgregarModificar");
			$objProc->FNCAgregaParametrosEntrada($this->idEstimulo);
			$objProc->FNCAgregaParametrosEntrada($this->certificacionIngles);
			$objProc->FNCAgregaParametrosEntrada($this->cursoCompetencia);
			$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo, 1);


			if ($this->idSupAcademica != -1) {
				$objProc->FNCAgregaParametrosEntrada($this->idSupAcademica);
			} else {
				$objProc->FNCAgregaParametroSalida("idSupAcademica", "INT");
			}

			$objProc->FNCAgregaParametroSalida("noError", "INT");
			$objProc->FNCAgregaParametroSalida("mensaje", "VARCHAR", 255);


			$arrSalida = $objProc->FNCObtieneResultado();

			if (empty($arrSalida[0][noError])) {
				$arrSalida[0][noError] = 0;
			}

			//echo $objProc->getCadenaQuery();
			if ($arrSalida['noError'] > 0) {
				str_replace('"', '', $arrSalida['mensaje']);
				str_replace("'", '', $arrSalida['mensaje']);
			}

			return $arrSalida[0];
		}


		/**
		 * Metodo que ejecuta el SP estSupAcademicaEliminar
		 *
		 * @access public
		 *
		 * @param int     idSupAcademica
		 * @param varchar usuarioRealizo
		 *
		 * @return int noError
		 * @return varchar mensaje
		 */
		public function estSupAcademicaEliminar() {
			$objProc = new clsProcedimientos("estSupAcademicaEliminar");
			$objProc->FNCAgregaParametrosEntrada($this->idSupAcademica);
			$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo, 1);
			$objProc->FNCAgregaParametroSalida("noError", "INT");
			$objProc->FNCAgregaParametroSalida("mensaje", "VARCHAR", 255);


			$arrSalida = $objProc->FNCObtieneResultado();

			if (empty($arrSalida[0][noError])) {
				$arrSalida[0][noError] = 0;
			}

			//echo $objProc->getCadenaQuery();
			if ($arrSalida['noError'] > 0) {
				str_replace('"', '', $arrSalida['mensaje']);
				str_replace("'", '', $arrSalida['mensaje']);
			}

			return $arrSalida[0];
		}


	}

?>