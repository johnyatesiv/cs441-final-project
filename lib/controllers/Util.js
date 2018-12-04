/** Dependencies **/
const Q = require("q");

/** Module **/
const Util = {};


/**
 * findById
 * @param Model
 * @param id
 * @returns {*}
 */
Util.findById = function(Model, id) {
    const deferred = Q.defer();

    Model.findById(id).then(instance => {
        deferred.resolve(instance);
    }).catch(err => {
        _modelErrorHandler(err, deferred);
    });

    return deferred.promise;
};

/**
 * find
 * @param Model
 * @param query
 * @param order
 * @returns {*}
 */
Util.find = function(Model, query, order) {
    const deferred = Q.defer();

    if(!query) {
        query = {include: [{ all: true, nested: true }], where: {}};
    } else {
        query = {include: [{ all: true, nested: true }], where: query};
    }

    if(order) {
        query.order = order;
    }

    Model.findAll(query).then(instances => {
        deferred.resolve(instances);
    }).catch(err => {
        _modelErrorHandler(err, deferred);
    });

    return deferred.promise;
};

/**
 * create
 * @param Model
 * @param object
 * @returns {*}
 */
Util.create = function(Model, object) {
    const deferred = Q.defer();

    Model.build(object).save().then(instance => {
        deferred.resolve(instance);
    }).catch(err => {
        deferred.reject(err);
    });

    return deferred.promise;
};

/**
 * update
 * @param Model
 * @param id
 * @param update
 * @returns {*}
 */
Util.update = function(Model, id, update) {
    const deferred = Q.defer();

    Model.findById(id).then(instance => {
        instance.update(update).then(() => {
            deferred.resolve(true);
        }).catch(err => {
            deferred.reject(err);
        });
    }).catch(err => {
        deferred.reject(err);
    });

    return deferred.promise;
};

/**
 * delete
 * @param Model
 * @param id
 * @returns {*}
 */
Util.delete = function(Model, id) {
    const deferred = Q.defer();

    Model.findById(id).then(instance => {
        instance.destroy().then(() => {
            deferred.resolve(true);
        }).catch(err => {
            deferred.reject(err);
        });
    }).catch(err => {
        deferred.reject(err);
    });

    return deferred.promise;
};

_modelErrorHandler = (err, promise) => {
    promise.reject(err);
};

module.exports = Util;