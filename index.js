var moment = require("moment");

console.log("test");
console.log(moment().add(1, 'days').calendar()); 

var numeral = require('numeral');

console.log("numeral");
console.log(numeral('$10,000.00'));

// console.log("before babel");
// var bob = {
//   _name: "Bob",
//   _friends: [],
//   printFriends() {
//     this._friends.forEach(f =>
//       console.log(this._name + " knows " + f));
//     console.log(this._friends);
//   }
// };
// `In ES5 this is
//  not legal.`;
//  console.log(
//   `In ES5 this is
//  not legal.`
//   );
// console.log("after babel");
