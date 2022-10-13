const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

 const  connection =   new Sequelize(dbConfig);


connection.authenticate().then(()=>{
    console.log("autentização realizada com sucesso");
}).catch((err)=>{
    console.log("Falha na autenticação" + err);
    }
)

module.exports = connection;