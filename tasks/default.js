var gulp = require('gulp');
var clean = require('./clean');

gulp.task('default', function(){
  runSequence('clean');
});
