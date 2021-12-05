const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Glamify'
})


app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO users (full_name, age) VALUES ('Haley Giang', 21)"
    db.query(sqlInsert, (err, result) => {
        res.send("Hello, world. This is Glamify!");
    })
})

// Port 
app.listen(3001, () => {
    console.log('Running on port 3001');
})