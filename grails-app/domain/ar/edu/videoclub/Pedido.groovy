package ar.edu.videoclub

import grails.rest.Resource

class Pedido {

    List peliculas

    static constraints = {
    }

    static hasMany = [peliculas: Pelicula]

}
