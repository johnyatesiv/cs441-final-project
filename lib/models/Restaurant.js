const DB = require("./DB");

module.exports = DB.define('restaurant', {
    firstName: {
        type: DB.STRING
    },
    lastName: {
        type: DB.STRING
    }
});