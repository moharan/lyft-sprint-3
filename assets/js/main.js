//alert("Proyecto final");
var digitos = /^[0-9]$/;

var number = function() {
    var numero = document.getElementById("phonenumber").value;
    //var num = parseInt(numero); 
    console.log(numero);
// num === null || num.length === 0 || num != "NaN"
    if (numero === null || numero.length === 0) {
    	alert("Esta vacio");
        console.log(numero + "Esta vacio");
    } else {
    	alert("Es Valido");
    }
}

var juego = function() {
	// value de los input ingresados para jugar
    var auto01 = document.getElementById("auto01").value;
    console.log(auto01);
    var auto02 = document.getElementById("auto02").value;
    console.log(auto02);
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
		tablero[3][5] = "A";

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

