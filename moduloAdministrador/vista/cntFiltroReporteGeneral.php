<?
   //****************//
   //  cntFiltroReporteGeneral.php//
   //****************//
    $iValor=$_GET['valor'];
   
	if($iValor==2){
	    $sLista="<p><label for='selFiltro'></label>Categor&iacute;a:&nbsp;&nbsp;<select name='selFiltro' id='selFiltro'><option value='-1'>Selecciona una categor&iacute;a</option>";
		require_once("../class/clsJornada.php");
	    $objConsulta=new clsJornada();
	    $sOpciones = $objConsulta->getCombo(-1);
	 }
     if($iValor==3){
	    $sLista="<p><label for='selFiltro'></label>Nivel:&nbsp;&nbsp;<select name='selFiltro' id='selFiltro'><option value='-1'>Selecciona un nivel</option>
		       <option value='1'>1</option>
		       <option value='2'>2</option>
		       <option value='3'>3</option>
		       <option value='4'>4</option>
		       <option value='5'>5</option>
			   <option value='6'>6</option>
			   <option value='7'>7</option>
			   <option value='8'>8</option>
			   <option value='9'>9</option>
		";
	 }

    $sLista.=$sOpciones."</select></p>";

    echo $sLista;

?>