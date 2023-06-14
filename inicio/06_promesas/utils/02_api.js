//api

//let listaUsers = document.querySelector("#listaUsers");
let divCartas = document.querySelector("#div_cont");
let numElem = prompt("Dime cuantos elementos quieres mostrar:");
let genero = document.querySelector("#selectGenero");
let botonBuscar = document.querySelector("#buscar");

botonBuscar.addEventListener("click", () => {
	divCartas.innerHTML = "";
	fetch(`https://randomuser.me/api/?results=${numElem}&gender=${genero}`)
	.then((e) => e.json())
	.then((e1) => {
		let results = e1.results;
		results.forEach(e => {
			divCartas.innerHTML += `<div class="col">
					<div class="card" style="width: 18rem;">
						<img src="${e.picture.medium}" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">${e.name.title}. ${e.name.first} ${e.name.last}</h5>
						</div>
					</div>
				</div>`;
		});
	})
	.catch((e) => {
		console.log(e);
	});
});
