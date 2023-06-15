//api

//let listaUsers = document.querySelector("#listaUsers");
let divCartas = document.querySelector("#div_cont");
let numElem = prompt("Dime cuantos elementos quieres mostrar:");
let genero = document.querySelector("#selectGenero");
let botonBuscar = document.querySelector("#buscar");
let botonNavegar = document.querySelector("#navegar");

botonBuscar.addEventListener("click", () => {
	divCartas.innerHTML = "";
	fetch(`https://randomuser.me/api/?results=${numElem}&gender=${genero.value}`)
	.then((e) => e.json())
	.then((e1) => {
		let results = e1.results;
		results.forEach(e2 => {
			divCartas.innerHTML += `<div class="col">
					<div class="card" style="width: 18rem;">
						<img src="${e2.picture.medium}" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">${e2.name.title}. ${e2.name.first} ${e2.name.last}</h5>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>`;
		});
	})
	.catch((e) => {
		console.log(e);
	});
});


//Navegar entre páginas
/*
botonNavegar.addEventListener("click", (e) => {
	console.log(window.location);
	window.location.href = "./detail.html";
});
*/

botonNavegar.addEventListener("click", (e) => {
	console.log(window.location);
	window.location.href = "./detail.html";
	localStorage.setItem("uuid", "4ef91589-0ea3-40f4-b56e-1855289b0929");
});
