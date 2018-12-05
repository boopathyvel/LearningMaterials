var fs = require('fs');

// synchronised file reading
var data = fs.readFileSync('readme.txt','utf8');
console.log('data read : '+data);

// synchronised file writing
var data = fs.writeFileSync('writeme.txt',data);
console.log('writeme.txt file written synchronously');

//Asynchronised file reading
//Asynchronised file writing
fs.readFile('readme.txt','utf8',function(err,data){
    fs.writeFile('writeme.txt',data,function(){
        console.log('writeme.txt file written Asynchronously');
    })
});

// create Directory
fs.mkdir('newDirectory',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('./newDirectory/newFile.txt',data,function(){
            console.log('writeme.txt file written Asynchronously');
        })
    });
});

// remove Directory,delete File
fs.unlink('./newDirectory/newFile.txt',function(){
    fs.rmdir('./newDirectory',function(){
        console.log('directory removed');
    });
});