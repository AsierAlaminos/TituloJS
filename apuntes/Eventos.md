## De botón

```js
botonBorrar.addEventListener("click", (e) => {
	console.log("boton pulsado");
});
```

## De tecla

```js
inputTexto.addEventListener("keyup", (e) => {
	if (inputTexto.value.length > 255)
		alert("El texto no puede ser mayor a 255 caracteres");
	else
		spanContador.innerText = inputTexto.value.length;
});
```

