//stage 1 of node application (basic stage to run node http app)

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    //routing
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        //redirect codes
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send a single html file
//     fs.readFile('./views/index.html', (err, data) => {
//        if (err) {
//         console.log(err);
//         res.end();
//        } else {
//         res.write(data);
//         res.end();
//        }
//     })

// send html file routing
fs.readFile(path, (err, data) => {
    if (err) {
     console.log(err);
     res.end();
    } else {
     res.write(data);
     res.end();
    }
 })
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});