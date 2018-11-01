const DB = require("./DB");

module.exports = DB.define('user', {
    email: {
        type: DB.STRING
    },
    password: {
        type: DB.STRING
    },
    firstName: {
        type: DB.STRING
    },
    lastName: {
        type: DB.STRING
    },
    phone: {
        type: DB.STRING
    }
});