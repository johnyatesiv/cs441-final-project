const DB = require("./DB");

module.exports = DB.define('orderItems', {
    orderId: {
        type: DB.INTEGER
    },
    itemId: {
        type: DB.INTEGER
    }
});