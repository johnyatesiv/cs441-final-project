const Q = require("q");
const Model = require("../models/Restaurants");
const Util = require("./Util.js");
const MenusController = require("./MenusController");
const OrdersController = require("./OrdersController");

/**
 * createRestaurant
 * @param restaurant
 * @returns {Model}
 */
createRestaurant = (restaurant) => {
    return Util.create(Model, restaurant);
};

/**
 * updateRestaurant
 * @param id
 * @param update
 * @returns {*}
 */
updateRestaurant = (id, update) => {
    return Util.update(Model, id, update);
};

/**
 * deleteRestaurant
 * @param id
 * @returns {*}
 */
deleteRestaurant = (id) => {
    return Util.delete(Model, id);
};

/**
 * addMenu
 * @param id
 * @param items
 * @returns {*}
 */
addMenu = (id, items) => {
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
deleteMenu = (id, menuId) => {
    return MenusController.deleteMenu(menuId);
};


getRestaurant = (id) => {
    return Util.findById(Model, id);
};

getAllRestaurants = () => {
    return Util.find(Model);
};

getMenus = (id) => {
    return MenusController.getMenusByRestaurantId(id);
};

getOrders = (id) => {
    return OrdersController.getOrdersByRestaurantId(id);
};

getPendingOrders = (id) => {
    return OrdersController.getPendingOrdersByRestaurantId(id);
};

getFulfilledOrders = (id) => {
    return OrdersController.getFulfilledOrdersByRestaurantId(id);
};

_modelErrorHandler = (err, promise) => {
    promise.reject(err);
};


