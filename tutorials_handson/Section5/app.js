// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin.js');
const customerRouter = require('./routes/customer.js');
const rootDir = require('./util/path.js')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRouter);  // the path prefix can be added to the use method, express js will match the remaining path
app.use(customerRouter);

/* enabling a read-only accees to "public" folder for static file serving. */
app.use(express.static(path.join(__dirname, 'public')));

// Default handler to send 404 response
app.use((request, response, next) => {
    response.status(400).sendFile(
        path.join(rootDir, 'views', '404.html') // here the path creation arguments are different since app.js is placed in the root folder unlike admin.js/customer.js that are in the routes folder.
    )
});

/* Middleware by express.js - END */

//const server = http.createServer(app);
//server.listen(3000);

app.listen(3000); // it acts a shortcut for above two lines.