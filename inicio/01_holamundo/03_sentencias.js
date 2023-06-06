//Sentencias de control

let numero1 = 10;
let numero2 = "10";
let continuar = false;

// if
/*
if (numero > 10){

}else if (numero > 5 && numero < 10){

}else{

}*/

//Triple igualdad
//Restringe el tipo (Tiene que ser igual el valor y tipo)

//let resultado = numero1 == numero2;
let resultado = numero1 === numero2;

/*if (resultado){
	console.log("Los numeros son iguales");
}else{
	console.log("Los numeros son diferentes")
}*/

resultado ? console.log("Los numeros son iguales") : console.log("Los numeros son diferentes");

//Switch

let letra = "A";

/*switch (letra) {
	case "A":
		console.log("La letra vale A");
		break;

	case "B":
		console.log("La letra vale B");
		break;
	
	case "C":
		console.log("La letra vale C");
		break;
	default:
		console.log("La letra no tiene un valor reconocido");
		break;
}*/

//For

let nombres = [1, 2, 3, 4, 5];
/*
for (let index = 0; index < nombres.length; index++) {
	console.log(`index: ${nombres[index]}`);
	
}*/

//For each
/*
nombres.forEach((element, i, nombre) => {
	console.log(element);
	console.log(i);
	console.log(nombre);
});*/

//For in
/*
for (const key in nombres) {
	console.log(key); //key = objeto
}*/

//For of
/*
for (const iterator of nombres) {
	console.log(iterator); //iterator = posicion
}*/

//While / do while
/*
do {
	
} while (condition);

while (condition) {
	
}*/


