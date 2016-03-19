// require("require-dir")("tasks");
var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var watch = require('gulp-watch');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


gulp.task('default', function(cb){
  runSequence(
              'clean',
              ['favicon', 'html', 'styles', 'fontello', 'scripts', 'images'],
              'watch',
              cb
            );
});


gulp.task('clean', function(){
  return del(['dist']);
});


gulp.task('images', function(){
  gulp.src('src/img/**/**.*')
      .on('error', handleError)
      .pipe(gulp.dest('dist/img'));
});


gulp.task('favicon', function(){
  gulp.src('src/favicon/**.*')
      .on('error', handleError)
      .pipe(gulp.dest('dist/favicon/'));
});


gulp.task('html', function(){
  gulp.src('src/**/*.html')
      .on('error', handleError)
      .pipe(gulp.dest('dist'));
});


gulp.task('styles', function(){
  runSequence('vendor-styles', 'compass');
});

gulp.task('vendor-styles', function(){
  var sources = ['node_modules/normalize.css/normalize.css'];
  gulp.src(sources)
      .on('error', handleError)
      .pipe(gulp.dest('dist/stylesheet/vendor/'));
});

gulp.task('compass', function(){
  gulp.src('src/stylesheet/**/*.scss')
      .pipe(compass({
                config_file: './compass.rb',
                css: 'dist/stylesheet/', // give the output css file location
                sass: 'src/stylesheet' // give the input scss file location
            }))
      .on('error', handleError)
      .pipe(gulp.dest('dist/stylesheet/'));
});


gulp.task('fontello', function(){
  runSequence(['fontello-font', 'fontello-css']);
});

gulp.task('fontello-font', function(){
  return gulp.src('src/stylesheet/fontello/font/*.*')
            .on('error', handleError)
            .pipe(gulp.dest('dist/stylesheet/fontello/font'));
});

gulp.task('fontello-css', function(){
  return gulp.src('src/stylesheet/fontello/css/*.*')
            .on('error', handleError)
            .pipe(gulp.dest('dist/stylesheet/fontello/css'));
});

gulp.task('vendor-scripts', function(){
  var vendor = [
    "node_modules/requirejs/require.js",
    "node_modules/jquery/dist/jquery.js"
  ];
  return gulp.src(vendor)
            .on('error', handleError)
            .pipe(gulp.dest('dist/js/vendor'));
});

gulp.task('custom-scripts', function(){
  return gulp.src('src/js/*.js')
              .on('error', handleError)
              // .pipe(concat('main.js'))
              .pipe(gulp.dest('dist/js/'));
});

gulp.task('scripts', function(){
  runSequence('vendor-scripts', 'custom-scripts');
});


gulp.task('watch', function(){
  gulp.watch('src/stylesheet/**/*.scss', ['styles']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['images']);
});
