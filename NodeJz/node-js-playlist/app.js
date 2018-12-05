var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine','ejs');

// static files`
app.use(express.static('./public'));

//fire controllers
todoController(app);

app.listen(3001);
console.log('listening at port 3001..started');
