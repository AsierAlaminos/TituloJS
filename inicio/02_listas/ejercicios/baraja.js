//Crear un array con las cartas del poker

let palos = ["P", "R", "T", "C"];
let cartasMayores = ["K", "Q", "J"];
let cartas = [];

for (let i = 0; i < palos.length; i++) {
	for (let j = 1; j < 14; j++) {
		j >= 11 ? cartas.push(cartasMayores[13 - j] + palos[i]) : cartas.push(j + palos[i]);
	}
}

console.log(cartas);
//
//Mostrar solo las cartas de diamantes

let rombos = [];

/*
cartas.forEach(element => {
	if (element.includes("R"))
		console.log(element);
});*/

rombos = cartas.filter((e) => {
	return e.includes("R");
});

//console.log(rombos);
let random;
lhttps://github.com/AsierAlaminos/TituloJSet random2;
//let carta;

/*for (let i = 0; i < cartas.length; i++) {
	random = parseInt(Math.random() * 51);
	random2 = parseInt(Math.random() * 51);
	carta = cartas[random];
	cartas[random] = cartas[random2];
	cartas[random2] = carta;
}*/

console.log(cartas);
cartas = _.shuffle(cartas);
console.log(cartas);

let confirmacion;
let puntuacion = 0;
let numCarta;
let carta;

do {
	carta = cartas.shift();
	confirmacion = confirm(`Tu cartas es: ${carta}\n¿Quieres otra?`);
	numCarta = carta.substring(0, carta.length);
	switch (numCarta) {
		case "K":
			puntuacion += 13;
			break;
		case "Q":
			puntuacion += 12;
			break;
		case "J":
			puntuacion += 11;
			break;
		default:
			puntuacion += parseInt(numCarta);
			break;
	}

} while (confirmacion);

console.log(puntuacion);
