const path = require('path');

module.exports = path.dirname(process.mainModule.filename); // returns the directory path
// process.mainModule.filename - returns the file name that started the module.