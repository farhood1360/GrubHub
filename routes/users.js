var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users/view */
router.get('/view', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
