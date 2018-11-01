const DB = require("./DB");

module.exports = DB.define('menu', {
    restaurantId: {
        type: DB.STRING
    }
});