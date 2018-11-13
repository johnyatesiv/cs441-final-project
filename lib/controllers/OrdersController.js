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
OrdersController.createOrder = function(order) {
    return Util.create(this.Model, order);
};

/**
 * updateOrder
 * @param id
 * @param update
 */
OrdersController.updateOrder = function(id, update) {
    return Util.update(this.Model, id, update)
};

/**
 * deleteUser
 * @param id
 * @returns {*}
 */
OrdersController.deleteorder = function(id) {
    return Util.delete(this.Model, id);
};

/**
 * getUser
 * @param id
 * @returns {*}
 */
OrdersController.getOrder = function(id) {
    return Util.findById(this.Model, id);
};

/**
 * getOrders
 * @param query
 * @returns {*}
 */
OrdersController.getOrders = function(query) {
    return Util.find(this.Model, query);
};

/**
 * getPendingOrders
 * @param id
 * @returns {*}
 */
OrdersController.getPendingOrders = function(id) {
    return this.getOrders(id, {state: "pending"});
};

/**
 * getFulfilledOrders
 * @param id
 * @returns {*}
 */
OrdersController.getFulfilledOrders = function(id) {
    return this.getOrders(id, {state: "fulfilled"});
};

module.exports = OrdersController;