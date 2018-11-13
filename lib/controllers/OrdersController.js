const Model = require("../models/Orders");
const Util = require("./Util");

/**
 *
 * @type {{Model: *}}
 */
const OrdersController = {
    Model: Model
};

/**
 * createOrder
 * @param order
 */
OrdersController.createOrder = (order) => {
    return Util.create(this.Model, order);
};

/**
 * updateOrder
 * @param id
 * @param update
 */
OrdersController.updateOrder = (id, update) => {
    return Util.update(this.Model, id, update)
};

/**
 * deleteUser
 * @param id
 * @returns {*}
 */
OrdersController.deleteorder = (id) => {
    return Util.delete(this.Model, id);
};

/**
 * getUser
 * @param id
 * @returns {*}
 */
OrdersController.getOrder = (id) => {
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
 * getPendingOrders
 * @param id
 * @returns {*}
 */
OrdersController.getPendingOrders = (id) => {
    return this.getOrders(id, {state: "pending"});
};

/**
 * getFulfilledOrders
 * @param id
 * @returns {*}
 */
OrdersController.getFulfilledOrders = (id) => {
    return this.getOrders(id, {state: "fulfilled"});
};

module.exports = OrdersController;