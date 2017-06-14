var gulp = require('gulp');
var rename = require("gulp-rename");
var ngConstant = require('gulp-ng-constant');
var $ = require('gulp-load-plugins')({
  pattern: ['del']
});

gulp.task('constants', function () {
  $.del('src/app/components/config.js');

  gulp.env.GULP_ENV = gulp.env.GULP_ENV || 'prod';

  return gulp.src('src/app/config-'+gulp.env.GULP_ENV.toLowerCase()+'.json')
    .pipe(ngConstant({name: 'components.environment'}))
    .pipe(rename({basename:'config'}))
    .pipe(gulp.dest('src/app/components'));
});
