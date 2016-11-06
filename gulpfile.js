'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var assign = require('lodash.assign');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

var customOpts = {
    entries: [ './src/game.js' ],
    debug: true
};
var b = browserify( customOpts ); 
var opts = assign({}, watchify.args, customOpts);
var w = watchify(browserify(opts)); 

function bundle() {
    return w.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('robo.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
}

gulp.task( 'default', [], function() {
    gulp.src( './' ).pipe( webserver( {
        port: 8000
    } ) );

    bundle();
} );

w.on( 'update', bundle );
