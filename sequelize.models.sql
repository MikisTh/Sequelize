-- npm install -g sequelize-auto
-- sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models]
-- mkdir hello-world
-- cd hello-world
-- npm init
-- touch server.js
-- npm i sequelize@6.11.0
-- mysql -u your_username -p
-- CREATE DATABASE hello_world_db;
-- SHOW DATABASES;
-- mysql> QUIT
 -- install database
    -- npm install --save mysql2 
    -- npm install --save pg pg-hstore # Postgres
    -- npm install --save mysql2
    -- npm install --save mariadb
    -- npm install --save sqlite3
    -- npm install --save tedious # Microsoft SQL Server

-- nano server.js
-- node server.js
-- nano food.model.js
-- mysql -u YOUR_USERNAME -p
-- USE hello_world_db;
-- SHOW TABLES;
-- mysql> QUIT
-- node food.controller.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,

    },
  },
  {
  
);

console.log(User === sequelize.models.User); // true


// Valid
class User extends Model {
  declare id: number; // this is ok! The 'declare' keyword ensures this field will not be emitted by TypeScript.
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { sequelize },
);

const user = new User({ id: 1 });
user.id; // 1