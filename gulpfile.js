const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

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

exports.default = gulp.parallel(styles, imagens);
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};
