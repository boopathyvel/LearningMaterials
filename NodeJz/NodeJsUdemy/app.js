const yargs = require('yargs');
var _ = require('lodash');

var command = process.argv;

const arguments = yargs.argv;
// nodemon app.js test health='checkup' flow
console.log('yargs...'+arguments);
console.log('arguments...'+command);

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));