const Util = require("./Util");
const Model = require("../models/Menus");
const MenuItemsController = require("./MenuItemsController");

const MenusController = {
    Model: Model
};

/**
 * createMenu
 * @param object
 * @returns {*}
 */
MenusController.createMenu = function(object) {
    return Util.create(this.Model, object);
};

/**
 * updateMenu
 * @param id
 * @param update
 * @returns {*}
 */
MenusController.updateMenu = function(id, update) {
    return Util.update(this.Model, id, update);
};

/**
 * deleteMenu
 * @param id
 */
MenusController.deleteMenu = function(id) {
    return Util.delete(this.Model, id);
};

/**
 * addItem
 * @param menuId
 * @param itemId
 * @returns {*}
 */
MenusController.addItem = function(menuId, itemId) {
    return MenuItemsController.createMenuItem(menuId, itemId);
};

/**
 * removeItem
 * @returns {*}
 */
MenusController.removeMenuItem = function(id) {
    return MenuItemsController.deleteMenuItem(id);
};

/**
 * getMenu
 * @param id
 * @returns {*}
 */
MenusController.getMenu = function(id) {
    return Util.findById(this.Model, id);
};

/**
 * getMenus
 * @returns {*}
 */
MenusController.getMenus = function(query) {
    return Util.find(this.Model, query);
};

MenusController.getMenusByRestaurantId = function(id) {
    return this.getMenus({restaurantId: id});
};

module.exports = MenusController;