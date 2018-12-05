var express = require('express');
 
var app = express();

app.set('view engine','ejs'); 

//middleware implementation
app.use('/profiles/:id',function(req,res,next){
//middleware starts

//middleware ends
    next();
});
//statis file accessing
app.use('/assets',express.static('assets'));

app.get('/profile/:id',function(req,res){
    var data = {age:'12',hobbies:['jogging','cycling']};
    res.render('profile',{id:req.params.id,data:data});
});

app.listen(3000);