var gulp = require('gulp');
var eslint = require('gulp-eslint');
var purify = require('gulp-purifycss');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');
var del = require('del');
var useref = require('gulp-useref');
var browserSync = require('browser-sync').create();

gulp.task('test', ['compile-stylus', 'test-move-css'], function() {
	return gulp.src('src/jade/**/*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('dist-dev'))
		.pipe(useref())
		.pipe(gulp.dest('dist-dev'));
});

gulp.task('test-move-css', function() {
	return gulp.src('src/css/**/*.css')
		.pipe(gulp.dest('dist-dev/css'));
});

// Preprocessors

gulp.task('compile-stylus', function() {
	return gulp.src('src/styl/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('dist-dev/css'))
});

gulp.task('compile-jade', function() {
	var locals;
	return gulp.src('app/jade/**/*.jade')
		.pipe(jade({locals: locals}))
		.pipe(gulp.dest('app'))
});

// Build

gulp.task('clean', function() {
  return del.sync(['dist/**', '!dist', 'dist-dev/**', '!dist-dev']);
})

gulp.task('css', ['compile-stylus'], function() {
	return gulp.src('./app/css/**/*.css')
		.pipe(purify(['./app/js/**/*.js', './app/**/*.html']))
		.pipe(sourcemaps.init())
			.pipe(autoprefixer())
			.pipe(concat('all.min.css'))
			// .pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('javascript', function() {
	return gulp.src('app/js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(sourcemaps.init())
			.pipe(concat('all.min.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('images', function() {
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

// Development

gulp.task('browser-sync', ['compile-jade', 'compile-stylus'], function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('compile-and-stream', ['compile-stylus'], function() {
	return gulp.src('app/css')
		.pipe(browserSync.stream());
});
gulp.task('compile-and-reload', ['compile-jade'], function() {
	browserSync.reload();
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/styl/**/*.styl', ['compile-and-stream']);
	gulp.watch('app/**/*.jade', ['compile-and-reload']);
});

// Lint

gulp.task('lint-js', function () {
    return gulp.src(['app/js/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint-js'], function () {
    console.log('Linting succesful.')
});