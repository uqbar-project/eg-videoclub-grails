package ar.edu.videoclub

import grails.rest.Resource

@Resource(uri='/generos')
class Genero {

    String descripcion

    static constraints = {
        descripcion(maxSize: 100)
    }

    @Override
    String toString() {
        descripcion
    }

}
