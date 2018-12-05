var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send('This is the Home Page');
});

app.get('/contact',function(req,res){
    res.send('This is the Contact Page');
});

//dynamic
app.get('/perfect/:name',function(req,res){
    res.send('The Id is '+req.params.id);
});
                                        // TEMPLATING
// using ejs
app.get('/profile/:id',function(req,res){
    var data = {age:'12',hobbies:['jogging','cycling']};
    res.render('profile',{id:req.params.id,data:data});
});

// send html files
app.get('/viewhtml',function(req,res){
    res.sendFile(__dirname+'/index.html');
});










app.post('/contact',function(req,res){
    res.send('This is the Contact Page');
});

app.delete('route',function(req,res){

});

app.listen(3000);
