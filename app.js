var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000;




app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/', function(req, res){
  res.render('index');
})


app.listen(port, function(){
    console.log('Server started ....');
})
