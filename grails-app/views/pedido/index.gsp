<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="layout" content="main" />
<title>Blogbuster - Alquiler de pel&iacute;culas</title>
</head>
<body>
	<div class="body" style="width: 90%; padding: 15pt;">
		<h1>Alquiler de pel&iacute;culas</h1>
		<form method="post">
			<div class="row-fluid">
	  			<div class="col-md-4">
					<g:textField name="peliculaAutoComplete"
						class="form-control" placeholder="Escriba el título" />
				</div>
				<div class="col-md-8">
					<div id="peliculaSeleccionada">
				</div>
			</div>
			</div>
			<div class="row-fluid">
				<div class="col-md-12">
					<g:hiddenField name="idPelicula"></g:hiddenField>
					<div id="mensajes">
					</div>
				</div>
			</div>
			<div class="row-fluid">
				<div class="col-md-12" id="peliculasAlquiladas">
				</div>
			</div>
		</form>
	</div>
</body>
</html>
