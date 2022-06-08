const gulp = require('gulp')
const rollup = require('rollup')
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify-es').default;
const tsProject = ts.createProject('tsconfig.json', { declaration: true });
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const clean = require('gulp-clean')

const onwarn = warning => {
    // Silence circular dependency warning for moment package
    if (warning.code === 'CIRCULAR_DEPENDENCY')
        return

    console.warn(`(!) ${warning.message}`)
}

gulp.task('buildJs', () => {
    return tsProject.src()
        .pipe(tsProject({
            declaration: true
        }))
        .pipe(gulp.dest('build'));
})

gulp.task('cleanJs', () => {
    return gulp
        .src('build/**/*.js', { read: false })
        .pipe(clean('*.js'));
});

gulp.task("rollup", async function() {
    let config = {
        input: "build/main.js",
        external: ['three'],
        onwarn: onwarn,
        output: {
            file: 'main.js',
            format: 'umd',
            extend: true,
            name: 'fgui',
            globals: { three: 'three' }
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    };
    const subTask = await rollup.rollup(config);
    await subTask.write(config);
});

gulp.task("uglify", function() {
    return gulp.src("main.js")
        .pipe(uglify( /* options */ ));
});

gulp.task("move", function() {
    return gulp.src("main.js")
        .pipe(gulp.dest("content/panorama/scripts/"));
});

gulp.task("finalclean", function() {
    return gulp.src("main.js")
        .pipe(clean('main.js'));
});

gulp.task('build', gulp.series(
    gulp.parallel('buildJs'),
    gulp.parallel('rollup'),
    gulp.parallel('cleanJs'),
    gulp.parallel('uglify'),
    gulp.parallel('move'),
    gulp.parallel('finalclean'),
))