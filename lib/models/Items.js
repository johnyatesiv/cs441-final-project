const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;
const Restaurants = require("./Restaurants");

const Model = DB.define('item', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.STRING
    }
});

Model.belongsTo(Restaurants);

module.exports = Model;

