const db = require("../database.js");
//const User = db.user;
//const Op = db.Sequelize.Op;

// Create a new user
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

    // Create a user
    const user = req.body;
    
    //SQL Query
    var sql = 'INSERT INTO user SET ?'

    //Testing Connection before running query
    db.getConnection(function(err, connection) {
      //error handling
      if(err) {console.log(err); return;}
      //query
      connection.query(sql, user, function(err, results) {
        connection.release();
        if (err) { console.log(err)}
        
        //json result for testing
        res.json(results)
      })
    })
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    var sql = "SELECT * FROM user"  
    db.getConnection(function(err, connection) {
      //error handling
      if(err) {console.log(err); return;}
      //query
      connection.query(sql, function(err, results) {
        connection.release();
        if (err) { console.log(err)}
        //json results for testing
        res.json(results)
      })
    })
};

// Find a single user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    var sql = "SELECT * FROM user WHERE id_user = ?"  
    db.getConnection(function(err, connection) {
      //error handling
      if(err) {console.log(err); return;}
      //query
      connection.query(sql, id, function(err, results) {
        connection.release();
        if (err) { console.log(err)}
        //json results for testing
        res.json(results)
      })
    })
    
};

// Update a user by the id in the request
exports.update = (req, res) => {
    //Parameters
    const id = req.params.id;
    const user = req.body;
    
    // SQL Query
    var sql = `UPDATE user SET ? WHERE id_user = ${id} `
    
    //Testing the connection than running query
    db.getConnection(function(err, connection) {
      //error handling
      if(err) {console.log(err); return;}
      
      //Executing Query
      connection.query(sql, user, function(err, results) {
        connection.release();
        if (err) { console.log(err)}
        
        //json results for testing
        res.json(results)
      })
    })
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    // SQL Query
    var sql = `DELETE FROM user WHERE id_user = ${id} `
    
    //Testing the connection than running query
    db.getConnection(function(err, connection) {
      //error handling
      if(err) {console.log(err); return;}
      
      //Executing Query
      connection.query(sql, function(err, results) {
        connection.release();
        if (err) { console.log(err)}
        
        //json results for testing
        res.json(results)
      })
    })
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    // SQL Query
    var sql = `DELETE FROM user`
    
    //Testing the connection than running query
    db.getConnection(function(err, connection) {
      //error handling
      if(err) {console.log(err); return;}
      
      //Executing Query
      connection.query(sql, function(err, results) {
        connection.release();
        if (err) { console.log(err)}
        
        //json results for testing
        res.json(results)
      })
    })
  };