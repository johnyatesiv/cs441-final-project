const DB = require("./DB");

module.exports = DB.define('MenuItems', {
    menuId: {
        type: DB.INTEGER
    },
    itemId: {
        type: DB.INTEGER
    }
});