module.exports = (sequelize, Sequelize) => {
    const review = sequelize.define("review", {
      user: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.STRING
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