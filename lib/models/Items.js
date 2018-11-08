const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;

module.exports = DB.define('item', {
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
