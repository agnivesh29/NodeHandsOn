const http =  require('http');
const route = require('./route.js');

const nodeServer = http.createServer(route);

nodeServer.listen(8000);

