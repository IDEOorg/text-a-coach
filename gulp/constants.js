var gulp = require('gulp');
var yargs = require('yargs').argv;
var rename = require("gulp-rename");
var ngConstant = require('gulp-ng-constant');
var $ = require('gulp-load-plugins')({
  pattern: ['del']
});

if(!yargs || !yargs.env) {
  yargs.env = 'prod';
}

gulp.task('constants', function () {
  $.del('src/app/components/config.js');

  return gulp.src('src/app/config-'+yargs.env.toLowerCase()+'.json')
    .pipe(ngConstant({name: 'components.environment'}))
    .pipe(rename({basename:'config'}))
    .pipe(gulp.dest('src/app/components'));
});

