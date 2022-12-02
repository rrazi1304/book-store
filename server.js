const { BSONTypeError } = require("bson");
const expres = require("express");
const { ObjectId } = require("mongodb");
const { initDB, getDBConnection } = require("./db-client");

const app = expres();
const port = 3100;

app.use(expres.json());
app.use(expres.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/user/:userId', userCallback)

async function userCallback(req, res) {

	try {

		let id = req.params.userId;
		let dbClient = getDBConnection();
		let db = dbClient.db('book-store');
		let users = db.collection('users');

		let myUser = await users.findOne({ _id: ObjectId(id) });

		if (myUser) {
			return res.json(myUser)
		} else {
			return res.send(`no user found with id ${id}`)
		}

	} catch (e) {
		if (e instanceof BSONTypeError) {
			console.log('db error is: ' + e);
		}

		res.send('oops error happened!')
	}
}

app.post('/user', (req, res) => {
	res.send('user')
})

initDB("mongodb://localhost:27017")
	.then((client) => {
		app.listen(port, () => {
			console.log(`listening on ${port}`);
		})
	}).catch(e => {
		console.log(e);
	})