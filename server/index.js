/**
 * Created by Tobs on 17.06.2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index.html');
});

module.exports = router;