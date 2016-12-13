var gulp = require('gulp');
var del = require('del');
var changed = require('gulp-changed');

var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var pump = require('pump');
var embedTemplates = require('gulp-angular-embed-templates');
// clean the contents of the distribution directory
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('clean', function () {
    return del(['dist/**/*', 'li/*']);
});

gulp.task("ts:build",['clean'], function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('copy:libs', function () {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ])
    .pipe(gulp.dest('lib'));
});

gulp.task('copy:html', ['copy:libs'] ,function () {
    return gulp.src([
        'app/**/*.html',
        'app/*.html'
    ])
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:js', ['copy:html'] ,function () {
    return gulp.src([
        'app/**/*.js',
        'app/*.js'
    ])
    .pipe(gulp.dest('dist'));
});

gulp.task('js:build', function () {
    gulp.src(['dist/*.js', 'dist/**/*.js'])
        .pipe(embedTemplates())
        .pipe(gulp.dest('dist'));
});

gulp.task('js:compress' ,function (cb) {
  pump([
        gulp.src(['dist/*.js', 'dist/**/*.js']),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', ['js:compress']);
//# sourceMappingURL=gulpfile.js.map