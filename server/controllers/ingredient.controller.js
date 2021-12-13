const db = require("../models");
const Ingredient = db.ingredients;
const Op = db.Sequelize.Op;

// Create and Save a new ingredient
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a ingredient
    const ingredient = {
      name: req.body.name,
      brand: req.body.brand,
      type: req.body.type,
      price: req.body.price,
      link: req.body.link,
      skinType: req.body.skinType
    };
  
    // Save ingredient in the database
    Ingredient.create(ingredient)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the ingredient."
        });
      });  
};

// Retrieve all ingredients from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Ingredient.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ingredients."
        });
      });
};

// Find a single ingredient with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ingredient.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find ingredient with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ingredient with id=" + id
        });
      });
};

// Update a ingredient by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Ingredient.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ingredient was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ingredient with id=${id}. Maybe ingredient was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ingredient with id=" + id
        });
      });
};

// Delete a ingredient with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Ingredient.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ingredient was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ingredient with id=${id}. Maybe ingredient was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ingredient with id=" + id
        });
      });
};

// Delete all ingredients from the database.
exports.deleteAll = (req, res) => {
    Ingredient.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Ingredients were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all ingredients."
          });
        });
};