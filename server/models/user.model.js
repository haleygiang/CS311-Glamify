module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      pronouns: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return user;
  };