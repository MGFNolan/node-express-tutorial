// This gives us access to all the properties of os
const os = require('os')

// method returns info about current user

const user = os.userInfo();
console.log(user);

// method return the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)
console.log(`the system uptime is ${(os.uptime())/60} minutes`)
console.log(`the system uptime is ${((os.uptime())/60)/60} hours`)


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);