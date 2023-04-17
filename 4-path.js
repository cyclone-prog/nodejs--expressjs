const path = require('path');

console.log(path.sep);          //returns the seperator used by the platform i.e os

const filePath = path.join('2-creatingModules','main.js');   //joins the path segments provided by name with the appropriate path seperators
console.log(filePath);
// path.join() function takes all of the path segments to be joined as arguments, so you might wonder how it helps.

// The reason path.join() is still useful is that it takes care of joining the path segments using the correct path separator for the platform on which the Node.js code is running. This means that you don't have to manually add the appropriate separator (/ or \) between the segments, which can be error-prone and platform-dependent.

const baseName = path.basename(filePath);       //return only basename i.e lastname
console.log(baseName);
console.log(__dirname);
console.log(__filename);

const absolutePath = path.resolve(__dirname,'2-creatingModules','main.js'); //returns absolute path 
console.log(absolutePath);
// path.resolve() is a function in Node.js that takes one or more arguments (path segments) and returns an absolute path. An absolute path is the full path of a file or folder on a computer, starting from the root directory.