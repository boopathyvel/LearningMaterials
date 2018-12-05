var fs = require('fs');

var data = {
    title:'Hello',
    body:'my name is ram'
};

fs.writeFileSync('writeme.txt',JSON.stringify(data));