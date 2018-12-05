var express = require('express');
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended:false});

var app = express();

app.set('view engine','ejs'); 
app.use('/assets',express.static('assets'));


app.post('/profile',urlEncodedParser, function(req,res){
    console.log('req.body'+req.body);
    console.log('req.query'+req.query);
    var data = {age:'12',hobbies:['jogging','cycling']};
    res.render('profile',{id:req.params.id,data:data});
});


app.get('/profile',function(req,res){
    var data = {age:'12',hobbies:['jogging','cycling']};
    res.render('profile',{qs:req.query,data:data});
});

app.listen(3000);