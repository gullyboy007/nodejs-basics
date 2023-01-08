const path = require('path');
const util = require('util');


console.log(path.basename(__filename))

//custom path

console.log(path.join(__dirname, './main.js'))
console.log(util.log(path.basename(__filename)))