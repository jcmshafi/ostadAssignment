const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {

    if (req.url === '/' || req.url === '/home') {
        let data=fs.readFileSync('./public/index.html','utf8')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
    else if (req.url === '/style.css') {
        let data=fs.readFileSync('./public/style.css','utf8')
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
    }
    else if(req.url === '/about') {
        let data=fs.readFileSync('./public/about.html','utf8');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
    }
    else if(req.url === '/contact') {
        let data=fs.readFileSync('./public/contact.html','utf8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
    else
        res.end("404 Not Found");
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


