// JavaScript Document
function indexInicializar() {

	var crearWidgets = function () {
		// Menú de opciones
		$("#jqxMenu_Index").jqxMenu({
			width: $("#jqxMenu_Index").parent.width,
			height: $("#jqxMenu_Index").parent.height,
			animationShowDuration: 300,
			animationHideDuration: 100,
			animationShowDelay: 300,
			showTopLevelArrows: true,
			autoOpen: true,
			enableHover: true,
			keyboardNavigation: true
		});
	};

	var agregarEventos = function () {

		$('.jqx-menu-item').click(function (event) {
			indexMenuOpcionIr( $(this).attr('id') );
		});
	};

	crearWidgets();
	agregarEventos();
}

function indexMenuOpcionIr(psNombreArchivoVista, agregarBreadcrumb) {
	if (typeof agregarBreadcrumb === 'undefined') {agregarBreadcrumb = true;}

	var tituloActual = $('.wrapper > .container h1').html();

	$("#divPrincipal").fadeIn().html("Cargando...");
	$("#divInformacionEmpleado").fadeOut();

	var vista = "vista/" + psNombreArchivoVista + ".php";

	$.get(vista, function (data, status) {
		if (status == 'success') {
			var tituloVista = $(data).filter('h1').text(),
				inicializar = psNombreArchivoVista.charAt(3).toLowerCase() + psNombreArchivoVista.substring(4) + 'Inicializar';

			if (tituloActual != tituloVista){
				// Agregar al breadcrumb
				$('#breadcrumb ul').append('<li class="separador animated fadeInRight">&nbsp;&gg;&nbsp;</li><li class="animated fadeInRight delay-5" onclick="indexMenuOpcionIr(\''+psNombreArchivoVista+'\',false);" rel="cargarVista" data-breadcrumb="'+psNombreArchivoVista+'">'+ tituloVista +'</li>')
			}else{
				$('[data-breadcrumb="'+psNombreArchivoVista+'"]').nextAll().remove();
			}

			$("#divPrincipal").html(data);

			//Inicializar la vista
			window[inicializar]();
		}
	});
}

