'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      idDiety: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      idRegister: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Diety');
  }
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diety = sequelize.define('Diety', {
    idDiety: DataTypes.INTEGER    
  }, {});
  Diety.associate = function(models) {
    Diety.hasMany(models.User, {as: 'users'})
  };
  return Company;
};

