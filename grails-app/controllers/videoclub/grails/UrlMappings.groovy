package videoclub.grails

class UrlMappings {

    static mappings = {
        "/pelicula/$tituloContiene"(controller:"pelicula", action: "getPeliculas")

        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
