const http = require('http');

const express = require('express');

const app = express();

/* Middleware by express.js - START */
// The use function is used to handle the request and pass on the control to next use handler is needed. 
// There can be multiple use functions that do certain task such as handling the incoming request based on routing

app.use('/',(request, response, next) => {
    console.log('Default middleware and will execute for all the incoming request');
    // To perform actions common to all the use method, such an use() method can be used.
    // Pass on the execution control to next use() method.
    next();
});

app.use('/product-request',(request, response, next) => {
    console.log('In another middleware');
    // Send is a method provided by express.js to send the response back to requester. It simplifies the response send part.
    response.send('<h1>Response for create product</h1>');
});

app.use('/',(request, response, next) => {
    // This middleware will execute if "/create-product" middleware does not trigger
    console.log('Default middleware');
    response.send('<h1>Response from default use handler</h1>');
});

/* Middleware by express.js - END */

//const server = http.createServer(app);
//server.listen(3000);

app.listen(3000); // it acts a shortcut for above two lines.