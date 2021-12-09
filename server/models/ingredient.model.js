module.exports = (sequelize, Sequelize) => {
    const ingredient = sequelize.define("ingredient", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return ingredient;
  };