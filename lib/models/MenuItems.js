const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;

module.exports = DB.define('MenuItems', {
    menuId: {
        type: Sequelize.INTEGER
    },
    itemId: {
        type: Sequelize.INTEGER
    }
});