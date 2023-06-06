console.log("Codigo desde js externo");

//Variables 


//Mutables
/*
Las variables mutables pueden cambiar
var / let
*/

//No mutables
/*
las variables no mutables no cambian su valor
const
*/

const datos = ["1", "2", 3];
//Object.freeze(datos); Esto es para congelar una variable
datos.push("dato4");
datos.pop();
console.log(datos);

let nombre = "Asier"; //Tipo String
let edad = 18; //Tipo number
let pi = 3.141516; //Tipo number
let experiencia = false; //Tipo boolean
let dato = null; //Tipo null
let cosa; //Tipo undefined
let elementos = ["opción 1", "opción 2", "opción 3"]; //Tipo array --> List

/*
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("pi: " + pi);
console.log("experiencia: " + experiencia);
console.log("dato: " + dato);
*/


//String template (Es igual al formateo de String)
console.log(`Nombre: ${nombre}\nEdad: ${edad}\nExperiencia: ${experiencia}`);

//Conseguir tipo de variable
/*
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof pi);
console.log(typeof experiencia);
console.log(typeof dato);
console.log(typeof cosa);
console.log(typeof elementos);*/


//numeros (Error NaN -> Not a Number)
console.log(isNaN(nombre)); //true
console.log(isNaN(edad)); //false


