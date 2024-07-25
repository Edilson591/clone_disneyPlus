const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function scripts() {
  return gulp.src("./src/scripts/*js")
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
}

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

function imagens() {
  return gulp.src("./src/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: false }, 
            { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("./dist/imagens"));
}

exports.default = gulp.parallel(styles, imagens,scripts);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
  gulp.watch("./src/scripts/*js", gulp.parallel(scripts));
};
