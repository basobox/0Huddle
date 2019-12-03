const gulp = require("gulp");
const purgecss = require("gulp-purgecss");

gulp.task("purgecss", () => {
    return gulp
        .src("css/style.css")
        .pipe(
            purgecss({
                content: ["./*.html"],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            })
        )
        .pipe(gulp.dest("css/"));
});
