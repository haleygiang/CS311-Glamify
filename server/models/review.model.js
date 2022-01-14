module.exports = (sequelize, Sequelize) => {
  const {STRING, FLOAT} = Sequelize
  const review = sequelize.define("review", {
      user: {
        type: STRING
      },
      product: {
        type: STRING
      },
      score: {
        type: FLOAT
      },
      text: {
        type: STRING
      }
    });
  
    return review;
  };