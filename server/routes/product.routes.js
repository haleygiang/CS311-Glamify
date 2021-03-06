module.exports = app => {
    const products = require("../controllers/product.controller.js");

    var router = require("express").Router();

    // Create a new Product
    router.post("/", products.create);

    // Retrieve all Products
    router.get("/", products.findAll);

    // Retrieve all Products in a category
    router.get("/category/:category", products.findByCategory);

    // Retrieve all Products in a big category
    // Category mush be one of (makeup, skincare, hair, fragrance, bath&body)
    router.get("/bigcategory/:category", products.findByBigCategory);

    // Retrieve all Products by search 
    router.get("/search/:keyword", products.search);

    // Retrieve a single Product with id
    router.get("/id/:id", products.findOne);

    // Update a Product with id
    router.put("/:id", products.update);

    // Delete a Product with id
    router.delete("/:id", products.delete);

    // Delete all Products
    router.delete("/", products.deleteAll);

    app.use('/products', router);
};