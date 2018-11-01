const Model = require("../models/Orders");
const Util = require("./Util");

const OrdersController = {
    Model: Model
};

/**
 * createUser
 * @param user
 */
OrdersController.createUser = (user) => {
    return Util.create(this.Model, user);
};

/**
 * updateUser
 * @param id
 * @param update
 */
OrdersController.updateUser = (id, update) => {
    return Util.update(this.Model, id, update)
};

/**
 * deleteUser
 * @param id
 * @returns {*}
 */
OrdersController.deleteUser = (id) => {
    return Util.delete(this.Model, id);
};

/**
 * getUser
 * @param id
 * @returns {*}
 */
OrdersController.getUser = (id) => {
    return Util.findById(this.Model, id);
};

/**
 * getOrders
 * @param query
 * @returns {*}
 */
OrdersController.getOrders = (query) => {
    return Util.find(this.Model, query);
};

/**
 * getOrders
 * @param id
 * @param orderState
 * @returns {*}
 */
OrdersController.getOrders = (id, orderState) => {
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
OrdersController.getPendingOrders = (id) => {
    return this.getOrders(id, "pending");
};

/**
 * getFulfilledOrders
 * @param id
 * @returns {*}
 */
OrdersController.getFulfilledOrders = (id) => {
    return this.getOrders(id, "fulfilled");
};

