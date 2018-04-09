/** 
 * Definición del autocomplete que busca películas
 * http://jay-chandran.blogspot.com.ar/2011/09/using-grails-with-jquery-autocomplete.html
 **/
$(document).ready(function() {
	$("#peliculaAutoComplete").autoComplete({
		source : buscarPeliculas,     // función que responde cuando queremos buscar...
		minChars : 2,                 // ... y se dispara cuando escribamos al menos 2 caracteres
        renderItem: function (pelicula, search) {
            return '<div class="autocomplete-suggestion" data-titulo="'+pelicula.titulo+'" data-codigo="'+pelicula.id + '">' + pelicula.titulo + '</div>'
        },
		onSelect : peliculaSeleccionada // función que responde cuando elegimos una película
	})

    $("#peliculaAutoComplete").keydown(function(event){
        if(event.keyCode == 13) {
            if($("#peliculaAutoComplete").val().length==0) {
                event.preventDefault()
                return false
            }
        }
    })

});

/** Llamada asincrónica a buscar películas **/
function buscarPeliculas(term, suggest) {
	$.ajax({
		url : getUrl("getPeliculas") + "/" + term,
		success : function(data) {
			suggest(data)
		},
		error : mostrarError
	})
}

// event handler que ocurre cuando un usuario selecciona una película
// de la lista que presenta el autocomplete
// Se llama asincrónicamente a buscar los datos de la película
// (tenemos el título y el id)
function peliculaSeleccionada(event, term, peliculas) {
	var pelicula = peliculas[0]
	var idPelicula = pelicula.getAttribute("data-codigo")

	$("#idPelicula").val(idPelicula) // actualizamos el id de la película en un hidden

	$.ajax({
		url : getUrl("getPelicula"),
		data : { id : idPelicula },       // pasamos el id de la película seleccionada al controller
		update : "peliculaSeleccionada",  // container que vamos a actualizar, es el id de un div
		success : function(data) {
			$("#peliculaSeleccionada").html(data)
			$("#botonAgregar").removeClass("disabled")
		},
		error : mostrarError
	})
}

/** Funciones que manejan alta y baja de una película **/
function agregarPelicula() {
	cambiarPeliculas(getUrl("agregarPelicula"), $("#idPelicula").val())
}

function eliminarPelicula(idPelicula) {
	cambiarPeliculas(getUrl("eliminarPelicula"), idPelicula)
}

function cambiarPeliculas(accion, idPelicula) {
	var idPedido = ""
	if ($("#idPedido") != null) {
		idPedido = $("#idPedido").val()
	}
	$.ajax({
		url : accion,
		data : {
			idPedido : idPedido,
			idPelicula : idPelicula
		},
		success : function(data) {
			$("#peliculaSeleccionada").html("")
			$("#peliculasAlquiladas").html(data)
			$("#idPelicula").val("")
			$("#botonAgregar").addClass("disabled")
			$("#peliculaAutoComplete").val("")
			$("#mensajes").html("")
		},
		error : mostrarError
	})
}

/** Funciones comunes **/
/** Permite obtener la URL relativa al proyecto. La variable app.linkPedido se carga en el layout main.gsp **/
function getUrl(action) {
	return app.linkPedido + "/" + action
}

/** Devuelve una imagen default para una película, cuando no existe la imagen concreta **/
function imgError(image) {
	image.onerror = ""
	image.src = app.linkImagenes + "/pelis/notFound.jpg"
	return true
}

/** Permite mostrar un error ante una llamada ajax **/
function mostrarError(request, status, error) {
	$("#mensajes").addClass("badge badge-important").html(request.responseText)
}