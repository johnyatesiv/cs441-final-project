const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;
const Items = require("./Items");
const Orders = require("./Orders");

const Model = DB.define('restaurant', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    lat: {
       type: Sequelize.FLOAT
    },
    lng: {
        type: Sequelize.FLOAT
    }
});

Model.hasMany(Items);
Model.hasMany(Orders);

module.exports = Model;