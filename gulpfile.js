/**
 * 모듈 호출
 * --------------------------------
 */
var config = require('./config.js')(),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	csslint = require('gulp-csslint'),
	sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify');

/**
 * 테스크 등록
 * --------------------------------
 */
gulp.task('default', ['connect', 'html', 'sass', 'js', 'watch']);

gulp.task('watch', function () {
	gulp.watch(config.sass.src, ['sass']);
	gulp.watch(config.html.src, ['html']);
	gulp.watch(config.js.src, ['js']);
});

/**
 * --------------------------------
 * 세부 업무 등록
 * --------------------------------
 */
gulp.task('connect', function() {
	connect.server(config.SERVER.options);
});

gulp.task('html', function() {
	gulp.src(config.html.src)
		.pipe(gulp.dest(config.html.dest))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	gulp.src(config.sass.src)
		.pipe(sourcemaps.init())
		.pipe(sass(config.sass.options).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(csslint())
		.pipe(csslint.reporter())
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(gulp.dest(config.sass.dest))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src(config.js.src)
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'))
		.pipe(concat(config.js.out))
		.pipe(uglify(config.js.options))
		.pipe(gulp.dest(config.js.dest));
});
