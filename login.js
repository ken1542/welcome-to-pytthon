const mysql = require('mysql');
const express = require("express");

const app = express();
app.use("/assets", express.static("assets"));


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodejs"
});

// connect to the database
connection.connect(function(error) {
    if (error) throw error
    else console.log("connected to the database successfully")
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");


})

// set an app port
app.listen(4000);