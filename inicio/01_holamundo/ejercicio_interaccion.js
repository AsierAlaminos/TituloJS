//Ejercicio de pedir datos y preguntar si son correctos, si lo son mostrarlos

let nombre = prompt("Dime tu nombre");
let apellido = prompt("Dime tu apellido");
let edad = prompt("Dime tu edad");
let ciclo_matriculado = prompt("Dime el ciclo en el que estas matriculado");

let confirmacion = confirm(`Estos datos son correctos:\nNombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}\nCiclo Matriculado: ${ciclo_matriculado}`);

confirmacion ? alert(`Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}\nCiclo Matriculado: ${ciclo_matriculado}`) : alert("Datos erroneos");
