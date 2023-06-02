const Sequelize = require('sequelize'); //because this will import sequalize library as class.

const sequelize =new Sequelize('node-complete','root','Chandravadiya@2003',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;