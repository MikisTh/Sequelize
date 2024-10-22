const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'hello_world_db',
   'DATABASE_USERNAME',
   'DATABASE_PASSWORD',
    {
      host: 'DATABASE_HOST',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Food = sequelize.define("foods", {
   id: {
     type: DataTypes.STRING,
     allowNull: false
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   category: {
     type: DataTypes.STRING,
   },
   description: {
     type: DataTypes.STRING,
   }
});

sequelize.sync().then(() => {
   console.log('Food table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});
