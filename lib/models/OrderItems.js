const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;

const Model = DB.define('orderItems', {
    orderId: {
        type: Sequelize.INTEGER
    },
    itemId: {
        type: Sequelize.INTEGER
    }
});

module.exports = Model;