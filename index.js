var moment = require("moment");

console.log("test");
console.log(moment().add(1, 'days').calendar()); 

var numeral = require('numeral');

console.log("numeral");
console.log(numeral('$10,000.00'));
