var async = require('async'); 
var couch = require('./couchdb');

module.exports = initCouch;

var databases = ['token_details','order_details'];

function initCouch(cb) {  
    createDatabases(cb);
  }
  
function createDatabases(cb) {  
    async.each(databases, createDatabase, cb);
}
function createDatabase(db, cb) {  
    couch.db.create(db, function(err) {
        if (err && err.statusCode != 412) {
            console.error(err);
        } else if(err === null){
            console.log('New database ' +db+' created');
        }else {
            console.log('database '+db+' already exists');
        }
        cb();
    });
}
