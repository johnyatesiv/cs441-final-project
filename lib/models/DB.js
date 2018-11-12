const Sequelize = require('sequelize');
const sequelize = new Sequelize('gbzlz68x6bkjmwrz', 'qyg47pmuz30p15vl', 'v28ungk0ldatcv2u', {
    host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports.DB = sequelize;
module.exports.Sequelize = Sequelize;