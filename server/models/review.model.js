module.exports = (sequelize, Sequelize) => {
    const review = sequelize.define("review", {
      user: {
        type: Sequelize.user
      },
      product: {
        type: Sequelize.product
      },
      score: {
        type: Sequelize.FLOAT
      },
      text: {
        type: Sequelize.STRING
      }
    });
  
    return review;
  };