const Model = require("../models/Users");
const Util = require("./Util");
const OrdersController = require("./OrdersController");
const crypto = require("crypto");
const Q = require("q");

const UsersController = {
    Model: Model
};

_generateToken = (callback) => {
    crypto.randomBytes(48, function(err, buffer) {
        var token = buffer.toString('hex');
        callback(token);
    });
}

UsersController.login = (credentials) => {
    const deferred = Q.defer();

    Util.find(Model, {email: credentials.email, password: credentials.password}).then(users => {
        const user = users[0];
        if(users.length > 0 && user) {
            console.log(users);
            console.log(user);
            _generateToken(token => {
                user.update({token: token}).then(() => {
                    deferred.resolve(token);
                }).catch(err => {
                    deferred.reject(err);
                });
            })
        } else {
            deferred.reject("No user found.")
        }
    }).catch(err => {
        deferred.reject(err);
    });

    return deferred.promise;
};

/**
 * createUser
 * @param user
 */
UsersController.createUser = (user) => {
    return Util.create(this.Model, user);
};

/**
 * updateUser
 * @param id
 * @param update
 */
UsersController.updateUser = (id, update) => {
    return Util.update(this.Model, id, update)
};

/**
 * deleteUser
 * @param id
 * @returns {*}
 */
UsersController.deleteUser = (id) => {
    return Util.delete(this.Model, id);
};

/**
 * getUser
 * @param id
 * @returns {*}
 */
UsersController.getUser = (id) => {
    return Util.findById(this.Model, id);
};

/**
 * getUsers
 * @param query
 * @returns {*}
 */
UsersController.getUsers = (query) => {
    return Util.find(this.Model, query);
};

/**
 * getOrders
 * @param id
 * @param orderState
 * @returns {*}
 */
UsersController.getOrders = (id, orderState) => {
    const query = {
        userId: id,
        state: orderState
    };

    return OrdersController.find(query);
};

/**
 * getPendingOrders
 * @param id
 * @returns {*}
 */
UsersController.getPendingOrders = (id) => {
    return this.getOrders(id, "pending");
};

/**
 * getFulfilledOrders
 * @param id
 * @returns {*}
 */
UsersController.getFulfilledOrders = (id) => {
    return this.getOrders(id, "fulfilled");
};

module.exports = UsersController;
