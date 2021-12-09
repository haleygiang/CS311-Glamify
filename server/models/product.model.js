module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.FLOAT
      },
      link: {
        type: Sequelize.STRING
      },
      skinType: {
        type: Sequelize.STRING
      }
    });
  
    return product;
  };