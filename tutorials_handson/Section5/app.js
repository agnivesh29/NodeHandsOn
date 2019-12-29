// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin.js');
const customerRouter = require('./routes/customer.js');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(customerRouter);



/* Middleware by express.js - END */

//const server = http.createServer(app);
//server.listen(3000);

app.listen(3000); // it acts a shortcut for above two lines.