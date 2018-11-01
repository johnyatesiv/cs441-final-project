const Q = require("q");
const Model = require("../models/RestaurantModel");
const MenuController = require("./MenuController");

createRestaurant = (restaurant) => {

};

updateRestaurant = (id, update) => {

};

deleteRestaurant = (id) => {

};

addMenu = (id, menu) => {
    const deferred = Q.defer();

    const menuRecord = {
        restaurantId: id
    };

    MenuController.createMenu(menuRecord);

    //create menu

    //iterate menu items and associate to menu
    return deferred.promise;
};

deleteMenu = (id, menuId) => {

};


getRestaurant = (id) => {
    const deferred = Q.defer();

    Model.findById(id).then(restaurant => {
        deferred.resolve(restaurant);
    }).catch(err => {
        _modelErrorHandler(err, deferred);
    });

    return deferred.promise;
};

getAllRestaurants = () => {
    const deferred = Q.defer();

    Model.findAll().then(restaurants => {
        deferred.resolve(restaurants);
    }).catch(err => {
        _modelErrorHandler(err, deferred);
    });

    return deferred.promise;
};

getMenus = (id) => {

};

getOrders = (id) => {

};

getPendingOrders = (id) => {

};

getFulfilledOrders = (id) => {

};

_modelErrorHandler = (err, promise) => {
    promise.reject(err);
};


