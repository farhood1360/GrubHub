// BASE SETUP
// ==============================================
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jade/index', { title: 'Home', message: 'Collaborata' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.send("Welcome to Collaborata Website!");
});

/* GET sign-up page. */
router.get('/sign-up', function(req, res, next) {
  // res.render('signup', { title: 'Sign Up' });
  res.send("Please fill out the below form <a href='/login'>login</a>!");
});

// route with parameters
router.get('/contact/:name', function(req, res) {
    res.send('Hi ' + req.params.name + ", Thanks for visting the site! Be sure to <a href='/login'>login</a>!");
});

module.exports = router;
