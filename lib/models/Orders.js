const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;
const OrderItems = require("./OrderItems");

const Model = DB.define('order', {
    userId: {
        type: Sequelize.INTEGER
    },
    restaurantId: {
        type: Sequelize.INTEGER
    },
    state: {
        type: Sequelize.STRING
    }
});


Model.hasMany(OrderItems);

module.exports = Model;