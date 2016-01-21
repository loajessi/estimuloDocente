<div class="barraSuperiorAcciones animated fadeInRight">
		<a id="btnGuardar" class="boton icon guardar">Guardar</a>
		<a id="btnCancelar" class="boton peligro icon remover">Cancelar</a>
	</div>

	<h1 class="animated fadeIn">Revisi&oacute;n de documentos</h1>
	<hr />


<div id="divRadioBtnsEstados" style="float:left; width:70%" class="animated fadeIn delay-5">
	<label style="float:left">Validado por Secretario (aplicar a todos los docentes): &nbsp;</label>

	<div id='jqxButtonGroup_Estado' style="float:left">
		<button style="padding:5px 10px 5px 10px; color:#090; cursor:pointer;" id="btngAprobar">
			<img src="/generalesDIyS/_img/iconoAprobar.png" style="float:left" />&nbsp;S&iacute;
		</button>
		<button style="padding:5px 10px 5px 10px; color:#C00; cursor:pointer;" id="btngRechazar">
			<img src="/generalesDIyS/_img/iconoRemover.png" style="float:left" />&nbsp;No
		</button>
	</div>
	<br /><br /><br />
</div>

<br /><br /><br />

<div id="jqxGrid_Docentes" class="animated fadeIn delay-10"></div>

<form id="frmRevisionDocumentos" name="frmRevisionDocumentos" method="post"></form>

<div id="contenedorDatos" style="visibility: visible; display: block; opacity: 1 ">
	<input type="text" id="cd_g_rowAnterior"  /><br />
</div>