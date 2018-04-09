package ar.edu.videoclub

import grails.converters.JSON

class PeliculaController {

    def peliculaService

    def getPeliculas(String tituloContiene) {
        render peliculaService.getPeliculas(tituloContiene, 10).collect { pelicula ->
            [titulo: pelicula.titulo,
             actores: pelicula.actores,
             genero: [
                     id: pelicula.genero.id,
                     descripcion: pelicula.genero.descripcion
             ]
            ]
        } as JSON
    }
}