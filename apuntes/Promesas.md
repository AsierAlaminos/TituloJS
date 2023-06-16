**Las promesas son ejecuciones que no están ligadas al tiempo normal de la ejecución, es decir, son asíncronas.

## Creación en variable

```js
let promesa = new Promise((res, rej) =>{
	let aleatorio = parseInt(Math.random() * 11);
	console.log(aleatorio);
	setTimeout(() => {
		if (aleatorio >= 5){
			res(aleatorio);
		}else{
			rej("Número insuficiente");
		}
	}, 5000);
});
```

## Uso de ella

```js
promesa.then((e) => {
	return (e * 4);
}).then((e1) => {
	console.log(e1);
});
```

## Uso sin almacenar en variable

```js
fetch(`https://randomuser.me/api/?results=${numElem}&gender=${genero.value}`)
	.then((e) => e.json())
	.then((e1) => {
		let results = e1.results;
		results.forEach(e2 => {
			console.log(`${e2.name}, ${e2.last}, ${e2.gender}`)
		});
	})
	.catch((e) => {
		console.log(e);
	});
```

---

[[Eventos]]
[[Variables]]