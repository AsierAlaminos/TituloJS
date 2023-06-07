//Explicación listas

let equipos = ["Barcelona", "Madrid", "Atletico", "Real sociedad"];

//mostrar longitud
console.log(equipos.length);

//capturar posicion
console.log(equipos[equipos.length - 1]);

//cambiar el valor
equipos[3] = "Betis";
console.log(equipos);

//agregar valor
equipos[equipos.length] = "Villareal";
// añade un nuevo elemento al final y devuelve la longitud del array
console.log(equipos.push("Sevilla", "Girona", "Getafe", "Osasuna"));
// añade un nuevo elemento al principio y devuelve la longitud del array
console.log(equipos.unshift("Elche", "Español", "Valladolid"));

//eliminar valor
// elimina el ultimo elemento y devuelve el elemento borrado
console.log(equipos.pop());
// elimina el primer elemento y devuelve el elemento borrado
console.log(equipos.shift());

//Mostrar elementos
equipos.forEach((element, index) => {
	console.log(`${index}: ${element}`);
});

//Filtrar en listas
// Devuelve un Array de lo filtrado
let madrid;
madrid = equipos.filter((e) => {
	return e.includes("Madrid")
});
console.log(madrid);
