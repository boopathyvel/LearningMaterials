var events = require('events');
var util = require('util');


var eventEmitter = new events.EventEmitter();

eventEmitter.on('below',function(content){
    console.log('content',content);
});

eventEmitter.emit('below','hurray');

var Person = function(name){
    this.name = name;
};

util.inherits(Person,events.EventEmitter);

var james = new Person('JAMES');
var ram = new Person('RAM');
var sathish = new Person('SATHISH');

var arrays = [james,ram,sathish];

arrays.forEach(function(person){
    person.on('speak',function(message){
        console.log('My Name is '+ person.name + '...' +message);
    });
});

james.emit('speak','James Cool');
ram.emit('speak','Ram Cool');
sathish.emit('speak','Sathish Cool');