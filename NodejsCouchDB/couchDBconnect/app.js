var initCouch = require('./initialize_databases');

initCouch(function(err) {  
    console.log('couchdb initialized');
});