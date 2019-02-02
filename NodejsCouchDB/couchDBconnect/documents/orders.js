var schemas = require('../../schemas/validator')
var orderDetails = require('../couchdb').use('order_details');

exports.create = schemas.validating('orders', insertOrders);

function insertOrders(order, cb) {  
    orderDetails.insert(order, order.orderId, cb);
};