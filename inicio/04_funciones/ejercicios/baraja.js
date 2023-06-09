//Crear un array con las cartas del poker

function generarBaraja(cartas, cartasMayores, palos) {
	for (let i = 0; i < palos.length; i++) {
		for (let j = 1; j < 14; j++) {
			j >= 11 ? cartas.push(cartasMayores[13 - j] + palos[i]) : cartas.push(j + palos[i]);
		}
	}
	cartas = _.shuffle(cartas);
	return cartas;
}


/*function pedirCarta(funcionValor){
	let confirmacion;
	let puntuacion = 0;
	let numCarta;
	let carta;

	do {
		carta = cartas.shift();
		console.log(carta);
		confirmacion = confirm(`Tu cartas es: ${carta}\n¿Quieres otra?`);
		numCarta = carta.substring(0, carta.length - 1);
		console.log(numCarta);
		puntuacion += funcionValor(numCarta);
	} while (confirmacion);
	return puntuacion;
}*/

function pedirCarta(funcionValor){
	let numCarta;
	let carta;

	carta = cartas.shift();
	console.log(carta);
	numCarta = carta.substring(0, carta.length - 1);
	return funcionValor(numCarta);
}

//console.log(cartas);
//
//Mostrar solo las cartas de diamantes
/*
let rombos = [];


cartas.forEach(element => {
	if (element.includes("R"))
		console.log(element);
});

rombos = cartas.filter((e) => {
	return e.includes("R");
});

//console.log(rombos);
let random;
//let carta;

for (let i = 0; i < cartas.length; i++) {
	random = parseInt(Math.random() * 51);
	random2 = parseInt(Math.random() * 51);
	carta = cartas[random];
	cartas[random] = cartas[random2];
	cartas[random2] = carta;
}

console.log(cartas);
cartas = _.shuffle(cartas);
console.log(cartas);

console.log(puntuacion);
*/
let cartas = [];


let total;
let botonInicio = document.querySelector("#inicio");
let botonPedir = document.querySelector("#pedir");

botonInicio.addEventListener("click", (e) => {
	if (cartas.length == 0){
		cartas = generarBaraja(cartas, ["K", "Q", "J"],["P", "R", "T", "C"]);
		botonInicio.classList.add("disabled");
		alert("Juego iniciado");
	}else{
		alert("Ya hay una baraja");
	}
});

botonPedir.addEventListener("click", (e) => {
	total += pedirCarta((numCarta) => {
	switch (numCarta) {
		case "K":
			return 13;
			break;
		case "Q":
			return 12;
			break;
		case "J":
			return 11;
			break;
		default:
			return parseInt(numCarta);
			break;
	}
	});

});

console.log(total);
