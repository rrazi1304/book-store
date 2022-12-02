const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
let client;

async function initDB(url) {

	if (client) {
		return client;
	}
	client = await (new MongoClient(url)).connect()

	// return client;
	// const client = new MongoClient(uri);
}

function getDBConnection() {

	if (!client) {
		throw new Error("not connected to database")
	}

	return client
}

module.exports = {
	initDB,
	getDBConnection
}