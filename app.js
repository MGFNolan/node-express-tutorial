// CommonJS - every file in node is a module (by default)
// Modules - encapsulated code (only share minimum/what we want)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

// don't necessarily need to assign to a variable if it has a function
// AS LONG as the function is called
require('./7-mind-grenade')

// sayHi("Homer Simpson");
// sayHi(names.person1);
// sayHi(names.person2);