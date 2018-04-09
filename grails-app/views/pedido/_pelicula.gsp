<g:if test="${pelicula}">
	<div class="row">
		<div class="col-md-2">
			<g:set var="imageDir" value="${g.resource(dir: 'images')}"/>
			<img src="${imageDir}/pelis/${pelicula.titulo}.gif" onerror="imgError(this);" width="91px;" height="131px;"/>
		</div>
		<div class="col-md-10">
			<div class="well well-small">
				<h4>
					${pelicula?.titulo}
				</h4>
				<span class="badge badge-info"> ${pelicula?.genero}
				</span> <strong> ${pelicula?.actores}
				</strong>
				<p>
					${pelicula?.sinopsis}
				</p>
				<g:if test="${permiteAgregarPelicula}">
					<a class="btn btn-info disabled" href="javascript:agregarPelicula();" id="botonAgregar"> 
						<span class="glyphicon glyphicon-shopping-cart" title="Agregar pel&iacute;cula"></span>
					</a>
				</g:if>
			</div>
		</div>
	</div>
</g:if>
<g:else>
	<span class="badge badge-danger">La película no existe</span>
</g:else>
