const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

// Create and Save a new product
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a product
    const product = {
      name: req.body.name,
      brand: req.body.brand,
      type: req.body.type,
      price: req.body.price,
      link: req.body.link,
      skinType: req.body.skinType
    };
  
    // Save product in the database
    Product.create(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the product."
        });
      });  
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
};

// Find a single product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find product with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving product with id=" + id
        });
      });
};

// Update a product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating product with id=" + id
        });
      });
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete product with id=${id}. Maybe product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete product with id=" + id
        });
      });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Products were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all products."
          });
        });
};