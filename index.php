<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Plugin para mostrar contenido RSS</title>
	<link rel="stylesheet" href="css/rss.css">
</head>
<body>
	<div class="contenido-blog wrapper">
	</div>

	<script src="js/jquery-1.11.0.js"></script>
	<script src="js/rss.js"></script>

	<script>
	$(function(){
		
		/* esta url que le pasamos al plugin puede ser cualquiera, por lo general solo cambia la primera parte hasta el ".com" por la url del blog que quieres extraer los datos */
		$('.contenido-blog').RSS('http://www.blogdeprogramacion.com/feeds/posts/default?alt=json-in-script&callback=?');
	})
	</script>
</body>
</html>