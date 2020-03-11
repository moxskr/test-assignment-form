const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('src/sass/app.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', () => {
    gulp.watch('src/sass/app.sass', gulp.series('sass'));
});
