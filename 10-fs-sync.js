//another way of accessing. Can still write const fs = require('fs')
const {readFileSync, writeFileSync} =  require('fs');
console.log('start')
//remember that readFileSync is a function being called. It is accessed from fs above.
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


//If the file is not there, writeFileSync will create it. If it DOES exist, it will OVERWRITE it
//flag:'a' appends the file you are writing instead
writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`,
{flag: 'a',}
)

console.log('done with this task')
console.log('starting the next one')