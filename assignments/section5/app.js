// const http = require('http');
const path = require('path');
const express = require('express');

const rootDir = require('./util/path.js');

const app = express();

app.use(express.static(
    path.join(rootDir, 'public')
));

app.get('/users', (request, response, next) => {
    console.log('middleware handler for /users endpoint');
    response.sendFile(path.join(rootDir, 'view', 'user.html'));
});

app.get('/', (request, response, next) => {
    console.log('middleware handler for / endpoint');
    // response.send('<h1>Response from / handler</h1>')
    response.sendFile(path.join(rootDir, 'view', 'common.html'));
});

/* below code block will never execute */
app.use((request, response, next) => {
    console.log('Default path handler');
    response.sendFile(path.join(
        rootDir,
        'view',
        '404.html'
    ))
});

app.listen(3000);