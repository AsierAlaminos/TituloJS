let selectCategoria = document.querySelector("#select-categoria");
let divProductos = document.querySelector("#productos");

fetch("https://dummyjson.com/products/categories")
  .then((res) => res.json())
  .then((res1) => {
    console.log(res1);
    res1.forEach((element) => {
      selectCategoria.innerHTML += `<option value=${element} >${element}</option>`;
    });
  });

function consultar(url) {
  divProductos.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((res1) => {
      res1.products.forEach((element) => {
        divProductos.innerHTML += `<div class="col">
        <div class="card">
          <img
            src="${element.images[0]}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.price}</p>
            <button class="btn btn-primary">Add</button>
            <button class="btn btn-secondary" id="btn-${element.id}">Detail</button>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">${element.stock}</small>
          </div>
        </div>
      </div>`;
      });
    })
    .then((res2) => {
      botones = document.querySelectorAll(".btn-secondary");
      botones.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          //console.log(e);
          localStorage.setItem("id", btn.id.split("-")[1]);
          location.href = "./detail.html";
        });
      });
    });
}

consultar("https://dummyjson.com/products");

selectCategoria.addEventListener("change", (e) => {
  if (selectCategoria.value.length > 2) {
    if (selectCategoria.value == "all") {
      consultar("https://dummyjson.com/products");
    } else if (selectCategoria.value != "0") {
      consultar(
        `https://dummyjson.com/products/category/${selectCategoria.value}`
      );
    }
  } else {
    console.log("No hay nada seleccionado");
  }
});
