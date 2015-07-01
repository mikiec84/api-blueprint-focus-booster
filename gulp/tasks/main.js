var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../../config/config.js');
var soften = require('gulp-soften');
var template = require('gulp-template');

gulp.task('main', ['validate'], function() {
	gulp.src('./src/**/*.apib')
		.pipe(template(config))
		.pipe(soften(4))
		.pipe(concat('output.apib'))
		.pipe(gulp.dest('./build/'));
});
