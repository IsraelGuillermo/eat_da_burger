const mysql = require("mysql");
var connection;
// code which allows program to connect to db by using heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // if no JAWS_db then connects to local host
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db",
  });
}

connection.connect(function (err) {
  if (err) {
    console.log("error connecting:" + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
