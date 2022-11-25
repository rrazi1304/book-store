let a = new Promise((resolve, reject) => {
	setTimeout(() => {
		let a = Math.random();
		if (a < 0.5) {
			resolve('done')
		} else {
			reject('not done')
		}
	}, 2)
}).catch((e) => { console.log(e) });

setInterval(() => {
	a.then((result) => {
		console.log('Promised resolved with ' + result);
	})

	// let result = await a;
	// console.log(result);
	// console.log(a);

}, 1000)

// function syncFunc() {
// 	console.log(2);
// 	return 'done'
// }

// let c = async function asyncFunc() {
// 	console.log(2);
// 	return 'done'
// }

// let b = new Promise((resolve, reject) => {
// 	console.log(2);
// 	resolve('done')
// })