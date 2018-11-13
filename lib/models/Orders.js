const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;

module.exports = DB.define('order', {
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