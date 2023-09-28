/*
  File: index.server.routes.js
  Student: Yza Castro
  Student ID: 301-272-405
  Date: September 28, 2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact Informations' });
});

module.exports = router;
