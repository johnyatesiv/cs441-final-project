const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;
const MenuItems = require("./MenuItems");
const Restaurants = require("./Restaurants");

const Model = DB.define('menu', {
    restaurantId: {
        type: Sequelize.STRING
    }
});

Model.hasMany(MenuItems);
Model.belongsTo(Restaurants);

module.exports = Model;