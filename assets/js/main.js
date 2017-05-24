//alert("Proyecto final");
var digitos = /^[0-9]$/;
var letras = /^[A-Za-z]*$/;

var number = function() {
    var numero = document.getElementById("phonenumber").value;
    //var num = parseInt(numero);
    //isNaN(num);
    //console.log(isNaN(num));
// num === null || num.length === 0 || num != "NaN"
    if (numero == null || numero.length == 0 || numero =="") {
    	alert("Esta vacio");
        console.log(numero + "Esta vacio");
    } else if (isNaN(parseInt(numero))) {
    	alert("Debe ingresar números");
        console.log(numero + "Debe ingresar números");
    }/*else if (!digitos.test(num)) {
    	alert("Debe ser digitos");
    	console.log(num + "Debe ser digitos");
    } else if (isNaN(num)) {
    	alert("NaN?");
    	console.log(num + "NaN?");
    }*/ else {
    	alert("Ingreso Datos");
    	console.log(numero + "Ingreso Datos");
    }

    document.getElementById("phonenumber").value = "";
}

var juego = function() {
	// value de los input ingresados para jugar
    var auto01 = document.getElementById("auto01").value;
    console.log(auto01);

    if (auto01 == null || auto01.length == 0 || auto01 =="") {
    	alert("Debe ingresar Numeros entre el 1 y 10");
    } else if (isNaN(parseInt(auto01))) {
    	alert("Debe ingresar números");
        console.log(auto01 + "Debe ingresar números para X");
    } else {
    	alert("Ingreso Datos para X");
    	console.log(auto01 + "Ingreso Datos para X");
    }

    var auto02 = document.getElementById("auto02").value;
    console.log(auto02);

    if (auto02 == null || auto02.length == 0 || auto02 =="") {
    	alert("Debe ingresar Numeros entre el 1 y 6");
    } else if (isNaN(parseInt(auto02))) {
    	alert("Debe ingresar números");
        console.log(auto02 + "Debe ingresar números para Y");
    } else {
    	alert("Ingreso Datos para Y");
    	console.log(auto02 + "Ingreso Datos para Y");
    }
    // creando tablero desde js
  	// visible o invisible start (que son las indicaciones de tablero)
  	var autitos = document.getElementById("autitos");
  	if (autitos.style.visibility != 'hidden'){
		autitos.style.visibility = 'hidden';
		var estructura = document.getElementById("titulo01")
 		var contenedor = document.createElement("section");
    	contenedor.setAttribute("id", "tablero");
    	estructura.appendChild(contenedor);
		//Defino el tablero
		var tablero = [
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0]
		]
		//Ingreso el auto en la posicion 3,5
		// esta ingresando valores del value auto01 - auto02 *NO FUNCIONA 100%*
		tablero[auto01][auto02] = "<img src='assets/img/car.png' alt='autito' width='25'>";

		//Obtengo el div en donde se dibujará el tablero
		var divTablero = document.getElementById("tablero");

		//Variables temporales
		var fila, casilla;

		//Recorro el arreglo para dibujar el tablero
		for(var i = 0; i<tablero.length; i++){
		  fila = document.createElement("div");
		  fila.classList.add("fila");
		  for(var j = 0; j<tablero[i].length; j++){
		    casilla = document.createElement("div");
		    casilla.innerHTML = tablero[i][j];
		    casilla.classList.add("casilla")
		    fila.appendChild(casilla);
		  }
		  divTablero.appendChild(fila);
		}
	} else {
  		autitos.style.visibility = 'visible';
  	}
}

function become() {
    var funcion_01 = document.getElementById("become");
    funcion_01.addEventListener("click", number);
};

function juegos() {
    var funcion_01 = document.getElementById("start");
    funcion_01.addEventListener("click", juego);
};

become();
juegos();

