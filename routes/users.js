var express = require('express');
var router = express.Router();
var userService = require('../server/services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users/craeet */
router.get('/create', function(req, res, next) {
	res.render('jade/users/create', { 
		title: 'Create an account', 
		message: 'Please fiil out the below form.'
	});
});

/* POST users/craeet */
// router.post('/create', function(req, res, next) {
// 	userService.addUser(req.body, function(err){
// 		if(err){
// 			var wm = {
// 				title: 'Create an account',
// 				message: 'Please fiil out the below form.'
// 				// input: req.body,
// 				// error : 'something went wrong!'
// 		};
// 		delete wm.input.password;
// 		res.render('jade/users/craete', wm);
// 	});
// 	// res.redirect('/orders');
// });

module.exports = router;