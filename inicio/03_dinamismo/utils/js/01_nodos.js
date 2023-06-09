

//Busqueda por Id
/*let nodoBoton = document.getElementById("botonPulsar");
console.log(nodoBoton);

//Busqueda por Clase
let botonClass = document.getElementsByClassName("btn");
console.log(botonClass);

//Busqueda por Tag/Etiqueta
let botonTag = document.getElementsByTagName("button");
console.log(botonTag);

//Busqueda general
//Si no se especifica busca por Tag
//Si pones . buscas por clase
//Si pones # buscas por id
let nodoQuery = document.querySelector(".btn");
console.log(nodoQuery);*/

let botonPulsar = document.querySelector("#botonPulsar");

let botonBorrar = document.querySelector("#botonBorrar");

//Si en el Selector pones esto -> div.lista-dos la etiqueta tiene que cumplir con la   clase y sería igual para los id -> div#lista-dos

/*let li1 = document.querySelectorAll("div.lista-uno ul li");
let li2 = document.querySelectorAll("div.lista-dos ul li");*/
//console.log(li);
let lista2 = document.querySelector("div.lista-dos #lista");

let lista1 = document.querySelector("div.lista-uno #lista");

let input = document.querySelector("#input_nombre");

let select = document.querySelector("#select");

let li = document.querySelectorAll("li");

botonPulsar.addEventListener("click", (e) => {
	/*let nodoLi = document.createElement("li");
	nodoLi.className = "list-group-item li-hijo";
	console.log(input.value);
	nodoLi.textContent = input.value;
	input.value = "";
	lista.append(nodoLi);*/
	if (select.value == 1)
		lista1.innerHTML += `<li class='list-group-item li-hijo'>${input.value}</li>`;
	else
		lista2.innerHTML += `<li class='list-group-item li-hijo'>${input.value}</li>`;
});

console.log(li);
let pulsado;

li.forEach(e => {
	e.addEventListener("click", () => {
		li.forEach(e1 => {
			e1.classList.remove("active");
		});
		e.classList.add("active");
		pulsado = e;
	});
});

botonBorrar.addEventListener("click", (e) => {
	pulsado.remove();
});

let inputTexto = document.querySelector("#input_char");
let spanContador = document.querySelector("span");

inputTexto.addEventListener("keyup", (e) => {
	if (inputTexto.value.length > 255)
		alert("El texto no puede ser mayor a 255 caracteres");
	else
		spanContador.innerText = inputTexto.value.length;
});
