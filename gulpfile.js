const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin')

function compilarSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('styles'))
        .pipe(gulp.dest('./build/styles'));
}
function comprimirJs() {
    return gulp.src('./source/scripts/script.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}
    function comprimirImagens(){
        return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
    }

exports.default = function(){
gulp.watch('./source/styles/main.scss',{ignoreInitial:false}, gulp.series(compilarSass))
gulp.watch('./source/scripts/script.js',{ignoreInitial:false}, gulp.series(comprimirJs))
gulp.watch('./source/images/*',{ignoreInitial:false}, gulp.series(comprimirImagens))
}