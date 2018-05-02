var express = require('express');
var app = express();
var router = require('./routes/routes.js');
var bodyParser = require('body-parser');
var port =  process.env.PORT || 3000;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router);

app.listen(port, function(){
	console.log('Server running...');
})
