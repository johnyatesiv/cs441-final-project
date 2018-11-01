const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;

module.exports = DB.define('menu', {
    restaurantId: {
        type: Sequelize.STRING
    }
});