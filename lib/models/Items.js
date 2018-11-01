const DB = require("./DB");

module.exports = DB.define('item', {
    name: {
        type: DB.STRING
    },
    price: {
        type: DB.INTEGER
    },
    image: {
        type: DB.STRING
    }
});

