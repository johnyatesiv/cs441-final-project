const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;

module.exports = DB.define('restaurant', {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});