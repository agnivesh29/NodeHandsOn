const http = require('http');

const express = require('express');

const app = express();

http.createServer(app);

app.use('/users', (request, response, next) => {
    console.log('middleware handler for /users endpoint');
    response.send('<h1>Response from /user handler</h1>')
});

app.use('/', (request, response, next) => {
    console.log('middleware handler for / endpoint');
    response.send('<h1>Response from / handler</h1>')
});

app.listen(3000);