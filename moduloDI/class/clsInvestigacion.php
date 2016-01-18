<?php
	require_once("../../config.php");
	require_once("clsConsulta.php");
	require_once("clsProcedimientos.php");

	/*** Clase Generada por CTool 3.3.3 para el objeto Investigacion
	 * @author nombreAutor
	 * Fecha:15/01/2016
	 * @property int $idInvestigacion              descripcion
	 * @property int $idEstimulo                   descripcion
	 * @property int $idPersona                    descripcion
	 * @property int $numeroEmpleado               descripcion
	 * @property varchar $nombreCompleto           descripcion
	 * @property varchar $tipoContrato             descripcion
	 * @property datetime $fechaRegistroEstimulo   descripcion
	 * @property varchar $reconocimientoSNI        descripcion
	 * @property datetime $fechaInicioSNI          descripcion
	 * @property datetime $fechaTerminoSNI         descripcion
	 * @property varchar $nivelSNI                 descripcion
	 * @property int $noProyOrganismoResponsable   descripcion
	 * @property int $noProyInstitucionResponsable descripcion
	 * @property int $noProyOrganismoParticipo     descripcion
	 * @property int $noProyInstitucionParticipo   descripcion
	 * @property datetime $fechaRegistro           descripcion
	 * @property string usuarioRealizo
	 * @property string ordenQuery                 agrega un orden especifico en el query
	 */
	class clsInvestigacion {
		private $idInvestigacion;
		private $idEstimulo;
		private $idPersona;
		private $numeroEmpleado;
		private $nombreCompleto;
		private $tipoContrato;
		private $fechaRegistroEstimulo;
		private $reconocimientoSNI;
		private $fechaInicioSNI;
		private $fechaTerminoSNI;
		private $nivelSNI;
		private $noProyOrganismoResponsable;
		private $noProyInstitucionResponsable;
		private $noProyOrganismoParticipo;
		private $noProyInstitucionParticipo;
		private $fechaRegistro;
		private $usuarioRealizo;
		private $ordenQuery;


		/**
		 * Constructor de la clase
		 */
		public function __construct() {
			$this->idInvestigacion = -1;
			$this->idEstimulo = -1;
			$this->idPersona = -1;
			$this->numeroEmpleado = -1;
			$this->nombreCompleto = "";
			$this->tipoContrato = "";
			$this->fechaRegistroEstimulo = "";
			$this->reconocimientoSNI = "";
			$this->fechaInicioSNI = "";
			$this->fechaTerminoSNI = "";
			$this->nivelSNI = "";
			$this->noProyOrganismoResponsable = -1;
			$this->noProyInstitucionResponsable = -1;
			$this->noProyOrganismoParticipo = -1;
			$this->noProyInstitucionParticipo = -1;
			$this->fechaRegistro = "";
			$this->usuarioRealizo = "";
			$this->ordenQuery = "";
		}

		/**
		 *  Metodo que inicializa el atributo idInvestigacion
		 * @access public
		 *
		 * @param int $pidInvestigacion descripcion.
		 *
		 */
		public function setidInvestigacion($pidInvestigacion) {
			$this->idInvestigacion = $pidInvestigacion;
		}

		/**
		 *  Metodo que obtiene el atributo idInvestigacion
		 * @access private
		 * @return int atributo idInvestigacion
		 *
		 */
		private function getidInvestigacion() {
			return $this->idInvestigacion;
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
		 *  Metodo que inicializa el atributo reconocimientoSNI
		 * @access public
		 *
		 * @param varchar $preconocimientoSNI descripcion.
		 *
		 */
		public function setreconocimientoSNI($preconocimientoSNI) {
			$this->reconocimientoSNI = $preconocimientoSNI;
		}

		/**
		 *  Metodo que obtiene el atributo reconocimientoSNI
		 * @access private
		 * @return varchar atributo reconocimientoSNI
		 *
		 */
		private function getreconocimientoSNI() {
			return $this->reconocimientoSNI;
		}

		/**
		 *  Metodo que inicializa el atributo fechaInicioSNI
		 * @access public
		 *
		 * @param datetime $pfechaInicioSNI descripcion.
		 *
		 */
		public function setfechaInicioSNI($pfechaInicioSNI) {
			$this->fechaInicioSNI = $pfechaInicioSNI;
		}

		/**
		 *  Metodo que obtiene el atributo fechaInicioSNI
		 * @access private
		 * @return datetime atributo fechaInicioSNI
		 *
		 */
		private function getfechaInicioSNI() {
			return $this->fechaInicioSNI;
		}

		/**
		 *  Metodo que inicializa el atributo fechaTerminoSNI
		 * @access public
		 *
		 * @param datetime $pfechaTerminoSNI descripcion.
		 *
		 */
		public function setfechaTerminoSNI($pfechaTerminoSNI) {
			$this->fechaTerminoSNI = $pfechaTerminoSNI;
		}

		/**
		 *  Metodo que obtiene el atributo fechaTerminoSNI
		 * @access private
		 * @return datetime atributo fechaTerminoSNI
		 *
		 */
		private function getfechaTerminoSNI() {
			return $this->fechaTerminoSNI;
		}

		/**
		 *  Metodo que inicializa el atributo nivelSNI
		 * @access public
		 *
		 * @param varchar $pnivelSNI descripcion.
		 *
		 */
		public function setnivelSNI($pnivelSNI) {
			$this->nivelSNI = $pnivelSNI;
		}

		/**
		 *  Metodo que obtiene el atributo nivelSNI
		 * @access private
		 * @return varchar atributo nivelSNI
		 *
		 */
		private function getnivelSNI() {
			return $this->nivelSNI;
		}

		/**
		 *  Metodo que inicializa el atributo noProyOrganismoResponsable
		 * @access public
		 *
		 * @param int $pnoProyOrganismoResponsable descripcion.
		 *
		 */
		public function setnoProyOrganismoResponsable($pnoProyOrganismoResponsable) {
			$this->noProyOrganismoResponsable = $pnoProyOrganismoResponsable;
		}

		/**
		 *  Metodo que obtiene el atributo noProyOrganismoResponsable
		 * @access private
		 * @return int atributo noProyOrganismoResponsable
		 *
		 */
		private function getnoProyOrganismoResponsable() {
			return $this->noProyOrganismoResponsable;
		}

		/**
		 *  Metodo que inicializa el atributo noProyInstitucionResponsable
		 * @access public
		 *
		 * @param int $pnoProyInstitucionResponsable descripcion.
		 *
		 */
		public function setnoProyInstitucionResponsable($pnoProyInstitucionResponsable) {
			$this->noProyInstitucionResponsable = $pnoProyInstitucionResponsable;
		}

		/**
		 *  Metodo que obtiene el atributo noProyInstitucionResponsable
		 * @access private
		 * @return int atributo noProyInstitucionResponsable
		 *
		 */
		private function getnoProyInstitucionResponsable() {
			return $this->noProyInstitucionResponsable;
		}

		/**
		 *  Metodo que inicializa el atributo noProyOrganismoParticipo
		 * @access public
		 *
		 * @param int $pnoProyOrganismoParticipo descripcion.
		 *
		 */
		public function setnoProyOrganismoParticipo($pnoProyOrganismoParticipo) {
			$this->noProyOrganismoParticipo = $pnoProyOrganismoParticipo;
		}

		/**
		 *  Metodo que obtiene el atributo noProyOrganismoParticipo
		 * @access private
		 * @return int atributo noProyOrganismoParticipo
		 *
		 */
		private function getnoProyOrganismoParticipo() {
			return $this->noProyOrganismoParticipo;
		}

		/**
		 *  Metodo que inicializa el atributo noProyInstitucionParticipo
		 * @access public
		 *
		 * @param int $pnoProyInstitucionParticipo descripcion.
		 *
		 */
		public function setnoProyInstitucionParticipo($pnoProyInstitucionParticipo) {
			$this->noProyInstitucionParticipo = $pnoProyInstitucionParticipo;
		}

		/**
		 *  Metodo que obtiene el atributo noProyInstitucionParticipo
		 * @access private
		 * @return int atributo noProyInstitucionParticipo
		 *
		 */
		private function getnoProyInstitucionParticipo() {
			return $this->noProyInstitucionParticipo;
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
			if ($this->idInvestigacion != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "idInvestigacion=" . $this->idInvestigacion . " ";
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
			if (strlen(trim($this->reconocimientoSNI)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "reconocimientoSNI='" . $this->reconocimientoSNI . "'";
			}
			if (strlen(trim($this->fechaInicioSNI)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "fechaInicioSNI='" . $this->fechaInicioSNI . "'";
			}
			if (strlen(trim($this->fechaTerminoSNI)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "fechaTerminoSNI='" . $this->fechaTerminoSNI . "'";
			}
			if (strlen(trim($this->nivelSNI)) > 0) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "nivelSNI='" . $this->nivelSNI . "'";
			}
			if ($this->noProyOrganismoResponsable != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "noProyOrganismoResponsable=" . $this->noProyOrganismoResponsable . " ";
			}
			if ($this->noProyInstitucionResponsable != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "noProyInstitucionResponsable=" . $this->noProyInstitucionResponsable . " ";
			}
			if ($this->noProyOrganismoParticipo != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "noProyOrganismoParticipo=" . $this->noProyOrganismoParticipo . " ";
			}
			if ($this->noProyInstitucionParticipo != -1) {
				if (strlen(trim($sFiltro)) > 0) {
					$sFiltro .= "AND ";
				}
				$sFiltro .= "noProyInstitucionParticipo=" . $this->noProyInstitucionParticipo . " ";
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
			 idInvestigacion
			,idEstimulo
			,idPersona
			,numeroEmpleado
			,nombreCompleto
			,tipoContrato
			,fechaRegistroEstimulo
			,reconocimientoSNI
			,fechaInicioSNI
			,fechaTerminoSNI
			,nivelSNI
			,noProyOrganismoResponsable
			,noProyInstitucionResponsable
			,noProyOrganismoParticipo
			,noProyInstitucionParticipo
			,fechaRegistro
		FROM vtaC_estInvestigacion
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
					$iInvestigacionID = $arrDatos[$llaveFila]['idInvestigacion'];
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
		 * Metodo que ejecuta el SP estInvestigacionAgregarModificar
		 *
		 * @access public
		 *
		 * @param int      idEstimulo
		 * @param varchar  reconocimientoSNI
		 * @param datetime fechaInicioSNI
		 * @param datetime fechaTerminoSNI
		 * @param varchar  nivelSNI
		 * @param int      noProyOrganismoResponsable
		 * @param int      noProyInstitucionResponsable
		 * @param int      noProyOrganismoParticipo
		 * @param int      noProyInstitucionParticipo
		 * @param varchar  usuarioRealizo
		 *
		 * @return int idInvestigacion
		 * @return int noError
		 * @return varchar mensaje
		 */
		public function estInvestigacionAgregarModificar() {
			$objProc = new clsProcedimientos("estInvestigacionAgregarModificar");
			$objProc->FNCAgregaParametrosEntrada($this->idEstimulo);
			$objProc->FNCAgregaParametrosEntrada($this->reconocimientoSNI, 1);
			$objProc->FNCAgregaParametrosEntrada($this->fechaInicioSNI, 1);
			$objProc->FNCAgregaParametrosEntrada($this->fechaTerminoSNI, 1);
			$objProc->FNCAgregaParametrosEntrada($this->nivelSNI, 1);
			$objProc->FNCAgregaParametrosEntrada($this->noProyOrganismoResponsable);
			$objProc->FNCAgregaParametrosEntrada($this->noProyInstitucionResponsable);
			$objProc->FNCAgregaParametrosEntrada($this->noProyOrganismoParticipo);
			$objProc->FNCAgregaParametrosEntrada($this->noProyInstitucionParticipo);
			$objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo, 1);

			if ($this->idInvestigacion != -1) {
				$objProc->FNCAgregaParametrosEntrada($this->idInvestigacion);
			} else {
				$objProc->FNCAgregaParametroSalida("idInvestigacion", "INT");
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
		 * Metodo que ejecuta el SP estInvestigacionEliminar
		 *
		 * @access public
		 *
		 * @param int     idInvestigacion
		 * @param varchar usuarioRealizo
		 *
		 * @return int noError
		 * @return varchar mensaje
		 */
		public function estInvestigacionEliminar() {
			$objProc = new clsProcedimientos("estInvestigacionEliminar");
			$objProc->FNCAgregaParametrosEntrada($this->idInvestigacion);
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