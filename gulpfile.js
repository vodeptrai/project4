var gulp = require('gulp');

var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

const prefixer = require('gulp-autoprefixer');
const maps = require('gulp-sourcemaps');

const del = require('del');

gulp.task('clean:dist', function() {
  	return del.sync('dist');
})

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.sass')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(maps.write('.'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
});

gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		// Minifies only if it's a JavaScript file
		.pipe(gulpIf('*.js', uglify()))
		// Minifies only if it's a CSS file
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  	// Caching images that ran through imagemin
	.pipe(cache(imagemin({
	      interlaced: true
	})))
	.pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  	return gulp.src('app/fonts/**/*')
  	.pipe(gulp.dest('dist/fonts'))
})



gulp.task('build', ['clean:dist', 'sass', 'useref', 'images', 'fonts'], function (){
  console.log('Building files');
})

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/scss/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});