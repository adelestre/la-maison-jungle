// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Sass Task
function scssTask() {
    return src('src/app/scss/style.scss', { sourcemaps: false })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('src/dist', { sourcemaps: '.' }));
}

// JS Task
function jsTask() {
    return src('src/app/js/*.js', { sourcemaps: false })
        .pipe(dest('src/dist', { sourcemaps: '.' }));
}

// Watch Task
function watchTask() {
    watch(
        ['src/app/scss/**/*.scss', 'src/app/**/*.js'],
        series(scssTask, jsTask)
    );
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, watchTask);