'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  config = require('./config.js'),
  extractJsonLike = require('gulp-extract-json-like'),
  jsonLint = require('gulp-json-lint'),
  replace = require('gulp-replace'),
  shell = require('gulp-shell'),
  soften = require('gulp-soften'),
  aglio = require('gulp-aglio'),
  runSequence = require('run-sequence'),
  server = require('gulp-server-livereload'),
  template = require('gulp-template');

var srcDir = './src/**/*.apib',
  outDir = './build/',
  outFile = 'output.apib',
  outHtmlFile = 'output.html';

gulp.task('default', ['build']);

gulp.task('build', ['validate', 'main']);

gulp.task('validate', function() {
  return gulp.src(srcDir)
    .pipe(template(config))
    // try to remove useless text
    .pipe(replace(/^( {8}[^{]\S.*|\S.*| {4}(\+|-|\*).*)/gm, ''))
    .pipe(extractJsonLike())
    .pipe(jsonLint())
    .pipe(jsonLint.report('verbose'));
});

gulp.task('main', function() {
  return gulp.src(srcDir)
    .pipe(template(config))
    .pipe(soften(4))
    .pipe(concat('output.apib'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('serve', function() {
  runSequence('validate', 'main', 'aglio', function() {
    gulp.src(outDir)
      .pipe(server({
        livereload: true,
        port: 3005,
        defaultFile: outHtmlFile
      }));

    gulp.watch(srcDir, function() {
      runSequence('validate', 'main', 'aglio');
    });
  });
});

gulp.task('aglio', function() {
  return gulp.src(outDir + 'output.apib')
    .pipe(aglio())
    .pipe(gulp.dest('build'));
});

gulp.task('publish', shell.task([
  'export APIARY_API_KEY=' + config.apiary.token + ' && \
		apiary publish --api-name=' + config.apiary.name + ' \
		--path=' + outDir + outFile
]));
