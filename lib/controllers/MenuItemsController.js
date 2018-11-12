const Util = require("./Util");
const Model = require("../models/MenuItems");

/**
 * module
 * @type {{Model: *}}
 */
const MenuItemsController = {
    Model: Model
};

/**
 * createMenutItem
 * @param menuId
 * @param itemId
 * @returns {*}
 */
MenuItemsController.createMenuItem = function(menuId, itemId) {
    return Util.create(this.Model, {menuId: menuId, itemId: itemId});
};

/**
 * deleteMenuItem
 * @returns {*}
 */
MenuItemsController.deleteMenuItem = function(id) {
    return Util.delete(this.Model, id);
};

module.exports = MenuItemsController;