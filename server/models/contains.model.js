module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
      product: {
        type: Sequelize.product
      },
      ingredient: {
        type: Sequelize.ingredient
      }
    });
  
    return product;
  };