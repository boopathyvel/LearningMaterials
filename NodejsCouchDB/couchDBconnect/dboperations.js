const couchDB = require('./app');
var tokens = require('./documents/tokens');
var orders = require('./documents/orders');

module.exports.insertTokens = function(tokenDetail){
    tokens.create(tokenDetail, function(err) {  
        if (err) {
          throw err;
        }else {
          console.log('token inserted');
        }
    });
}

module.exports.insertOrders = function(orderDetail){
    orders.create(orderDetail, function(err) {
        if (err) {
          throw err;
        }else {
          console.log('token inserted');
        }
    });
}