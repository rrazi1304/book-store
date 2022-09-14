const expres = require("express");

const app = expres();
const port = 3000;

app.use(expres.json());
app.use(expres.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/user', (req, res) => {

	let user = {
		name: 'reza',
		id: 1
	}

	res.json(user);
})

app.post('/user', (req, res) => {
	res.send('user')
})

app.listen(port, () => {
	console.log(`listening on ${port}`);
})