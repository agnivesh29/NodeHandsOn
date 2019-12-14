const http = require('http');

const nodeServer = http.createServer((request, response) => {
    console.log(request);
});

nodeServer.listen(8000);