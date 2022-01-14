module.exports = (sequelize, Sequelize) => {
    const {INTEGER, STRING} = Sequelize
    const user = sequelize.define("user", {
      UID: {
        type: STRING,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: STRING,
        allowNull: false
      },
      email: {
        type: STRING
      },
      age: {
        type: INTEGER
      },
      pronouns: {
        type: STRING
      },
      phone_number: {
        type: INTEGER
      }
    });
  
    return user;
  };