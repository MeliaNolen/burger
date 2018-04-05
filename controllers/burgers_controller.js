var express = require('express');
var burgers = require('../models/burgers.js');

var router = express.Router();

router.get('/', function(req, res) {
    burgers.selectAll(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(result) {
        console.log(result);
    });
});

router.post('/api/burgers', function(req, res) {
    burgers.insertOne('burger_name', 'devoured', req.body.name, req.body.devoured, 'id', req.params.id, function(result) {
        console.log(result);
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burgers.updateOne('burger_name', req.body.name, 'devoured', req.body.devoured, function(result) {
        console.log(result);
    });
});

