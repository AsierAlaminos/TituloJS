
let containerDetalles = document.querySelector("#container_detalles");

function generarDetalles() {
	containerDetalles.innerHTML = "";
	fetch(`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem("id-pokemon")}`)
	.then((e) => e.json())
	.then((e1) => {
		containerDetalles.innerHTML += `<div class="row"> 
							<div class="col-3">
							<img src="${e1.sprites.front_default}" style="width: 200px">
							</div>
							<div class="col-3">
							<h2>${e1.forms[0].name}</h2>
							</div>
							<div class="col-3" id="tipos">
								<h3>Tipos</h3>
							</div>
							<div class="col-3" id="stats">
								<h3>Stats</h3>
							</div>
						</div>`;
		let divTipos = document.querySelector("#tipos");
		let divStats = document.querySelector("#stats");
		e1.types.forEach(element => {
			divTipos.innerHTML += `<h4>${element.type.name}</h4>`;
		});
		e1.stats.forEach(element => {
			console.log(element);
			divStats.innerHTML += `<h4>${element.stat.name}: ${element.base_stat}</h4>`;
		});
	});
}

generarDetalles();
