module.exports = app => {
    const contains = require("../controllers/contains.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Contains
    router.post("/", contains.create);
  
    // Retrieve all Contains
    router.get("/", contains.findAll);
  
    // Retrieve a single Contains with id
    router.get("/:id", contains.findOne);
  
    // Update a Contains with id
    router.put("/:id", contains.update);
  
    // Delete a Contains with id
    router.delete("/:id", contains.delete);
  
    // Delete all Containss
    router.delete("/", contains.deleteAll);
  
    app.use('/api/contains', router);
  };