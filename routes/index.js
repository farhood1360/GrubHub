// BASE SETUP
// ==============================================
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jade/index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('jade/about', { title: 'About' });
});

/* GET sign-up page. */
router.get('/sign-up', function(req, res, next) {
  res.render('jade/signup', { title: 'Sign-Up' });
});

/* GET sign-up/consumer page. */
router.get('/sign-up/consumer', function(req, res, next) {
  res.render('jade/signup-consumer', { title: 'Sign Up As Consumer' });
});

/* GET sign-up/vendor page. */
router.get('/sign-up/vendor', function(req, res, next) {
  res.render('jade/signup-vendor', { title: 'Sign Up As Vendor' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
    res.render('jade/contact', { title: 'Contact' });
});

module.exports = router;
