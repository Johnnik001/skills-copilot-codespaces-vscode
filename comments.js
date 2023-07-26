// create web server
// create a route for comments
// create a route for comments/new
// create a route for comments/:id
// create a route for comments/:id/edit
// create a route for comments/:id/delete

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// create web server
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// create a route for comments
router.get('/comments', function(req, res, next) {
  knex('comments').then(function(data) {
    res.json(data);
  });
});

// create a route for comments/new
router.get('/comments/new', function(req, res, next) {
  res.send('respond with a resource');
});

// create a route for comments/:id
router.get('/comments/:id', function(req, res, next) {
  res.send('respond with a resource');
});

// create a route for comments/:id/edit
router.get('/comments/:id/edit', function(req, res, next) {
  res.send('respond with a resource');
});

// create a route for comments/:id/delete
router.get('/comments/:id/delete', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;