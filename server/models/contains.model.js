module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
      product: {
        type: Sequelize.STRING
      },
      ingredient: {
        type: Sequelize.STRING
      }
    });
  
    return product;
  };