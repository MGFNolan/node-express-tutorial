// this is a local variable
const secret = "SUPER SECRET";

// this will be made into an exported variable below
const person2 = "Maisie";
const person1 = "Clyro";

module.exports = {person2, person1} //exporting the variable

//console.log(module); //shows us what is in module[exports] object. 
// We control this and what is added to it, which in turn detemrines 
// what can be accessed outside of this file/module


