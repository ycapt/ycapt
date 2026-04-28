const http = require('http');
const fs = require('fs');
const secret = require('./src/secret');

http.createServer((req,res)=>{
    switch (req.url.split('?')[0]) {
        case "/":
            break;
        case "/api/create":
            break;
        case "/api/verify":
            break;
    }
}).listen(4824);
