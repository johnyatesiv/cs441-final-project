const DB = require("./DB").DB;
const Sequelize = require("./DB").Sequelize;

const Model = DB.define('user', {
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    }
});

module.exports = Model;