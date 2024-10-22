sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 
    Food.create({
        id: "1",
        name: "Maçã",
        category: "FrutasLegumes",
        description: "descrição científica"
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 sequelize.sync().then(() => {

    Food.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

sequelize.sync().then(() => {

    Food.findOne({
        where: {
            id : "1"
        }
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

sequelize.sync().then(() => {

    Food.destroy({
        where: {
          id: 2
        }
    }).then(() => {
        console.log("Successfully deleted record.")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
  });