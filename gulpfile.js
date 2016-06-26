var gulp 					= require('gulp');
var browserSync 	= require('browser-sync').create();
var sass        	= require('gulp-sass');
var	rename      	= require('gulp-rename');
var	autoprefixer 	= require('gulp-autoprefixer');
var cssnano 			= require('gulp-cssnano');
var imagemin 		  = require('gulp-imagemin');
var concat        = require('gulp-concat');

gulp.task('browser-sync', ['scss', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('scss', function() {
	return gulp.src('scss/*.scss')
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
		}).on('error', sass.logError))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
		.pipe(cssnano())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('imgmin', function() {
  return gulp.src('app/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/img/imgMin'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/jquery/jquery.min.js',
		'./app/libs/imagesloaded/imagesloaded.pkgd.min.js',
		'./app/libs/packery/dist/packery.pkgd.min.js',
		'./app/libs/slick-carousel/slick.min.js',
		'./app/libs/jquery-slimscroll/jquery.slimscroll.min.js',		
		])
		.pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('scss/*.scss', ['scss']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);