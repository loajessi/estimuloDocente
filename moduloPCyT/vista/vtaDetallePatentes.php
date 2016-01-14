<div class="animated slideInLeft">
    <div class="barraSuperiorAcciones " >
        <a id="btnGuardarPatente" class="boton icon guardar">Guardar</a>
        <a id="btnCancelarPatente" class="boton peligro icon remover">Cancelar</a>
    </div>

    <h3 class="dobleLinea">Validación de patentes
        <small id="PatentesNombreEmpleado" class="validado"></small>
    </h3>
    <hr>
    <br/>

    <a id="btnAgregarPatente" class="boton icon agregar" style="float:right;">Agregar patente</a>
    <em class="lineaAyuda">Haz clic en un campo 'Estado' para editarlo</em>
    <br style="float:none; clear:both;"/><br/>

    <div id="jqxGrid_DetallePatentes" class="jqxGrid_PrimerColumnaBoton"></div>

    <div id="jqxWindow_ModalAgregarPatente">
        <div id="windowHeader">
            <h3>Agregar patente</h3>
        </div>
        <div style="overflow: hidden;" id="windowContent">
            <form id="frmModalAgregarPatente" name="frmModalAgregarPatente" action="" method="post" class="dataForm">

                <label for="txtPatente">Nombre de la patente</label>
                <textarea name="txtPatente" id="txtPatente" autofocus="autofocus" required="required" placeholder="Nombre de la patente" maxlength="255"></textarea>

                <label>Estado</label>

                <div id="jqxComboBox_idEstadoPatente"></div>

                <br>
                <div class="barraInferiorAcciones">
                    <a id="btnOkAgregarPatente" class="boton icon agregar">Agregar</a>
                    <a id="btnCancelarAgregarPatente" class="boton peligro icon remover">Cancelar</a>
                </div>
            </form>
        </div>
    </div>
</div>