window.addEventListener("load",function(){
	
	var txtArea = document.getElementById("cajatexto");
	txtArea.addEventListener("keypress", autosize);
	var	contador = document.getElementById("contador");
	var	twittear = document.getElementById("comentar");
	var	contenedor = document.getElementById("contenedor");

		//innerHTML o textContent. mejor el segundo

		/*
		Versión 0.0.1:3. En el evento, coger el texto del textarea.
		4. Agegar el texto al HTML.
		1. Diseñar un formulario que tenga un textarea y un botón.
		2. Agregar un evento de click al botón o un evento de submit al formulario.
		3. En el evento, coger el texto del textarea.
		4. Agegar el texto al HTML.
		*/
		//Para que no se pueda enviar nada si esta vacio en el inicio.
		twittear.disabled = true;
		twittear.addEventListener("click", function(e){
		e.preventDefault();//Evita que mande o intente mandar a otra web.
		agregarMensaje(txtArea.value);
		resize();
		agregarHora();
		});

		var agregarMensaje = function(texto){
		var tweet = document.createElement("p");
		tweet.innerText = texto;
		//Si no hay hijos entonces se agrega ahi, sino, se agrega antes del primer hijo
		if(!contenedor.childNodes[0]){
			contenedor.appendChild(tweet);
		} else {
			contenedor.insertBefore(tweet, contenedor.childNodes[0]);
		}
		//Restableciendo todo
		txtArea.value = "";
		twittear.disabled = true;
		contador.innerHTML = 140;
		agregarHora(tweet);

		}

		/*
		Versión 0.0.2:
		1. No ingresar texto vacío (deshabilitar el botón de enviar).
		2. Contar la cantidad de caracteres de forma regresiva.
		*/

		txtArea.addEventListener("keyup", function(e){
		deshabilitarBoton(txtArea);
		contarCaractereres(txtArea);
		calcularEnter(e);

		})
		var deshabilitarBoton = function(texto){
			if(texto.value.length == 0 || texto.value.length > 140) {
				twittear.disabled = true;
			} else if (texto.value.length > 0) {
				twittear.disabled = false;
			}
		}
		var contarCaractereres = function(texto){
			var caracteres = texto.value.length;
			contador.innerHTML = 140 - caracteres;
			/*
			Versión 0.0.3:
			1. Si pasa los 140 caracteres, deshabilitar el botón.(ya esta en la funcion deshabilitarboton)
			2. Si pasa los 120 caracteres, mostrar el contador con OTRO color.
			3. Si pasa los 130 caracteres, mostrar el contador con OTRO color.
			4. si pasa los 140 caracteres, mostrar el contador en negativo.(implicito)
			*/

			if(caracteres >120 && caracteres < 130) {
				contador.style.color = "blue";
			} else if (caracteres > 130) {
				contador.style.color = "red";
			} else {
				contador.style.color = "white";
			}
		}
		/*
		Versión 0.0.4:
		1. Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto
		*/

		var calcularEnter = function(e){
			var tecla = e.keyCode;
			//13 es igual a enter
			if (tecla == 13){
				cajatexto.rows +=1;
			}//8 es backspace, sino, nunca se reduciria. :v
			if (tecla == 8){
				cajatexto.rows -=1;
			}
		}

		/*
		Versión 0.0.5: (Extra)
		Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del
		textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll.
		(Si en caso aplica)
		*/
		//O es la unica forma o todos se hayn plagiado. Pero esta bien hecho
		//Hallar por que no se ejecuta cuando guardo la funcion en una variable y la agrego al manejador del evento.
		function autosize(){
			var el = this;
	  		setTimeout(function(){
			    el.style.cssText = 'height:auto';
			    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	  	},0);
		};
		function resize(){
			txtArea.style.cssText = 'height:auto';
		}

		/*
		Versión 0.0.6: (Extra)
		1. Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm
		*/

		function agregarHora(tweet){
		var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
            if (minuto < 10) {
                minuto = "0" + minuto;
            }
        var horaImprimible = hora + " : " + minuto;
        var tiempo = document.createElement("div");
		tiempo.innerText = horaImprimible;

		tweet.insertBefore(tiempo,tweet.childNodes[0]);  
    }


});

