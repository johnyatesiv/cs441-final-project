const Q = require("q");
const Model = require("../models/Restaurants");
const Items = require("../models/Items");
const Util = require("./Util.js");
const MenusController = require("./MenusController");
const OrdersController = require("./OrdersController");

const RestaurantsController = {
    Model: Model
};

/**
 * createRestaurant
 * @param restaurant
 * @returns
 */
RestaurantsController.createRestaurant = function(restaurant) {
    return Util.create(this.Model, restaurant);
};

/**
 * updateRestaurant
 * @param id
 * @param update
 * @returns {*}
 */
RestaurantsController.updateRestaurant = function(id, update) {
    return Util.update(this.Model, id, update);
};

/**
 * deleteRestaurant
 * @param id
 * @returns {*}
 */
RestaurantsController.deleteRestaurant = function(id) {
    return Util.delete(this.Model, id);
};

/**
 * addMenu
 * @param id
 * @param items
 * @returns {*}
 */
RestaurantsController.addMenu = function(id, items) {
    const deferred = Q.defer();

    const menuRecord = {
        restaurantId: id
    };

    //create menu
    MenusController.createMenu(menuRecord).then(menu => {
        items.forEach(item  => {
            MenusController.addItem(menu.id, item);
        });

        deferred.resolve(menu);
    }).catch(err => {
        deferred.reject(err);
    });

    //iterate menu items and associate to menu

    return deferred.promise;
};

/**
 * deleteMenu
 * @param id
 * @param menuId
 */
RestaurantsController.deleteMenu = function(id, menuId) {
    return MenusController.deleteMenu(menuId);
};


RestaurantsController.getRestaurant = function(id) {
    return Util.findById(this.Model, id);
};

RestaurantsController.getRestaurants = function(query) {
    return Util.find(this.Model, query, Items);
};

RestaurantsController.getMenus = function(id) {
    return MenusController.getMenusByRestaurantId(id);
};

RestaurantsController.getOrders = function(id) {
    return OrdersController.getOrders({restaurantId: id});
};

RestaurantsController.getPendingOrders = function(id) {
    return OrdersController.getOrders({state: "pending", restaurantId: id});
};

RestaurantsController.getFulfilledOrders = function(id) {
    return OrdersController.getOrders({state: "fulfilled", restaurantId: id});
};

module.exports = RestaurantsController;