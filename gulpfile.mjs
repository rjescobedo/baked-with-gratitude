import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import { deleteAsync as del } from 'del';  // Named import for 'del'

const paths = {
    html: 'src/**/*.html',
    css: 'src/css/**/*.css',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*.{png,jpg,jpeg,gif,svg}',
    dist: 'dist',
};

// Clean the dist folder
gulp.task('clean', () => del([paths.dist]));

// Minify HTML
gulp.task('html', () =>
    gulp.src(paths.html)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(`${paths.dist}/`))
);

// Minify and Concatenate CSS
gulp.task('css', () =>
    gulp.src(paths.css)
        .pipe(cleanCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(`${paths.dist}/css`))
);

// Minify and Concatenate JavaScript
gulp.task('js', () =>
    gulp.src(paths.js)
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(`${paths.dist}/js`))
);

// Optimize Images
gulp.task('images', () =>
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(`${paths.dist}/images`))
);

// Default Task
gulp.task('default', gulp.series('clean', 'html', 'css', 'js', 'images'));

