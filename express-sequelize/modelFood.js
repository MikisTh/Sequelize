'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsersWorkingDays', {
      idFood: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameFood: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {         
          model: 'Users',
          key: 'id'
        }
      },
      categoryFood: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        references: {         
          key: 'idCategory'
        }
      },
      descriptionFood: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UsersWorkingDays');
  }
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    idFood: DataTypes.INTEGER, 
    nameFood: DataTypes.STRING,
    categoryFood: DataTypes.BOOLEAN,
    descriptionFood: DataTypes.STRING       
  }, {});
  Food.associate = function(models) {
    Food.hasMany(models.register, {as: 'registers'})
  };
  return Food;
};
