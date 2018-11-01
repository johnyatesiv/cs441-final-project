const Model = require("../models/Users");
const Util = require("./Util");
const OrdersController = require("./OrdersController");
const Q = require("q");

const UsersController = {
    Model: Model
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

