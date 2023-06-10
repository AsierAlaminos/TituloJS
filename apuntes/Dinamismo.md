
## Búsqueda de elementos

### Por id
```js
let nodoBoton = document.getElementById("botonPulsar");
```

### Por class

```js
let botonClass = document.getElementsByClassName("btn");
```

### Por tag

```js
let botonTag = document.getElementsByTagName("button");
```

## Búsqueda general

### Por id

```js
let nodoQuery = document.querySelector("#id_span");
```

### Por class

```js
let nodoQuery = document.querySelector(".btn");
```

### Por tag

```js
let nodoQuery = document.querySelector("span");
```

### Seleccionar todos

```js
let nodoQuery = document.querySelectorAll(".btn");
```

#### Más usos

Esto significa que el tag div tiene que tener como clase '.btn'

```js
let nodoQuery = document.querySelector("div.btn");
```

También se puede buscar por herencia

```js
let nodoQuery = document.querySelector("div.btn ul li.lista");
```

[[Interacciones]]
[[Eventos]]