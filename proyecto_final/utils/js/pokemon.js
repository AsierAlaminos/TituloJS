
//Variables
let container = document.querySelector("#container");
let botones;

//Funciones
async function getAllPokemons() {
	let pokemonsArray = [];
	let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	let data = await response.json();

	for (const element of data.results) {
		const pokemon = await getPokemon(element.url);
//		pokemonsArray.push(pokemon);
		container.innerHTML += `<div class="col-3">
						<div class="card" style="width: 18rem;">
							<img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">${pokemon.forms[0].name}</h5>
								<p class="card-text">${pokemon.id}</p>
								<button class="btn btn-primary" id="btn-${pokemon.id}">Detalles</button>
							</div>
						</div>
					</div>`;
	}
	crearDetalles();
}

async function getPokemon(url) {
	response = await fetch(url);
	data = await response.json();
	let pokemon = data;
	return pokemon;
}

function crearDetalles(){
	botones = document.querySelectorAll(".btn-primary");
	botones.forEach(btn => {
		btn.addEventListener("click", (e) => {
			localStorage.setItem("id-pokemon", btn.id.split("-")[1]);
			location.href = "./detalles.html";
	        });
	});
}

getAllPokemons();
