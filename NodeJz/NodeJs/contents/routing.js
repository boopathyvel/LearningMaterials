var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
var writeStream = fs.createWriteStream(__dirname+'/writestream.txt');

// routing the data in response
var server = http.createServer(function(request,response){
    console.log('request url :'+request.url);
    if(request.url === '/home' || request.url === '/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html','utf8').pipe(response);
    }else if(request.url === 'contact'){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end('Contact Number : 1234567890');
    }
});

server.listen('3000','127.0.0.1');
console.log('listening at port : 3000');

//run 127.0.0.1:3000 in browser