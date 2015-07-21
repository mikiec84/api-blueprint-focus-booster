'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config.js');
var extractJsonLike = require('gulp-extract-json-like');
var jsonLint = require('gulp-json-lint');
var replace = require('gulp-replace');
var shell = require('gulp-shell');
var soften = require('gulp-soften');
var template = require('gulp-template');

var srcDir = './src/**/*.apib';
var outDir = './build/';
var outFile = 'output.apib';

gulp.task('validate', function() {
	gulp.src(srcDir)
		.pipe(template(config))
		.pipe(replace(/^( {8}[^{]\S.*|\S.*| {4}(\+|-|\*).*)/gm, '')) // try to remove useless text
		.pipe(extractJsonLike())
		.pipe(jsonLint())
		.pipe(jsonLint.report('verbose'));
});

gulp.task('main', ['validate'], function() {
	gulp.src(srcDir)
		.pipe(template(config))
		.pipe(soften(4))
		.pipe(concat('output.apib'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('publish', shell.task([
	'export APIARY_API_KEY=' + config.apiary.token + ' && \
		apiary publish --api-name=' + config.apiary.name + ' \
		--path=' + outDir + outFile
]));

gulp.task('build', ['main']);

gulp.task('default', ['build']);
