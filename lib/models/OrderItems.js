const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;
const Items = require("./Items");

const Model = DB.define('orderItems', {
    orderId: {
        type: Sequelize.INTEGER
    },
    itemId: {
        type: Sequelize.INTEGER
    }
});

Model.hasOne(Items);

module.exports = Model;