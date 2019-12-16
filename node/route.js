const fs = require('fs');

const requestHandler = (request, response) => {
    /***** Request data handling in Node *****/
    /*** Node handles the request data as Streams 
     * Request data is retrieved in chunks
     * To use these chunks, buffer is used (is euivalent to bus stops where buses stops and passengers can hop into/off the bus)
     * Node provides method that acts as event linstener for these stream
     *  e.g. request.on('data', (chunk) => {
     *      // do some action such as store the streams in variable to work on later
     *  })
     *  Once Node receives all the strams, it executes an 'end' method to mark the completion.
     *  Event handler can be hooked to this method to take some action once the stream receipt is complete
     * ***/


    // console.log(request.url, request.headers);
    const path = request.url;
    const method = request.method;

    if(path === '/') {
        response.write('<html>');
        response.write('<header><title>Response from my Node server</title></header>');
        response.write('<body> <form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    } else if(path === '/message' && method === 'POST') {
        requestBody = [];
        request.on('data', chunk => {
            console.log(chunk);
            requestBody.push(chunk);
        });
        return request.on('end', () => {
            const requestBodyStr = Buffer.concat(requestBody).toString();
            console.log(requestBodyStr);
            const message = requestBodyStr.split('=')[1];
            // fs.writeFileSync('Message.txt', messsage); 
            // writeFileSync creates and writes into the file sync but this method should not be used as it is a blocking operation.
            fs.writeFile('Message.txt', message, () => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
            
        });

        
    }

    


    response.write('<html>');
    response.write('<header><title>Response from my Node server</title></header>');
    response.write('<body><h1>This is the first response from NodeJS server.</h1></body>');
    response.write('</html>');

    response.end();
}
    
module.exports = requestHandler;