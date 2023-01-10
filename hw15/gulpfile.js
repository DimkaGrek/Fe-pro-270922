const {src, dest, series, parallel, watch} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
//const image = require('gulp-image');
const imagemin = require('gulp-imagemin');


function minifyhtml(){
    return src('application/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build'));
}

function sassToCss(){
    return src('application/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('build'));
}

function minifyJs(){
    return src('application/*.js')
        .pipe(minify())
        .pipe(dest('build'));
}

function minifyImg(){
    return src('application/*.jpg')
        .pipe(imagemin())
        .pipe(dest('build'));
}

const browserSync = require('browser-sync').create();

function watchfn(){
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    watch('application/*.html', minifyhtml);
    watch('application/*.scss', sassToCss);
    watch('application/*.js', minifyJs);
    watch('application/*.jpg', minifyImg);
    watch(`application/**/*.*`).on('change', browserSync.reload);
}

exports.default = watchfn;

exports.dev = parallel(minifyhtml, sassToCss, minifyJs, minifyImg);