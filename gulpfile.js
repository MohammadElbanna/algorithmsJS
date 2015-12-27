var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    watchify = require('watchify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify"),
    buffer = require('vinyl-buffer');

// default
gulp.task("default", ["sync", "js"]);

gulp.task('js', bundle); // so you can run `gulp js` to build the file

// Static server
gulp.task("sync", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["./index.html" , "css/*.css", "js/*.js"]).on("change", browserSync.reload);
});

var opts = {
  entries: ['./js/index.js'],
  debug: true
    // cache: {},
  // packageCache: {}
};

var b = watchify(browserify(opts).transform("babelify", {presets: ["es2015-loose"]}));
b.on('update', bundle); // on any dep update, runs the bundler

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('index.js'))
    // optional (NO, IT'S a MUST), remove if you don't need to buffer file contents
    .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // here you can run uglify
    // .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(rename({
        // this means to but it directly in the "dist" folder, without using subfolders
        dirname: ''
    }))
    .pipe(sourcemaps.init({
      loadMaps: true
    })) // loads map from browserify file
    .pipe(uglify())
    .pipe(sourcemaps.write("./")) // writes .map file
    .pipe(gulp.dest('./dist'))
//    .pipe(browserSync.stream());
}