const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const hb = require('gulp-hb');
const clean = require('gulp-clean');

 
sass.compiler = require('node-sass');

function doWatch(){
  browserSync.init({
    server: "./dist"
  });
  watch('./src/**/*.scss', doSass);
  watch('./src/**/*.{hbs,html,json}',doBuild);
  watch('./src/**/*.{hbs,html,json}').on('change', browserSync.reload);
}

function doClean(){
  return src('./dist/**/*')
  .pipe(clean());
}
function doSass() {
  return src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
}

function doHandlebars(){
  return src('./src/**/*.html')
        .pipe(hb()
            .partials('./src/**/*.hbs')
            .data('./src/**/*.json')
        )
        .pipe(dest('./dist'));
}

function doBuild(done){
  return parallel(doSass, doHandlebars)(done);
}
exports.build = doBuild;
exports.clean = doClean;
exports.watch = series(doBuild, doWatch);
exports.default = series(doClean, doBuild);