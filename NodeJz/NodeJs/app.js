var events = require('events');
var file = require('fs');
var util = require('util');
var http = require('http');

var myEmitter = new events.EventEmitter();

myEmitter.on('hello',function(obj){
    console.log(obj.sale+obj.k);
});

myEmitter.emit('hello',{sale:'sale',k:'bye'});
