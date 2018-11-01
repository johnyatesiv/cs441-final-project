const Q = require("q");
const Model = require("../models/MenuModel");
const ItemsModel = require("./Items");
const MenuItemsModel = require("./MenuItems");

createMenu = (menu) => {

};

updateMenu = (id, update) => {

};

deleteMenu = (id) => {

};

addItem = (menuId, itemId) => {

};

getMenu = (id) => {
    const deferred = Q.defer();

    Model.findById(id).then(restaurant => {
        deferred.resolve(restaurant);
    }).catch(err => {
        deferred.reject(err);
    });

    return deferred.promise;
};

getMenus = () => {
    const deferred = Q.defer();

    Model.findAll().then(menus => {
        deferred.resolve(menus);
    }).catch(err => {
        deferred.reject(err);
    });

    return deferred.promise;
};

