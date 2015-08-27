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
  res.render('jade/about', { title: 'About Us' });
});

/* GET about/company page. */
router.get('/about/company', function(req, res, next) {
  res.render('jade/about-company', { title: 'About Company' });
});

/* GET about/team page. */
router.get('/about/team', function(req, res, next) {
  res.render('jade/about-team', { title: 'About Team' });
});

/* GET log-in page. */
router.get('/login', function(req, res, next) {
  res.render('jade/login', { title: 'Log In' });
});

/* POST log-in page. */
router.post('/login', function(req, res, next) {
  	console.log('processing');
    res.redirect('/');
});

/* GET sign-up page. */
router.get('/sign-up', function(req, res, next) {
  res.render('jade/signup', { title: 'Sign-Up' });
});

/* GET sign-up/consumer page. */
router.get('/sign-up/consumer', function(req, res, next) {
  res.render('jade/signup-consumer', { title: 'Sign Up As Consumer' });
});

/* POST sign-up/consumer page. */
router.post('/sign-up/consumer', function(req, res, next) {
  	console.log('processing');
    res.redirect('/login');
});

/* GET sign-up/vendor page. */
router.get('/sign-up/vendor', function(req, res, next) {
  res.render('jade/signup-vendor', { title: 'Sign Up As Vendor' });
});

/* POST sign-up/vendor page. */
router.post('/sign-up/vendor', function(req, res, next) {
  	console.log('processing');
    res.redirect('/login');
});

/* GET project preview page. */
router.get('/projects', function(req, res) {
    res.render('jade/projects', { title: 'Preview Create Project' });
});

/* GET created project page. */
router.get('/projects/create', function(req, res) {
    res.render('jade/projects-craete', { title: 'Create New Project' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
    res.render('jade/contact', { title: 'Contact' });
});

module.exports = router;
