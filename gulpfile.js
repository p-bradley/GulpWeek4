const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const nano = require('cssnano');
const prefixer = require('prefixer');


//define some common tasks for Gulp to run

//like compile and minify sass files:

//** = any folder /* = any file (wild cards)

function compile(done) {
    gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([prefixer(), nano()]))
    .pipe(gulp.dest('./css'))
    done()

}

const imagemin = require('imagemin');

//minify every image 
function squashImages(done) {
gulp.src('./images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
    done()
}


exports.compile = compile;
exports.squash = squashImages;