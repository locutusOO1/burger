var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "datadata2X!",
    database: "burgers_db"
});

connection.connect(err => err ? console.error(`Error connecting to DB: ${err.stack}`) : console.log(`Connected as ID: ${connection.threadId}`));

module.exports = connection;