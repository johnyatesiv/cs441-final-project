const Model = require("../models/UserModel");
const Q = require("q");


createUser = (user) => {

};

updateUser = (user) => {

};

deleteUser = (user) => {

};

/**
 * getUser
 * @param id
 * @returns {*}
 */
getUser = (id) => {
    const deferred = Q.defer();

    Model.findOne({where: {id: id}}).then((user) => {

    }).catch((err) => {

    });

    return deferred.promise;
};

/**
 * getOrders
 * @param id
 * @param orderState
 * @returns {*}
 */
getOrders = (id, orderState) => {
    const deferred = Q.defer();

    //Find User and include their Orders
    Model.findOne({where: {id: id}}).then((user) => {

    }).catch((err) => {

    });

    return deferred.promise;
};

getPendingOrders = (id) => {

};

getFulfilledOrders = (id) => {

};

