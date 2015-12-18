var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
//var plugins = require("gulp-load-plugins")();
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var imagemin = require("gulp-imagemin");
var jshint = require("gulp-jshint");
var cache = require("gulp-cache");
var clean = require("gulp-clean");
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task("clean",function(){
  return gulp.src(['www/dist/css','www/dist/js','www/dist/image'],{read:false})
    .pipe(clean())
    .pipe(notify({message:"清理完毕"}));
});

gulp.task("minify-js",function(){
  gulp.src("www/js/*.js")
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    //.pipe(notify({message:"检查完毕"}))
    //.pipe(gulp.dest("www/dist/assets/js"))
    .pipe(uglify())
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("www/dist/js"))
    .pipe(notify({message:"js压缩完成"}));
});

gulp.task("minify-css",function(){
  gulp.src("www/css/*.css")
    .pipe(postcss([autoprefixer('last 2 version','safari 5','ie8','ie9','opera 12.1','ios 6','android 4')]))
    .pipe(minifyCss())
    .pipe(rename({extname:".min.css"}))
    .pipe(gulp.dest("www/dist/css"))
    .pipe(notify({message:"css混淆完成"}));
});

gulp.task("images",function(){
  return gulp.src("www/img/*")
    .pipe(cache(imagemin({optimizationLevel:3,progressive:true,interlaced:true})))
    .pipe(gulp.dest('www/dist/image'))
    .pipe(notify({message:"图片压缩完毕"}));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({ style: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer('last 2 version','safari 5','ie8','ie9','opera 12.1','ios 6','android 4'))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task("watchs", function(){
  livereload.listen();
  gulp.watch("www/css/*.css",['minify-css']);
  gulp.watch("www/js/*.js",["minify-js"]);
  gulp.watch("www/img/*.*",["images"]);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
