const expres = require("express");

const app = expres();
const port = 3100;

app.use(expres.json());
app.use(expres.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/user/:userId', userCallback)

function userCallback(req, res) {

	let id = req.params.userId;

	let user1 = {
		name: 'reza',
		id: 1
	}

	let user2 = {
		name: 'shayan',
		id: 2
	}

	if (id === user1.id.toString()) {
		res.json(user1);
	} else if (id === user2.id.toString()) {
		res.json(user2);
	} else {
		res.send(`no user found with id ${id}`)
	}

}

app.post('/user', (req, res) => {
	res.send('user')
})

app.listen(port, () => {
	console.log(`listening on ${port}`);
})