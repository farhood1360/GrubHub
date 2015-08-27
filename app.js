// BASE SETUP
// ==============================================
var express = require('express');
var http = require('http'); 
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/collaborata'; 

// ROUTES
// ==============================================
var routes = require('./routes/index');
var users = require('./routes/users');
// var config = require('./config');

// START THE SERVER
// ==============================================
var app = express();
var port = process.env.PORT || 8081;
app.listen(port, function() {
    console.log(new Date().toISOString() + ": server started on port " + port);
});

// Create the database connection 
mongoose.connect(dbUrl);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbUrl);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

var db = mongoose.connection;


// view engine setup
app.set('views', path.join(__dirname, '/public/views'));
// app.set('view engine', 'hjs');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// apply the routes to application
app.use('/', routes);
app.use('/users', users);

// redirect all others to the index (HTML5 history)
app.get('*', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
