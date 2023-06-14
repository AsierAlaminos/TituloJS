//Promesas

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
/*
promesa.then((e) => {
	console.log("then: " + e);
}).catch((e) => {
	console.log("catch: " + e);
});*/

promesa.then((e) => {
	return (e * 4);
}).then((e1) => {
	console.log(e1);
});
