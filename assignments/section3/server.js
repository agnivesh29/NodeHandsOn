const http =  require('http');

const server = http.createServer((request, response) => {
    const basePath = request.url;
    const requestMethod = request.method;

    if(basePath === '/') {
        response.setHeader('status', 'success');
        response.setHeader('statusCode', 200);

        response.write('<html>');
        response.write('<header><title>Section 3 hands on exercise</title></header>');
        response.write('<body><form action="/create-user" method="POST">username: <input type="text" name="username"/><button type="submit">submit</button></form></body>');
        response.write('</html>');
        return response.end();
    } else if(basePath === '/users') {
        response.setHeader('status', 'success');
        response.setHeader('statusCode', 200);

        response.write('<html>');
        response.write('<header><title>Section 3 hands on exercise</title></header>');
        response.write('<body><ul><li>Agni</li><li>Bob</li><li>Cathryn</li></ul></body>');
        response.write('</html>');
        return response.end();
    } else if(basePath === '/create-user' && requestMethod === 'POST') {
        const postBody = [];
        request.on('data', (chunk) => {
            postBody.push(chunk);
        });
        request.on('end', () => {
            const postBodyStr = Buffer.concat(postBody).toString();
            console.log(`post request body: ${postBodyStr}`);
            
        });
        //response.setHeader('status', 'success');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
        


    } 

});

server.listen(3000);
