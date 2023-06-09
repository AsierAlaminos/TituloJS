//funciones

function primeraFuncion(){
	console.log("Ejemplo de ejecución");
}

function sumar(param1, param2) {
	console.log("Se va a realizar la suma de dos parametros");
	return param1 + param2;
}

function multiplicar(param1, param2) {
	console.log("Se va a realizar una multiplicación de dos parametros");
	return param1 * param2;
}

function argumentosMultiples(...params){
	console.log("Esto es una funcion con argumentos multiples");
	let acumulador = 0;
	params.forEach((e) => {
		acumulador += e;
	});
	console.log(acumulador);
}

function funcionInvisibles(){
	console.log("Esto es una funcion con parametros invisibles");
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

function operar(p1, p2, p3) {
	p1(p2, p3);
}

//Funcion de flecha

//param => cuerpo con una linea (Aquí siempre devuelve algo)
//(params) => {cuerpo} (Aquí tienes que indicar si quieres devolverlo)
//Puede ser una función o una variable
//En el caso de que sea una variable puede ser llamada como una funcion
//Ej: funcionArrowSuma(19, 1);

let funcionArrowSuma = ((p1, p2) => {
	p1 + p2
});

/*
primeraFuncion();

console.log(sumar(2, 2));

console.log(multiplicar(2, 2));

argumentosMultiples(1, 2, 3);

funcionInvisibles(1, 2, 3, 4, 5, 6);*/

operar((op1, op2) => {
	console.log(`La suma es ${op1 + op2}`);
}, 1, 2);

operar((op1, op2) => {
	console.log(`La resta es ${op1 - op2}`);
}, 1, 2);

operar((op1, op2) => {
	console.log(`La multiplicación es ${op1 * op2}`);
}, 1, 2);

operar((op1, op2) => {
	console.log(`La división es ${op1 / op2}`);
}, 1, 2);

