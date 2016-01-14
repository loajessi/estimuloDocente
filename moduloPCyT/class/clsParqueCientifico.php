<?php
    require_once("../../config.php");
    require_once("../../../generalesDIyS/_class/db/clsConsulta.php");
    require_once("../../../generalesDIyS/_class/db/clsProcedimientos.php");

    /*** Clase Generada por CTool 3.3.3 para el objeto ParqueCientifico
     * @author nombreAutor
     * Fecha:14/01/2016
     * @property int $idParqueCientifico descripcion
     * @property int $idEstimulo descripcion
     * @property varchar $patente descripcion
     * @property varchar $fase descripcion
     * @property datetime $fechaRegistro descripcion
     * @property string usuarioRealizo
     * @property string ordenQuery agrega un orden especifico en el query
     */
    class clsParqueCientifico
    {
        private $idParqueCientifico;
        private $idEstimulo;
        private $patente;
        private $fase;
        private $fechaRegistro;
        private $usuarioRealizo;
        private $ordenQuery;


        /**
         * Constructor de la clase
         */
        public function __construct()
        {
            $this->idParqueCientifico = -1;
            $this->idEstimulo = -1;
            $this->patente = "";
            $this->fase = "";
            $this->fechaRegistro = "";
            $this->usuarioRealizo = "";
            $this->ordenQuery = "";
        }

        /**
         *  Metodo que inicializa el atributo idParqueCientifico
         * @access public
         * @param int $pidParqueCientifico descripcion.
         *
         */
        public function setidParqueCientifico($pidParqueCientifico)
        {
            $this->idParqueCientifico = $pidParqueCientifico;
        }

        /**
         *  Metodo que obtiene el atributo idParqueCientifico
         * @access private
         * @return int atributo idParqueCientifico
         *
         */
        private function getidParqueCientifico()
        {
            return $this->idParqueCientifico;
        }

        /**
         *  Metodo que inicializa el atributo idEstimulo
         * @access public
         * @param int $pidEstimulo descripcion.
         *
         */
        public function setidEstimulo($pidEstimulo)
        {
            $this->idEstimulo = $pidEstimulo;
        }

        /**
         *  Metodo que obtiene el atributo idEstimulo
         * @access private
         * @return int atributo idEstimulo
         *
         */
        private function getidEstimulo()
        {
            return $this->idEstimulo;
        }

        /**
         *  Metodo que inicializa el atributo patente
         * @access public
         * @param varchar $ppatente descripcion.
         *
         */
        public function setpatente($ppatente)
        {
            $this->patente = $ppatente;
        }

        /**
         *  Metodo que obtiene el atributo patente
         * @access private
         * @return varchar atributo patente
         *
         */
        private function getpatente()
        {
            return $this->patente;
        }

        /**
         *  Metodo que inicializa el atributo fase
         * @access public
         * @param varchar $pfase descripcion.
         *
         */
        public function setfase($pfase)
        {
            $this->fase = $pfase;
        }

        /**
         *  Metodo que obtiene el atributo fase
         * @access private
         * @return varchar atributo fase
         *
         */
        private function getfase()
        {
            return $this->fase;
        }

        /**
         *  Metodo que inicializa el atributo fechaRegistro
         * @access public
         * @param datetime $pfechaRegistro descripcion.
         *
         */
        public function setfechaRegistro($pfechaRegistro)
        {
            $this->fechaRegistro = $pfechaRegistro;
        }

        /**
         *  Metodo que obtiene el atributo fechaRegistro
         * @access private
         * @return datetime atributo fechaRegistro
         *
         */
        private function getfechaRegistro()
        {
            return $this->fechaRegistro;
        }

        public function setUsuarioRealizo($pUsuarioRealizo)
        {
            $this->usuarioRealizo = $pUsuarioRealizo;
        }

        private function getUsuarioRealizo()
        {
            return $this->usuarioRealizo;
        }

        public function setOrdenQuery($psOrdenQuery)
        {
            $this->ordenQuery = $psOrdenQuery;
        }

        private function getOrdenQuery()
        {
            return $this->$psOrdenQuery;
        }


        /**
         * Metodo que genera el filtro que se anexa a la cadena del query
         * en funcion de los atributos setteados
         *
         * @access public
         * @return string la cadena correpondiente al filtro WHERE del query
         */
        private function getFiltroQuery()
        {
            $sFiltro = "";
            if ($this->idParqueCientifico != -1) {
                if (strlen(trim($sFiltro)) > 0) {
                    $sFiltro .= "AND ";
                }
                $sFiltro .= "idParqueCientifico=" . $this->idParqueCientifico . " ";
            }
            if ($this->idEstimulo != -1) {
                if (strlen(trim($sFiltro)) > 0) {
                    $sFiltro .= "AND ";
                }
                $sFiltro .= "idEstimulo=" . $this->idEstimulo . " ";
            }
            if (strlen(trim($this->patente)) > 0) {
                if (strlen(trim($sFiltro)) > 0) {
                    $sFiltro .= "AND ";
                }
                $sFiltro .= "patente='" . $this->patente . "'";
            }
            if (strlen(trim($this->fase)) > 0) {
                if (strlen(trim($sFiltro)) > 0) {
                    $sFiltro .= "AND ";
                }
                $sFiltro .= "fase='" . $this->fase . "'";
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
        public function getQuery()
        {
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
                 idParqueCientifico
                ,idEstimulo
                ,patente
                ,fase
                ,fechaRegistro
            FROM vtaC_estParqueCientifico
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
        function getDatos($bPrimero = true)
        {
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
         * @param boolean $bPrimero si se manda a false, entrega todos los registros
         *                          se se manda en true, devuelve el primer registro en forma de vector
         *                           Por defecto esta en true
         * @return array $arrDatos arreglo de datos
         */
        public function getDatosJson($bPrimero = true)
        {

            $arrDatos = $this->getDatos($bPrimero);

            if (empty($arrDatos)) return "null";
            if ($bPrimero) {
                foreach ($arrDatos as $llaveFila => $fila) {
                    $arrDatos[$llaveFila] = utf8_encode($fila);
                }
            } else {
                $i = 0;
                foreach ($arrDatos as $llaveFila => $fila) {
                    $iParqueCientificoID = $arrDatos[$llaveFila]['idParqueCientifico'];
                    foreach ($fila as $llaveColumna => $valor) {
                        $arrDatos[$llaveFila]['accion'] = "<a id='btnEliminar_" . $i . "' href=# class='boton icon papelera' title='Eliminar' onclick='parqueCientificoEliminar(" . $iParqueCientificoID . ")'></a> <a id='btnEditar_" . $i . "' href='#' class='boton icon editar' title='Editar' onclick='parqueCientificoEditar(" . $iParqueCientificoID . ")'></a>";
                        $arrDatos[$llaveFila][$llaveColumna] = utf8_encode($valor);
                        $i++;
                    }
                }
            }

            return json_encode($arrDatos);
        }

        /**
         * Metodo que ejecuta el SP estParqueCientificoAgregarModificar
         *
         * @access public
         * @param int idEstimulo
         * @param varchar patente
         * @param varchar fase
         * @param varchar usuarioRealizo
         * @return int idParqueCientifico
         * @return int noError
         * @return varchar mensaje
         */
        public function estParqueCientificoAgregarModificar()
        {
            $objProc = new clsProcedimientos("estParqueCientificoAgregarModificar");
            $objProc->FNCAgregaParametrosEntrada($this->idEstimulo);
            $objProc->FNCAgregaParametrosEntrada($this->patente, 1);
            $objProc->FNCAgregaParametrosEntrada($this->fase, 1);
            $objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo, 1);
            $objProc->FNCAgregaParametroSalida("idParqueCientifico", "INT");
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
         * Metodo que ejecuta el SP estParqueCientificoEliminar
         *
         * @access public
         * @param int idParqueCientifico
         * @param varchar usuarioRealizo
         * @return int noError
         * @return varchar mensaje
         */
        public function estParqueCientificoEliminar()
        {
            $objProc = new clsProcedimientos("estParqueCientificoEliminar");
            $objProc->FNCAgregaParametrosEntrada($this->idParqueCientifico);
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