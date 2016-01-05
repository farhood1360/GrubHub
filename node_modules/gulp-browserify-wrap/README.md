gulp-browserify-wrap
====================

**Disclaimer** _This plugin is still in an alpha stage. Please be patient as bugs are discovered and resolved and features are added. I will also be adding tests to ensure that this plugin will always work with all browserify transforms and conforms to the standard that is expected of gulp plugins. I encourage you to help me with this by adding your own test cases and submitting a pull request._

[![Build Status](https://travis-ci.org/call-a3/gulp-browserify-wrap.svg?tag=0.1.0)](https://travis-ci.org/call-a3/gulp-browserify-wrap)
[![Dependency Status](https://david-dm.org/call-a3/gulp-browserify-wrap.svg)](https://david-dm.org/call-a3/gulp-browserify-wrap) [![devDependency Status](https://david-dm.org/call-a3/gulp-browserify-wrap/dev-status.svg)](https://david-dm.org/call-a3/gulp-browserify-wrap#info=devDependencies)

Gulp plugin that allows the use of browserify transforms in a gulp pipeline.

## Installation

[![gulp-browserify-wrap](https://nodei.co/npm/gulp-browserify-wrap.png?mini=true)](https://nodei.co/npm/gulp-browserify-wrap)

## Usage

```javascript
var wrap = require('gulp-browserify-wrap');
var browserifyTransform = require('some-browserify-transform');

gulp.src('...')
	.pipe(wrap(browserifyTransform()))
	.pipe(gulp.dest('...'));
```

## License
[MIT](http://github.com/call-a3/gulp-browserify-wrap/blob/master/LICENSE)

## Requested features
 - A lot more tests
 - Support for sourcemaps
