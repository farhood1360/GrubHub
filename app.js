// BASE SETUP
// ==============================================
var express = require('express');
var http = require('http'); 
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var dbURI = 'mongodb://localhost:27017'; 

// ROUTES
// ==============================================
var routes = require('./routes/index');
var users = require('./routes/users');
// var orders = require('./routes/orders');
// var config = require('./config');

// START THE SERVER
// ==============================================
var app = express();
var port = process.env.PORT || 8081;
app.listen(port, function() {
    console.log(new Date().toISOString() + ": server started on port " + port);
});

// http.createServer(function (req, res) {  
//   pages.index(req, res);
// }).listen(8081, '27017');

// // Create the database connection 
// mongoose.connect(dbURI);

// // CONNECTION EVENTS
// // When successfully connected
// mongoose.connection.on('connected', function () {  
//   console.log('Mongoose default connection open to ' + dbURI);
// }); 

// // If the connection throws an error
// mongoose.connection.on('error',function (err) {  
//   console.log('Mongoose default connection error: ' + err);
// }); 

// // When the connection is disconnected
// mongoose.connection.on('disconnected', function () {  
//   console.log('Mongoose default connection disconnected'); 
// });

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
// app.get('/', routes.index);
// app.get('/:name', routes.view);
// app.get('/partials/:name', routes.partials);

// redirect all others to the index (HTML5 history)
app.get('*', routes);

app.route('/login')

    // show the form (GET http://localhost:8081/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8081/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });


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
