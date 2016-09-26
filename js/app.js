window.addEventListener("load",function(){
	
	var txtArea = document.getElementById("cajatexto");
		//Aca se va agregar una funcion de autosize
	var	contador = document.getElementById("contador");
	var	twittear = document.getElementById("tweet");
	var	contenedor = document.getElementById("contenedor");
		//innerHTML o textContent. mejor el segundo
	var	caracteres = contador.textContent = "140";

		/*
		Versión 0.0.1:3. En el evento, coger el texto del textarea.
		4. Agegar el texto al HTML.
		1. Diseñar un formulario que tenga un textarea y un botón.
		2. Agregar un evento de click al botón o un evento de submit al formulario.
		3. En el evento, coger el texto del textarea.
		4. Agegar el texto al HTML.
		*/
		
		twittear.addEventListener("click", function(e){
		e.preventDefault();//Evita que mande o intente mandar a otra web.
		agregarMensaje(txtArea.value);
		});

		var agregarMensaje = function(texto){
		var tweet = document.createElement("div");
		tweet.innerHTML = texto;
		//Ya esta declarado al inicio
		//var contenedor = document.getElementById("contenedor");
		if(!contenedor.childNodes[0]){
			contenedor.appendChild(tweet);
		} else {
			contenedor.insertBefore(tweet, contenedor.childNodes[0]);
		}
		txtArea.value = "";
		//Aca faltaria agregar la hora en la siguiente version		
		}
		



});

