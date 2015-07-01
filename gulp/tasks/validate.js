var gulp = require('gulp');
var config = require('../../config/config.js');
var extractJsonLike = require('gulp-extract-json-like');
var jsonLint = require('gulp-json-lint');
var replace = require('gulp-replace');
var template = require('gulp-template');

gulp.task('validate', function() {
	gulp.src('./src/**/*.apib')
		.pipe(template(config))
		.pipe(replace(/^( {8}[^{]\S.*|\S.*| {4}(\+|-|\*).*)/gm, '')) // try to remove useless text
		.pipe(extractJsonLike())
		.pipe(jsonLint())
		.pipe(jsonLint.report('verbose'));
});
