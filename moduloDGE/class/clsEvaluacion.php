<?php
    require_once("../../config.php");
    require_once("../../../generalesDIyS/_class/db/clsConsulta.php");
    require_once("../../../generalesDIyS/_class/db/clsProcedimientos.php");
    /*** Clase Generada por CTool 3.3.3 para el objeto Evaluacion
     * @author nombreAutor
     * Fecha:14/01/2016
     * @property int $idEvaluacion descripcion
     * @property int $idEstimulo descripcion
     * @property smallint $desempeñoAula descripcion
     * @property smallint $desempeñoAcademico descripcion
     * @property tinyint $innovacion descripcion
     * @property tinyint $tics descripcion
     * @property tinyint $egel descripcion
     * @property datetime $fechaRegistro descripcion
     * @property string usuarioRealizo
     * @property string ordenQuery agrega un orden especifico en el query
     */
    class clsEvaluacion{
        private $idEvaluacion;
        private $idEstimulo;
        private $desempeñoAula;
        private $desempeñoAcademico;
        private $innovacion;
        private $tics;
        private $egel;
        private $fechaRegistro;
        private $usuarioRealizo;
        private $ordenQuery;


        /**
         * Constructor de la clase
         */
        public function __construct(){
            $this->idEvaluacion=-1;
            $this->idEstimulo=-1;
            $this->desempeñoAula=-1;
            $this->desempeñoAcademico=-1;
            $this->innovacion=-1;
            $this->tics=-1;
            $this->egel=-1;
            $this->fechaRegistro="";
            $this->usuarioRealizo="";
            $this->ordenQuery="";
        }
        /**
         *  Metodo que inicializa el atributo idEvaluacion
         *  @access public
         *  @param int $pidEvaluacion descripcion.
         *
         */
        public function setidEvaluacion($pidEvaluacion){
            $this->idEvaluacion=$pidEvaluacion;
        }
        /**
         *  Metodo que obtiene el atributo idEvaluacion
         *  @access private
         *  @return int atributo idEvaluacion
         *
         */
        private function getidEvaluacion(){
            return $this->idEvaluacion;
        }
        /**
         *  Metodo que inicializa el atributo idEstimulo
         *  @access public
         *  @param int $pidEstimulo descripcion.
         *
         */
        public function setidEstimulo($pidEstimulo){
            $this->idEstimulo=$pidEstimulo;
        }
        /**
         *  Metodo que obtiene el atributo idEstimulo
         *  @access private
         *  @return int atributo idEstimulo
         *
         */
        private function getidEstimulo(){
            return $this->idEstimulo;
        }
        /**
         *  Metodo que inicializa el atributo desempeñoAula
         *  @access public
         *  @param smallint $pdesempeñoAula descripcion.
         *
         */
        public function setdesempeñoAula($pdesempeñoAula){
            $this->desempeñoAula=$pdesempeñoAula;
        }
        /**
         *  Metodo que obtiene el atributo desempeñoAula
         *  @access private
         *  @return smallint atributo desempeñoAula
         *
         */
        private function getdesempeñoAula(){
            return $this->desempeñoAula;
        }
        /**
         *  Metodo que inicializa el atributo desempeñoAcademico
         *  @access public
         *  @param smallint $pdesempeñoAcademico descripcion.
         *
         */
        public function setdesempeñoAcademico($pdesempeñoAcademico){
            $this->desempeñoAcademico=$pdesempeñoAcademico;
        }
        /**
         *  Metodo que obtiene el atributo desempeñoAcademico
         *  @access private
         *  @return smallint atributo desempeñoAcademico
         *
         */
        private function getdesempeñoAcademico(){
            return $this->desempeñoAcademico;
        }
        /**
         *  Metodo que inicializa el atributo innovacion
         *  @access public
         *  @param tinyint $pinnovacion descripcion.
         *
         */
        public function setinnovacion($pinnovacion){
            $this->innovacion=$pinnovacion;
        }
        /**
         *  Metodo que obtiene el atributo innovacion
         *  @access private
         *  @return tinyint atributo innovacion
         *
         */
        private function getinnovacion(){
            return $this->innovacion;
        }
        /**
         *  Metodo que inicializa el atributo tics
         *  @access public
         *  @param tinyint $ptics descripcion.
         *
         */
        public function settics($ptics){
            $this->tics=$ptics;
        }
        /**
         *  Metodo que obtiene el atributo tics
         *  @access private
         *  @return tinyint atributo tics
         *
         */
        private function gettics(){
            return $this->tics;
        }
        /**
         *  Metodo que inicializa el atributo egel
         *  @access public
         *  @param tinyint $pegel descripcion.
         *
         */
        public function setegel($pegel){
            $this->egel=$pegel;
        }
        /**
         *  Metodo que obtiene el atributo egel
         *  @access private
         *  @return tinyint atributo egel
         *
         */
        private function getegel(){
            return $this->egel;
        }
        /**
         *  Metodo que inicializa el atributo fechaRegistro
         *  @access public
         *  @param datetime $pfechaRegistro descripcion.
         *
         */
        public function setfechaRegistro($pfechaRegistro){
            $this->fechaRegistro=$pfechaRegistro;
        }
        /**
         *  Metodo que obtiene el atributo fechaRegistro
         *  @access private
         *  @return datetime atributo fechaRegistro
         *
         */
        private function getfechaRegistro(){
            return $this->fechaRegistro;
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
            return $this->$psOrdenQuery;
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
            if($this->idEvaluacion!= -1){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="idEvaluacion=" . $this->idEvaluacion . " ";
            }
            if($this->idEstimulo!= -1){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="idEstimulo=" . $this->idEstimulo . " ";
            }
            if($this->desempeñoAula!= -1){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="desempeñoAula=" . $this->desempeñoAula . " ";
            }
            if($this->desempeñoAcademico!= -1){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="desempeñoAcademico=" . $this->desempeñoAcademico . " ";
            }
            if($this->innovacion!= -1){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="innovacion=" . $this->innovacion . " ";
            }
            if($this->tics!= -1){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="tics=" . $this->tics . " ";
            }
            if($this->egel!= -1){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="egel=" . $this->egel . " ";
            }
            if(strlen(trim($this->fechaRegistro))>0){
                if(strlen(trim($sFiltro))>0){
                    $sFiltro.="AND ";
                }
                $sFiltro.="fechaRegistro='" . $this->fechaRegistro . "'" ;
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
            SELECT
                 idEvaluacion
                ,idEstimulo
                ,desempeñoAula
                ,desempeñoAcademico
                ,innovacion
                ,tics
                ,egel
                ,fechaRegistro
            FROM vtaC_estEvaluacion
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
         * Metodo que obtiene el json como resultado de la consulta datos y sus filtros
         * @access public
         * @param boolean $bPrimero si se manda a false, entrega todos los registros
         *                          se se manda en true, devuelve el primer registro en forma de vector
         *                           Por defecto esta en true
         * @return array $arrDatos arreglo de datos
         */
        public function getDatosJson($bPrimero=true){

            $arrDatos=$this->getDatos($bPrimero);

            if(empty($arrDatos)) return "null";
            if($bPrimero){
                foreach($arrDatos as $llaveFila=>$fila){
                    $arrDatos[$llaveFila]=utf8_encode($fila);
                }
            }
            else{
                $i=0;
                foreach($arrDatos as $llaveFila=>$fila){
                    $iEvaluacionID = $arrDatos[$llaveFila]['idEvaluacion'];
                    foreach($fila as $llaveColumna=>$valor){
                        $arrDatos[$llaveFila]['accion']="<a id='btnEliminar_". $i . "' href=# class='boton icon papelera' title='Eliminar' onclick='evaluacionEliminar(" . $iEvaluacionID . ")'></a> <a id='btnEditar_". $i . "' href='#' class='boton icon editar' title='Editar' onclick='evaluacionEditar(" . $iEvaluacionID . ")'></a>";
                        $arrDatos[$llaveFila][$llaveColumna] = utf8_encode($valor);
                        $i++;
                    }
                }
            }

            return json_encode($arrDatos);
        }
        /**
         * Metodo que ejecuta el SP estEvaluacionAgregarModificar
         *
         * @access public
         * @param int idEstimulo
         * @param smallint desempeñoAula
         * @param smallint desempeñoAcademico
         * @param tinyint innovacion
         * @param tinyint tics
         * @param tinyint egel
         * @param datetime fechaRegistro
         * @param varchar usuarioRealizo
         * @return int idEvaluacion
         * @return int noError
         * @return varchar mensaje
         */
        public function estEvaluacionAgregarModificar(){
            $objProc=new clsProcedimientos("estEvaluacionAgregarModificar");
            $objProc->FNCAgregaParametrosEntrada($this->idEstimulo);
            $objProc->FNCAgregaParametrosEntrada($this->desempeñoAula);
            $objProc->FNCAgregaParametrosEntrada($this->desempeñoAcademico);
            $objProc->FNCAgregaParametrosEntrada($this->innovacion);
            $objProc->FNCAgregaParametrosEntrada($this->tics);
            $objProc->FNCAgregaParametrosEntrada($this->egel);
            $objProc->FNCAgregaParametrosEntrada($this->fechaRegistro,1);
            $objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo,1);
            $objProc->FNCAgregaParametroSalida("idEvaluacion","INT");
            $objProc->FNCAgregaParametroSalida("noError","INT");
            $objProc->FNCAgregaParametroSalida("mensaje","VARCHAR",255);


            $arrSalida=$objProc->FNCObtieneResultado();

            if(empty($arrSalida[0][noError])){
                $arrSalida[0][noError]=0;
            }

            //echo $objProc->getCadenaQuery();
            if($arrSalida['noError']>0){
                str_replace('"','',$arrSalida['mensaje']);
                str_replace("'",'',$arrSalida['mensaje']);
            }
            return $arrSalida[0];
        }


        /**
         * Metodo que ejecuta el SP estEvaluacionEliminar
         *
         * @access public
         * @param int idEvaluacion
         * @param varchar usuarioRealizo
         * @return int noError
         * @return varchar mensaje
         */
        public function estEvaluacionEliminar(){
            $objProc=new clsProcedimientos("estEvaluacionEliminar");
            $objProc->FNCAgregaParametrosEntrada($this->idEvaluacion);
            $objProc->FNCAgregaParametrosEntrada($this->usuarioRealizo,1);
            $objProc->FNCAgregaParametroSalida("noError","INT");
            $objProc->FNCAgregaParametroSalida("mensaje","VARCHAR",255);


            $arrSalida=$objProc->FNCObtieneResultado();

            if(empty($arrSalida[0][noError])){
                $arrSalida[0][noError]=0;
            }

            //echo $objProc->getCadenaQuery();
            if($arrSalida['noError']>0){
                str_replace('"','',$arrSalida['mensaje']);
                str_replace("'",'',$arrSalida['mensaje']);
            }
            return $arrSalida[0];
        }


    }
?>