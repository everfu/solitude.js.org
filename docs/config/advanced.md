---
title: Advanced Configuration
description: Advanced configuration for the Solitude theme
---

# Advanced Configuration

## Gulp

1. Install the required plugins:
    ```bash
    npm install gulp compress gulp-clean-css gulp-html-minifier-terser gulp-htmlclean gulp-terser --save-dev
    ```
2. Create the `gulpfile.js` file:
    ```js
    var gulp = require('gulp');
    var cleanCSS = require('gulp-clean-css');
    var htmlmin = require('gulp-html-minifier-terser');
    var htmlclean = require('gulp-htmlclean');
    var terser = require('gulp-terser');
    // Compress JS
    gulp.task('compress', () =>
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(terser())
    .pipe(gulp.dest('./public'))
    )
    // Compress CSS
    gulp.task('minify-css', () => {
    return gulp.src(['./public/**/*.css'])
    .pipe(cleanCSS({
    compatibility: 'ie11'
    }))
    .pipe(gulp.dest('./public'));
    });
    // Compress HTML
    gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
    removeComments: true, // Remove HTML comments
    collapseWhitespace: true, // Compress HTML
    collapseBooleanAttributes: true,
    // Omit boolean attribute values, e.g. <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,
    // Remove all attributes with empty values, e.g. <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,
    // Remove type="text/javascript" from <script>
    removeStyleLinkTypeAttributes: true,
    // Remove type="text/css" from <style> and <link>
    minifyJS: true, // Minify JS
    minifyCSS: true, // Minify CSS
    minifyURLs: true  // Minify URLs
    }))
    .pipe(gulp.dest('./public'))
    });
    
    // Run the following tasks when running the gulp command
    gulp.task('default', gulp.parallel(
    'compress', 'minify-css', 'minify-html'
    ))
    ```
3. Run the `gulp` command:
    ```bash
    gulp
    ```
    