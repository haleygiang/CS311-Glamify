module.exports = (sequelize, Sequelize) => {
    const {STRING, FLOAT} = Sequelize
    const product = sequelize.define("product", {
      name: {
        type: STRING
      },
      brand: {
        type: STRING
      },
      type: {
        type: STRING
      },
      price: {
        type: FLOAT
      },
      link: {
        type: STRING
      },
      skinType: {
        type: STRING
      },
      ingredients: {
        type: STRING
      }
    });
  
    return product;
  };