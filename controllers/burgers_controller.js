var express = require('express');
var burgers = require('../models/burgers.js');

var router = express.Router();

router.get('/', function(req, res) {
    burgers.selectAll(function(result) {
        res.render('index', {allBurgers: result});
    });
});

router.post('/api/burgers', function(req, res) {
    burgers.insertOne('burger_name', 'devoured', req.body.name, req.body.devoured, function(result) {
        res.json(result);
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burgers.updateOne('devoured', {devoured: req.body.devoured}, 'id', req.params.id, function(result) {
        res.status(200).end();
    });
});

module.exports = router;