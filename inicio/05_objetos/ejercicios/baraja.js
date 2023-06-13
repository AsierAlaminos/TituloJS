//Crear un array con las cartas del poker

function generarBaraja(cartasMayores, palos, funcionValor) {
	let cartas = [];
	for (let i = 0; i < palos.length; i++) {
		for (let j = 1; j < 14; j++) {
			if (j >= 11)
				cartas.push(new Carta(`${cartasMayores[13 - j]}${palos[i]}`, `./images/${cartasMayores[13 - j]}${palos[i]}.png`, funcionValor(cartasMayores[13 - j])));
			else
				cartas.push(new Carta(`${j}${palos[i]}`, `./images/${j}${palos[i]}.png`, j));
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

let carta;

function pedirCarta(funcionValor){
	carta = cartas.shift();
	console.log(carta.getRepre);
	return funcionValor(carta.getValor);
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

setInterval(() => {
	console.log("Ejecución interval");
}, 5000);*/
let nombre;
setTimeout(() => {
	nombre = prompt("Dime tu nombre:");
	spanNombre.innerText = nombre;
}, 500);

let cartas = [];
let total = 0;
let totalMaquina = 0;
let botonInicio = document.querySelector("#inicio");
let botonPedir = document.querySelector("#pedir");
let botonPasar = document.querySelector("#pasar");
let spanNombre = document.querySelector("#nombre");
let spanPunt1 = document.querySelector("#punt1");
let spanPunt2 = document.querySelector("#punt2");
let imgCarta = document.querySelector("#imgCarta");
let tapeteP1 = document.querySelector("#tapete1");
let tapeteP2 = document.querySelector("#tapete2");


botonInicio.addEventListener("click", (e) => {
	if (cartas.length == 0){
		cartas = generarBaraja(["K", "Q", "J"],["P", "D", "T", "C"], (numCarta) => {
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
		/*botonInicio.classList.add("disabled");
		botonPedir.classList.remove("disabled");
		botonPasar.classList.remove("disabled");*/
		botonInicio.disabled = true;
		botonPedir.disabled = false;
		botonPasar.disabled = false;
		spanPunt1.textContent = 0;
		spanPunt2.innerText = 0;
		alert("Juego iniciado");
	}else{
		alert("Ya hay una baraja");
	}
});

botonPedir.addEventListener("click", (e) => {
	if (total > 21){
		if (confirm(`Te has pasado\nPuntuacion: ${total}\n¿Quieres repetir?`)){
			total = 0;
			tapete1.innerHTML = "";
			cartas = generarBaraja(["K", "Q", "J"],["P", "D", "T", "C"], (numCarta) => {
		switch (numCarta) {
			case "K":
				return 13;
			case "Q":
				return 12;
			case "J":
				return 11;
			default:
				return parseInt(numCarta);
			}
			});
		}
	}else{
	if (cartas.length == 0)
		cartas = generarBaraja(["K", "Q", "J"],["P", "D", "T", "C"], (numCarta) => {
	switch (numCarta) {
		case "K":
			return 13;
		case "Q":
			return 12;
		case "J":
			return 11;
		default:
			return parseInt(numCarta);
	}
	});
	total += pedirCarta((numCarta) => {
	switch (numCarta) {
		case "K":
			return 13;
		case "Q":
			return 12;
		case "J":
			return 11;
		default:
			return parseInt(numCarta);
	}
	});
	tapeteP1.innerHTML += `<img id='imgCarta' style='height:100px;' src='${carta.getImagen}' alt=''>`;
	console.log("total: " + total);
	spanPunt1.textContent = total;
	console.log(spanPunt1.innerText);
	}
});

botonPasar.addEventListener("click", (e) => {
	do {
	setTimeout(() => {
		console.log("espera");
	}, 1000);
	if (totalMaquina >= 17 && totalMaquina <= 21)
		break;
	totalMaquina += pedirCarta((numCarta) => {
	switch (numCarta) {
		case "K":
			return 13;
		case "Q":
			return 12;
		case "J":
			return 11;
		default:
			return parseInt(numCarta);
	}
		
	});
	tapeteP2.innerHTML += `<img id='imgCarta' style='height:100px;' src='${carta.getImagen}' alt=''>`;
	spanPunt2.innerText = totalMaquina;
	console.log("totalMaquina: " + totalMaquina);
	} while (totalMaquina <= 21);
	setTimeout(() => {
		if (total > totalMaquina) {
			alert("Has ganado");
		} else if (total < totalMaquina){
			alert("Has perdido");
		}else{
			alert("Empate");
		}
	}, 1000);
});
