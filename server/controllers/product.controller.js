const db = require("../database.js");
//const User = db.product;
//const Op = db.Sequelize.Op;

// Create a new product
exports.create = (req, res) => {
    // Validate request example
    /*
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    */

    // Create a product
    const products = req.body;

    const keys = Object.keys(products[0]);


    const values = new Array();


    for (var i = 0; i < req.body.length; i++) {
        values.push(Object.values(products[i]))
    }


    //SQL Query
    var sql = 'INSERT INTO product (??) VALUES ?'

    //Testing Connection before running query
    db.getConnection(function(err, connection) {
        //error handling
        if (err) { console.log(err); return; }
        //query
        connection.query(sql, [keys, values], function(err, results) {
            connection.release();
            if (err) { console.log(err) }

            //json result for testing
            res.json(results)
        })
    })
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    var sql = "SELECT * FROM product"
    db.getConnection(function(err, connection) {
        //error handling
        if (err) { console.log(err); return; }
        //query
        connection.query(sql, function(err, results) {
            connection.release();
            if (err) { console.log(err) }
            //json results for testing
            res.json(results)
        })
    })
};

// Find all products within a category
exports.findByCategory = (req, res) => {
    //get parameters
    const category = req.params.category;

    //SQL Query
    var sql = `SELECT * FROM product WHERE category LIKE "${category}"`

    //Testing the connection than running query
    db.getConnection(function(err, connection) {
        //error handling
        if (err) { console.log(err); return; }

        //Executing Query
        connection.query(sql, function(err, results) {
            connection.release();
            if (err) { console.log(err) }

            //json results for testing
            res.json(results)
        })
    })

}

// Find a single product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    var sql = "SELECT * FROM product WHERE id_product = ?"
    db.getConnection(function(err, connection) {
        //error handling
        if (err) { console.log(err); return; }
        //query
        connection.query(sql, id, function(err, results) {
            connection.release();
            if (err) { console.log(err) }
            //json results for testing
            res.json(results)
        })
    })

};

// Update a product by the id in the request
exports.update = (req, res) => {
    //Parameters
    const id = req.params.id;
    const product = req.body;

    // SQL Query
    var sql = `UPDATE product SET ? WHERE id_product = ${id} `

    //Testing the connection than running query
    db.getConnection(function(err, connection) {
        //error handling
        if (err) { console.log(err); return; }

        //Executing Query
        connection.query(sql, product, function(err, results) {
            connection.release();
            if (err) { console.log(err) }

            //json results for testing
            res.json(results)
        })
    })
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    // SQL Query
    var sql = `DELETE FROM product WHERE id_product = ${id} `

    //Testing the connection than running query
    db.getConnection(function(err, connection) {
        //error handling
        if (err) { console.log(err); return; }

        //Executing Query
        connection.query(sql, function(err, results) {
            connection.release();
            if (err) { console.log(err) }

            //json results for testing
            res.json(results)
        })
    })
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
    // SQL Query
    var sql = `DELETE FROM product`

    //Testing the connection than running query
    db.getConnection(function(err, connection) {
        //error handling
        if (err) { console.log(err); return; }

        //Executing Query
        connection.query(sql, function(err, results) {
            connection.release();
            if (err) { console.log(err) }

            //json results for testing
            res.json(results)
        })
    })
};