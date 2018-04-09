package ar.edu.videoclub

import grails.gorm.transactions.Transactional

@Transactional
class PeliculaService {

    static int MAX_RESULTS = 5

    @Transactional(readOnly=true)
    def getPeliculas(String titulo) {
        getPeliculas(titulo, MAX_RESULTS)
    }

    @Transactional(readOnly=true)
    def getPeliculas(String titulo, int max) {
        Pelicula.createCriteria().list(max: max) {
            ilike("titulo" , "%" + titulo + "%")
        }
    }

    @Transactional(readOnly=true)
    def getPelicula(Long id) {
        Pelicula.get(id)
    }

}
