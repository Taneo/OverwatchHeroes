/**
 * Created by Tobs on 15.06.2017.
 */
/*
 var express    = require('express');
 var app        = express();
 var bodyParser = require('body-parser');
 var mongoose   = require('mongoose');

 Heroes = require('./heroes.js');

 mongoose.connect('mongodb://Taneo:Bersi1993@ds129402.mlab.com:29402/we2_taneo');
 var db = mongoose.connection;

 app.get('/', function(req, res) {
 res.send("Hello World");
 });

 app.get('/api/heroes', function(req, res) {
 Heroes.getHeroes(function(err, heroes) {
 if(err) {
 throw err;
 }
 res.send(heroes);
 console.log(heroes[0]);
 })
 });

 app.listen(3000);
 console.log("Running on port 3000 ...");*/

var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var heroes     = require('./heroes.js');
var index      = require('./index.js');
var port       = 3000;
var app        = express();

app.set('views', path.join(__dirname + '/../src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use(express.static(path.join(__dirname + "/src/app")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', heroes);

app.listen(port, function() {
	console.log("Running on port " + port);
});