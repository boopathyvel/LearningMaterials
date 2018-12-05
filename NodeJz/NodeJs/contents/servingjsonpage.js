var http = require('http');
var fs = require('fs');

// readable & writable & duplex streams
var readStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
var writeStream = fs.createWriteStream(__dirname+'/writestream.txt');

/*
readStream.on('data',function(chunk){
    console.log('new Chunk : ');
    writeStream.write(chunk);
});
*/

//The above can be re-written with piping
readStream.pipe(writeStream);

// piping the data in response
var server = http.createServer(function(request,response){
    console.log('request url :'+request.url);
    response.writeHead(200,{'Content-Type':'application/json'});
    var returnObject = {
        'a':1,
        'b':2,
        'c':3
    };
    response.end(JSON.stringify(returnObject));
});

server.listen('3000','127.0.0.1');
console.log('listening at port : 3000');

//run 127.0.0.1:3000 in browser