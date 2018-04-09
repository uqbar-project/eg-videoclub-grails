<g:hiddenField name="idPedido" value="${pedido ? pedido.id : ''}"/>
<g:if test="${pedido.id}">
	<g:set var="peliculas" value="${pedido.peliculas }"/>
	<g:if test="${peliculas}">
		<table class="table table-striped">
			<thead class="success">
				<h3>Pel&iacute;culas a llevar</h3>
			</thead>
			<tbody>
				<g:each in="${peliculas}" status="i" var="pelicula">
					<div class="row">
						<div class="col-md-10">
							<g:render template="pelicula" model="['pelicula': pelicula, 'i': i, 'permiteAgregarPelicula': false]"></g:render>
						</div>
						<div class="col-md-2">
							<a class="btn btn-info" href="javascript:eliminarPelicula(${pelicula.id});" title="Eliminar pel&iacute;cula"> 
								<span class="glyphicon glyphicon-remove"></span>
							</a>
						</div>
					</div>
				</g:each>
			</tbody>
		</table>
	</g:if>
</g:if>
