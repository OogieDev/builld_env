const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        browser_sync = require('browser-sync'),
        gulp_autoprefixer = require('gulp-autoprefixer'),
        plumber = require('gulp-plumber'),
        notify = require('gulp-notify');


gulp.task('sass', function(){
    gulp.src('./app/dev/scss/style.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('./app/dist/css'));
});

gulp.task('browser-sync', function(){
    browser_sync.init(["./app/dist/css/*.css", "./app/dist/js/*.js", "./app/dist/*.html"], {
        server: {
            baseDir: "./app/dist/"
        },
        notify: false
    });
});

gulp.task('default', ['sass', 'browser-sync'], function(){
    gulp.watch("./app/dev/scss/*.scss", ['sass']);
});