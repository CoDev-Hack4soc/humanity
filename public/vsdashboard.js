var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "keshab",
  password: "keshab@123",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
