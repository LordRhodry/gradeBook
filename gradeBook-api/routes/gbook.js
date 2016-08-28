var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/roster.js');
var Assessment = require('../models/assess.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Student.find(function (err, roster) {
    if (err) return next(err);
    Assessment.find(function (err, assessments) {
      res.json({"roster":roster,"assessments":assessments});
    })
    
  });
});


// coping all this unused code from a previous tutorial as a quick reference to an implementation example for post , id get ...
/* POST /todos  */
/*router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
/*router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
/*router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});*/

module.exports = router;
