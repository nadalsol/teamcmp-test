/**
 * Configuration
 */

var
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    app: 'app/',
    dist: 'dist/'
  }
;


/**
 * Tasks
 */

// Image processing
gulp.task('images', function() {
  var out = folder.dist + 'images/';
  return gulp.src(folder.app + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});

// HTML processing
gulp.task('html', ['images'], function() {
  var
    out = folder.dist,
    page = gulp.src(folder.app + '**/*.html')
      .pipe(newer(out));

  // minify production code
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }

  return page.pipe(gulp.dest(out));
});

// JavaScript processing
gulp.task('js', function() {
  var jsbuild = gulp.src(folder.app + 'js/**/*')
    .pipe(deporder())
    .pipe(concat('main.js'));

  if (!devBuild) {
    jsbuild = jsbuild
      .pipe(stripdebug())
      .pipe(uglify());
  }

  return jsbuild.pipe(gulp.dest(folder.dist + 'js/'));
});

// CSS processing
gulp.task('css', function() {
  var
    out = folder.dist + 'css/',
    style = 'nested';

  // minify production code
  if (!devBuild) {
    style = 'compressed';
  }

  return gulp.src(folder.app + 'scss/**/*.scss')
    .pipe(sass({
      outputStyle: style,
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(gulp.dest(out));
});


// Run all tasks
gulp.task('run', ['html', 'css', 'js']);

// Watch for changes
gulp.task('watch', function() {
  // image changes
  gulp.watch(folder.app + 'images/**/*', ['images']);

  // html changes
  gulp.watch(folder.app + '**/*.html', ['html']);

  // javascript changes
  gulp.watch(folder.app + 'js/**/*', ['js']);

  // css changes
  gulp.watch(folder.app + 'scss/**/*', ['css']);
});

// Default task
gulp.task('default', ['run', 'watch']);
