const http = require('http');
const fs = require('fs');
const secret = require('./src/secret');

http.createServer((req,res)=>{
    switch (req.url.split('?')[0]) {
        case "/":
            res.end(fs.readFileSync('./site.html'));
            break;
        case "/api/create":
            break;
        case "/api/verify":
            const code = new URL("http://so.me"+req.url).searchParams.get("code");
            if(code){

            }else{
                res.writeHead(401,{})
                res.end(`{"status":"failed"}`)
            }
            break;
    }
}).listen(4824,()=>{
    console.log('  == Started Webserver ==  ');
});
