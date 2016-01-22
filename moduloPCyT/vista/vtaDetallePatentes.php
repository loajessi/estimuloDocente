<div class="animated slideInLeft">    
    <h3 class="dobleLinea">Validaci&oacute;n de patentes
        <small id="PatentesNombreEmpleado" class="validado"></small>
    </h3>
    <br/>
    <hr>
    <br/>
    <div align="right">
        <a id="btnValidarNingunaPatente" class="boton icon aprobar" style="display:none" 
            title="El empleado se registra como validado con ninguna patente y elimina las que haya agregado a la lista">
            Validar con ninguna patente</a>&nbsp;
        <a id="btnAgregarPatente" class="boton icon agregar">Agregar patente</a>    
    </div>    
    <div id="divValidado"></div>
    <br style="float:none; clear:both;"/>
    <div id="jqxGrid_DetallePatentes" class="jqxGrid_PrimerColumnaBoton"></div>
    
    <div id="jqxWindow_ModalAgregarPatente">
        <div id="windowHeader">
            <h3>Agregar patente</h3>
        </div>
        <div style="overflow: hidden;" id="windowContent">
            <form id="frmModalAgregarPatente" name="frmModalAgregarPatente" action="" method="post" class="dataForm">

                <label for="txtPatente">Nombre de la patente</label>
                <textarea name="txtPatente" id="txtPatente" autofocus="autofocus" required="required" placeholder="Nombre de la patente" 
                	maxlength="255"></textarea>
                <label>Estado</label>
                <div id="jqxComboBox_idEstadoPatente" name="jqxComboBox_idEstadoPatente"></div>
				
                <input type="hidden" id="hdnEstimuloID" name="hdnEstimuloID" value=""/>
                <input type="hidden" id="hdnParqueCientificoID" name="hdnParqueCientificoID" value="0"/>
                
                <br>
                <div class="barraInferiorAcciones">
                    <a id="btnOkAgregarPatente" class="boton icon aprobar" onclick="patenteAgregarOK();">Aceptar</a>
                    <a id="btnCancelarAgregarPatente" class="boton peligro icon remover">Cancelar</a>
                </div>
            </form>
        </div>
    </div>
</div>