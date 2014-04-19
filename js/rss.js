/*----------------------------------
 Autor: Esteban Vera
 Twitter : @kiokotzu
 Correo : estebanvg@outlook.com
 ----------------------------------*/


$(function(){
	jQuery.fn.RSS = function(url){
		this.each(function() {
			 var objeto = $(this);
			 var titulo = "";
			 var mostrar = "";
			 var contenido = "" ;
			 var link = "";

			 $.getJSON(url, function(data){
			 	$.each(data.feed.entry, function(i, entry) {
			 		console.log(this)
			 		titulo = "<a class='link' href='"+ entry.link[4].href +"'> <h2>"+ entry.title.$t +"</h2></a>";
			 		contenido = "<p>"+ entry.content.$t +"</p>";
			 		mostrar += "<div class='contenido'>"+ titulo + contenido + "</div> </a>";
			 	});
			 	objeto.html(mostrar);
			 });
		});
	}
})