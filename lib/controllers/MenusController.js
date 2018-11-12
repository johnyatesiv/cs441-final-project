const Util = require("./Util");
const Model = require("../models/Menus");
//const MenuItemsController = require("./MenuItemsController");

const MenusController = {
    Model: Model
};

/**
 * createMenu
 * @param object
 * @returns {*}
 */
MenusController.createMenu = (object) => {
    return Util.create(this.Model, object);
};

/**
 * updateMenu
 * @param id
 * @param update
 * @returns {*}
 */
MenusController.updateMenu = (id, update) => {
    return Util.update(this.Model, id, update);
};

/**
 * deleteMenu
 * @param id
 */
MenusController.deleteMenu = (id) => {
    return Util.delete(this.Model, id);
};

/**
 * addItem
 * @param menuId
 * @param itemId
 * @returns {*}
 */
MenusController.addItem = (menuId, itemId) => {
    return MenuItemsController.createMenuItem(menuId, itemId);
};

/**
 * removeItem
 * @returns {*}
 */
MenusController.removeItem = () => {
    return MenuItemsController.deleteMenuItem(menuId, itemId);
};

/**
 * getMenu
 * @param id
 * @returns {*}
 */
MenusController.getMenu = (id) => {
    return Util.findById(this.Model, id);
};

/**
 * getMenus
 * @returns {*}
 */
MenusController.getMenus = (query) => {
    return Util.find(this.Model, query);
};

MenusController.getMenusByRestaurantId = (id) => {
    return this.getMenus({restaurantId: id});
};

module.exports = MenusController;