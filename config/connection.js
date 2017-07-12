var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers"
});

connection.connect(function(err) {
	if (err) {
		console.error("error connection: " + err.stack);
		return'
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;