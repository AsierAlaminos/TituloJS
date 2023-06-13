## Estructura

### Sin parámetros

```js
function primeraFuncion(){
	console.log("Ejemplo de ejecución");
}
```

### Con parámetros

```js
function sumar(param1, param2) {
	console.log("Se va a realizar la suma de dos parametros");
	return param1 + param2;
}
```

### Con parámetros múltiples

```js
function argumentosMultiples(...params){
	console.log("Esto es una funcion con argumentos multiples");
	let acumulador = 0;
	params.forEach((e) => {
		acumulador += e;
	});
	console.log(acumulador);
}
```

### Con parámetros invisibles

```js
function funcionInvisibles(){
	console.log("Esto es una funcion con parametros invisibles");
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
```

**Con los parámetros invisibles se utiliza una variable integrada en JavaScript llamada arguments, que almacena todos los parámetros pasados, sean invisibles o no. 
Esta variable también se puede usar cuando tienen parámetros pero también engloba los parámetros pedidos

---

## Funciones de flecha

**Se pueden asignar a variables o añadir en funciones

### Estructura

####       En variable

```js
let funcionArrowSuma = ((p1, p2) => {
	p1 + p2
});
```

####       En función

```js
function funcionSuma(funFlecha, op1, op2){
	funFlecha(op1, op2);
}

funcionSuma ((p1, p2) => {
	p1 + p2
	}, op1, op2);
```

---

[[Variables]]
[[Interacciones]]