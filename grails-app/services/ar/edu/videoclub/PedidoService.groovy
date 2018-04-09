package ar.edu.videoclub

import grails.gorm.transactions.Transactional

@Transactional
class PedidoService {

    @Transactional(readOnly=true)
    def getPedido(Long id) {
        Pedido.get(id)
    }

    def agregarPelicula(Pedido pedido, Pelicula pelicula) {
        pedido.addToPeliculas(pelicula)
        pedido.save(failOnError: true, flush: true)
    }

    def eliminarPelicula(Pedido pedido, Pelicula pelicula) {
        pedido.removeFromPeliculas(pelicula)
        pedido.save(failOnError: true, flush: true)
    }

}
