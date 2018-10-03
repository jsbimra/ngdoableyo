var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feedback = require('../models/Feedback.js');


/* GET All feedbacks */
router.get('/', function(req, res, next) {
  Feedback.find( (err, feedbacks) => {
    if(err) return next(err);
    res.json(feedbacks);
  });
});

/* GET Single feedback by ID */
router.get('/:id', function(req, res, next) {
    Feedback.findById(req.params.id, (err, item) => {
        if(err) return next(err);
        res.json(item);
    });
});

/* Post feedback */
router.post('/', function(req, res, next) {
    Feedback.create(req.body, (err, item) => {
        if(err) return next(err);
        res.json(item);
    });
});

/* Update feedback */
router.put('/:id', function(req, res, next) {
    Feedback.findByIdAndUpdate(req.param.id, req.body, (err, item) => {
        if(err) return next(err);
        res.json(item);
    });
});

/* delete feedback */
router.delete('/:id', function(req, res, next) {
    Feedback.findByIdAndRemove(req.param.id, req.body, (err, item) => {
        if(err) return next(err);
        res.json(item);
    });
});

module.exports = router;

