//Operaciones con palabras

let palabra = "EjemploE";

//palabra = palabra.replace("E", "A");
/*
palabra.split("").forEach((e) => {
	console.log(e);
});

console.log(palabra.substring(4, palabra.length));
console.log(palabra.substring(0, palabra.length - 1));*/

let frase = "Esto es un ejemplo de una frase para poder analizarla con JS. Vamos a contar unas cuantas cosas. Para ello vamos a utilizar los métodos que hemos vistao de string";

//contar cuantas letras tiene
//contar cuantas palabras tiene
//contar cuantas oraciones tiene
//contar cuantos espacios tiene
//contar cuantas vocales tiene
//contar cuantas consonantes tiene

let letras = 0;
let palabras;
let oraciones;
let espacios = 0;
let vocales;
let consonantes;

letras = frase.replaceAll(" ", "").replaceAll(".", "").split("").length;

for (let i = 0; i < frase.length; i++) {
	/*if (frase[i] != " " & frase[i] != ".")
		letras++;*/
	if (frase[i] == " ")
		espacios++;	
}

palabras = frase.replaceAll(".").split(" ").length;

oraciones = frase.split(".").length;

2

console.log(letras);
console.log(palabras);
console.log(oraciones);
console.log(espacios);
console.log(vocales);
console.log(consonantes);
