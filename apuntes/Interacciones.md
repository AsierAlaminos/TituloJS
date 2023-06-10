## Alerta

```js
alert(`Alerta realizada por ${nombre}`);
```

## Confirmación

```js
let confirmacion = confirm(`Bienvenido ${nombre}, ¿quieres continuar?`);
```

## Condicionales

### if else

```js
if (confirmacion){
	console.log("Se ha seleccionado continuar");
}else{
	console.log("Se ha seleccionado no continuar");
};
```

### if ternario

```js
confirmacion ? console.log("Seleccionado continuar") : console.log("Seleccionado false");
```

## Prompt

```js
nombre = prompt("Por favor introduce tu nombre");
```