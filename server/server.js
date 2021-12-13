const express = require("express");
const app = express();
const mysql = require('mysql');
const cors  = require('cors'); //Server connection stuff

app.use(cors()); //Server connection stuff
app.use(express.json()); //Specifys json format for express.

/* Trying alternative method see below this multiline comment.
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Glamify'
})
*/
// const db = require("./models");
// db.sequelize.sync();

// 
app.get("/", (req, res) => {
    res.send("Hello, world. This is Glamify!");
})

require("./app/routes/product.routes")(app);
require("./app/routes/ingredient.routes")(app);
require("./app/routes/review.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/contains.routes")(app);

// Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Running on port 3001');
})