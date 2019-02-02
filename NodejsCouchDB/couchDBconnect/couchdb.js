var nano = require('nano');
module.exports = nano(process.env.COUCHDB_URL || 'http://dexdev:123456@68.183.180.9:5984');