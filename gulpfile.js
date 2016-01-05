var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var beautify = require('gulp-beautify');
var jade = require('gulp-jade');
var jasmine = require('gulp-jasmine');
var less = require('gulp-less');
var path = require('path');
var mocha = require('gulp-mocha');
var layout = require('gulp-layout');
var toJson = require('gulp-to-json');
var toJson = require('gulp-concat');


//convert coffeeScript to javaScript
gulp.task('coffee', function() {
	gulp.src('components/coffee/*.coffee')
		.pipe( coffee ( { bare: true } ) )
		.on('error', gutil.log)
		.pipe( gulp.dest( 'components/scripts' ) );
});

//Indentation of coffeeScript to javaScript
gulp.task('beautify', function() {
  	gulp.src('components/coffee/*.coffee')
	    .pipe(beautify({indentSize: 2}))
	    .pipe(gulp.dest('components/scripts'))
});

//convert jade to html
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('public/views/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('builds/development/html'))
});

//Testing javaScript
gulp.task('test', function () {
	return gulp.src('components/scripts/*.js')
		.pipe(jasmine());
});

//convert less to css
gulp.task('less', function () {
	return gulp.src('components/sass/*.scss')
	    .pipe(less({
	      paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
	    .pipe(gulp.dest('builds/development/css'));
});

//Testing javaScript
gulp.task('test-mocha', function () {
	return gulp.src('components/scripts/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

//convert html to json
gulp.task('tojson', function () {
  	gulp.src('builds/development/html/*.html')
  		.pipe(toJson({
     	strip: /^.+\/?\\?public\/?\\?/ //create just file names by removing everything from left of public/ folder  
  	}));
});

