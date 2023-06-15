

let container = document.querySelector("#divProducts");
let botonBuscar = document.querySelector("#botonBuscar");
let select = document.querySelector("#categorias");
let lista = document.querySelector("#listaCompra");
let carrito = document.querySelector(".btn-secondary");

fetch("https://dummyjson.com/products/categories")
	.then((e) => e.json())
	.then((e1) => {
		e1.forEach((e2) => {
			select.innerHTML += `<option value=${e2}>${e2}</option>`;
		});
});


let apiUrl = "https://dummyjson.com/products";

fetch(apiUrl)
	.then((e) => e.json())
	.then((e1) => {
		e1.products.forEach(element => {
			container.innerHTML += `<div class="col">
										<div class="card" style="width: 18rem;">
											<img src="${element.images[0]}" class="card-img-top" alt="...">
											<div class="card-body">
												<h5 class="card-title">${element.title}</h5>
												<p>${element.price}€</p>
												<a href="#" class="btn btn-primary">Detalles</a>
												<button class="btn btn-secondary" id="botonCarrito" value="${element.id}">Carrito</button>
											</div>
											<h3>${element.stock}</h3>
										</div>
									</div>`;
		});
	}).then((e2) => {
	carrito.forEach(element => {
		element.addEventListener("click", () => {
			lista.innerHTML = "";
			console.log("funciona");
			fetch(`https://dummyjson.com/products/${botonCarrito.value}`)
				.then((e) => e.json())
				.then((e1) => {
					e1.products.forEach(element => {
						lista.innerHTML += `<li>${element.title}</li>`;
					});
				});
			})
	
	});
});


botonBuscar.addEventListener("click", () => {
	container.innerHTML = "";
	apiUrl = `https://dummyjson.com/products/category/${select.value}`;;
	if (select.value == "All")
		apiUrl = "https://dummyjson.com/products";
	fetch(apiUrl)
		.then((e) => e.json())
		.then((e1) => {
			e1.products.forEach(element => {
				container.innerHTML += `<div class="col">
											<div class="card" style="width: 18rem;">
												<img src="${element.images[0]}" class="card-img-top" alt="...">
												<div class="card-body">
													<h5 class="card-title">${element.title}</h5>
													<p>${element.price}€</p>
													<a href="#" class="btn btn-primary">Detalles</a>
													<button class="btn btn-secondary" id="botonCarrito" value="${element.id}">Carrito</button>
												</div>
												<h3>${element.stock}</h3>
											</div>
										</div>`;

			});
		});
});
