'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WorkingDays', {
      idRegister: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        allowNull: false,
        secondaryKey: true,
        type: Sequelize.INTEGER
      },
      idFood: {
        allowNull: false,
        secondaryKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WorkingDays');
  }
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersWorkingDay = sequelize.define('UsersWorkingDay', {
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {});
  UsersWorkingDay.associate = function(models) {
    UsersWorkingDay.belongsTo(models.User, {foreignKey: 'userId'})
    UsersWorkingDay.belongsTo(models.WorkingDay, {foreignKey: 'workingDayId'})
  };
  return UsersWorkingDay;
};