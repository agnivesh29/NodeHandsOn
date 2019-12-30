const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

/* Middleware by express.js - START */
// The use function is used to handle the request and pass on the control to next use handler is needed. 
// There can be multiple use functions that do certain task such as handling the incoming request based on routing

// router.use('/',(request, response, next) => {
//     console.log('Default middleware and will execute for all the incoming request');
//     // To perform actions common to all the use method, such an use() method can be used.
//     // Pass on the execution control to next use() method.
//     next();
// });


// This route is handled for "/admin/add-product" => GET
router.get('/add-product',(request, response, next) => {
    console.log('In another middleware');
    // Send is a method provided by express.js to send the response back to requester. It simplifies the response send part.
    
    // response.send('<h1>Response for create product</h1><form action="/admin/add-product" method="POST"><input type="text" name="Product Name" label="Product Name"/><button type="submit" label="Submit">Submit</button></form>');
    
    // response.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    
    // better way to generate the path
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


// This route is handled for "/admin/add-product" => POST
router.post('/add-product', (request, response, next) => {
    console.log('/product  handler');
    console.log(`Request body ${JSON.stringify(request.body)}`);
    response.redirect('/'); // redirect() is used to pass the control to another url or path.
});

module.exports = router;