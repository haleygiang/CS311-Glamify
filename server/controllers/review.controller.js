const db = require("../models");
const Review = db.review;
const Op = db.Sequelize.Op;

// Create and Save a new review
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a review
    const review = {
      name: req.body.name,
      brand: req.body.brand,
      type: req.body.type,
      price: req.body.price,
      link: req.body.link,
      skinType: req.body.skinType
    };
  
    // Save review in the database
    Review.create(review)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the review."
        });
      });  
};

// Retrieve all reviews from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Review.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reviews."
        });
      });
};

// Find a single review with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Review.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find review with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving review with id=" + id
        });
      });
};

// Update a review by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Review.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Review was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update review with id=${id}. Maybe review was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating review with id=" + id
        });
      });
};

// Delete a review with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Review.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Review was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete review with id=${id}. Maybe review was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete review with id=" + id
        });
      });
};

// Delete all reviews from the database.
exports.deleteAll = (req, res) => {
    Review.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Reviews were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all reviews."
          });
        });
};