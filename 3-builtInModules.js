/*----------------------------
Some of the built in modules we will be looking into
-PATH
-FS
-HTTP
---------------------------------*/
// os module
const os = require('os');

console.log(os.userInfo());             //information about current user

console.log(`${os.uptime()} seconds`);  //system uptime in seconds

const osData = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(osData);