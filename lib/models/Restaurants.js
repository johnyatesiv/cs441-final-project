const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;
const Items = require("./Items");

const Model = DB.define('restaurant', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

Model.hasMany(Items);

module.exports = Model;