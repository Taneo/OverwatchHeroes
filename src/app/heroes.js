/**
 * Created by Tobs on 15.06.2017.
 */
var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://Taneo:Bersi1993@ds129402.mlab.com:29402/we2_taneo', ['heroes']);

/**
 * Get all Heroes
 */
router.get('/heroes', function(req, res, next) {
	db.heroes.find(function(err, heroes) {
		if(err) {
			res.send(err);
		}
		res.json(heroes);
	});
});

/**
 * Get a single Hero
 */
router.get('/hero/:id', function(req, res, next) {
	db.heroes.findOne({_id: mongojs.ObjectID(req.params.id)}, function(err, hero) {
		if(err) {
			res.send(err);
		}
		res.json(hero);
	});
});

/**
 * Save Hero
 * test in progress
 */
router.post('/hero', function(req, res, next) {
	var hero = req.body;
	if(!hero.name) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.heroes.save(hero, function(err, hero) {
			if(err) {
				res.send(err);
			}
			res.json(hero);
		});
	}
});

/**
 * Delete Hero
 */
router.delete('/hero/:id', function(req, res, next) {
	db.heroes.remove({_id: mongojs.ObjectID(req.params.id)}, function(err, hero) {
		if(err) {
			res.send(err);
		}
		res.json(hero);
	});
});

/**
 * Update Hero
 * test in progress
 */
router.put('/hero/:id', function(req, res, next) {
	var hero = req.body;
	var updHero = {};

	if(hero.roleid){
		updHero.roleid = hero.roleid;
	}

	if(hero.name){
		updHero.name = hero.name;
	}

	if(!updHero) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.heroes.update({_id: mongojs.ObjectID(req.params.id)}, updHero, {}, function(err, hero) {
			if(err) {
				res.send(err);
			}
			res.json(hero);
		});
	}
});


module.exports = router;


