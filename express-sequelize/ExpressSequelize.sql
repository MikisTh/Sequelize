-- npm install express-generator -g 
-- npm install -g sequelize-cli

-- express relationship-app-demo --no-view
-- cd relationship-app-demo
-- npm install --save sequelize mysql2
-- sequelize init

-- sequelize db: create

-- sequelize model:generate --name Company --attributes name:STRING
-- sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyId:INTEGER
-- sequelize model:generate --name WorkingDay --attributes weekDay:STRING,workingDate:DATE,isWorking:BOOLEAN
-- sequelize model:generate --name UsersWorkingDay --attributes userId:INTEGER,workingDayId:INTEGER