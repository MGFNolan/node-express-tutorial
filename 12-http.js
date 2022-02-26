const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage. This is amazing');
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!</h1>
    
    <p>The page you are looking for is not here</p>
    
    <a href="/">Back home</a>`)
})

server.listen(5000);