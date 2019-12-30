const path = require('path')
console.log('path.js | directory name: %s ',path.dirname(process.mainModule.filename));
module.exports = path.dirname(process.mainModule.filename);