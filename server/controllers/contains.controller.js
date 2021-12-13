const db = require("../models");
const Contains = db.contain;
const Op = db.Sequelize.Op;

// Create and Save a new contains
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a contains
    const contains = {
      name: req.body.name,
      brand: req.body.brand,
      type: req.body.type,
      price: req.body.price,
      link: req.body.link,
      skinType: req.body.skinType
    };
  
    // Save contains in the database
    Contains.create(contains)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the contains."
        });
      });  
};

// Retrieve all containss from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Contains.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving containss."
        });
      });
};

// Find a single contains with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contains.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find contains with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving contains with id=" + id
        });
      });
};

// Update a contains by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Contains.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contains was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update contains with id=${id}. Maybe contains was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating contains with id=" + id
        });
      });
};

// Delete a contains with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Contains.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contains was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete contains with id=${id}. Maybe contains was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete contains with id=" + id
        });
      });
};

// Delete all containss from the database.
exports.deleteAll = (req, res) => {
    Contains.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Containss were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all containss."
          });
        });
};