const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js')

const router = express.Router();

router.get('/',(req, response, next) => {
    // This middleware will execute if "/create-product" middleware does not trigger
    console.log('Default middleware');
    // response.send('<h1>Response from default use handler</h1>');
    response.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;

