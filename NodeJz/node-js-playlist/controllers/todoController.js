var bodyParser = require('body-parser');
var data = [{item:'milk'},{item:'walk dog'},{item:'kick some'}];

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    });

    app.post('/todo',urlencodedParser,function(req,res){
        console.log('req.body....'+req.body);
        data.push({item:'New'});
        res.json(data);
    });

    app.delete('/todo/:item',function(req,res){
        console.log('inside todo delete item....');
        data = data.filter(function(todo){
            return todo.item.replace(/ /g,'-') !== req.params.item;
        });

        res.json(data);
    });
};
