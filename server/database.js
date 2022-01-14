const mysql = require('mysql');

var db = mysql.createPool({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bcf9b56668899e',
    password: '65c41689',
    database: 'heroku_b35e3a99bab5659',
    connectionLimit: 10,
    supportBigNumbers: true
})


db.product = require("./models/product.model.js");
db.user = require("./models/user.model.js");
db.review = require("./models/review.model.js");

module.exports = db;
