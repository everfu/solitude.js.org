var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');
var terser = require('gulp-terser');
// const javascriptObfuscator = require('gulp-javascript-obfuscator');

// 压缩js
gulp.task('compress', () =>
gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
.pipe(terser())
// .pipe(javascriptObfuscator({
// compact: true,
// controlFlowFlattening: true,
// controlFlowFlatteningThreshold: 0.75,
// deadCodeInjection: true,
// deadCodeInjectionThreshold: 0.4,
// debugProtection: true,
// debugProtectionInterval: 4000,
// disableConsoleOutput: true,
// identifierNamesGenerator: 'hexadecimal',
// log: false,
// renameGlobals: false,
// }))
.pipe(gulp.dest('./public'))
)
//压缩css
gulp.task('minify-css', () => {
return gulp.src(['./public/**/*.css'])
.pipe(cleanCSS({
compatibility: 'ie11'
}))
.pipe(gulp.dest('./public'));
});
//压缩html
gulp.task('minify-html', () => {
return gulp.src('./public/**/*.html')
.pipe(htmlclean())
.pipe(htmlmin({
removeComments: true, //清除html注释
collapseWhitespace: true, //压缩html
collapseBooleanAttributes: true,
//省略布尔属性的值，例如：<input checked="true"/> ==> <input />
removeEmptyAttributes: true,
//删除所有空格作属性值，例如：<input id="" /> ==> <input />
removeScriptTypeAttributes: true,
//删除<script>的type="text/javascript"
removeStyleLinkTypeAttributes: true,
//删除<style>和<link>的 type="text/css"
minifyJS: true, //压缩页面 JS
minifyCSS: true, //压缩页面 CSS
minifyURLs: true  //压缩页面URL
}))
.pipe(gulp.dest('./public'))
});

// 运行gulp命令时依次执行以下任务
gulp.task('default', gulp.parallel(
'compress', 'minify-css', 'minify-html',
))

