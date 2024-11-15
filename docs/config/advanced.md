---
title: Advanced Configuration
description: Advanced configuration for the Solitude theme
---

# Advanced Configuration

## Gulp

1. Install the necessary plugins:
    ```bash
    npm install gulp compress gulp-clean-css gulp-html-minifier-terser gulp-htmlclean gulp-terser --save-dev
    ```
2. Set up the `gulpfile.js`:
    ```js
    const gulp = require('gulp');
    const cleanCSS = require('gulp-clean-css');
    const htmlmin = require('gulp-html-minifier-terser');
    const htmlclean = require('gulp-htmlclean');
    const terser = require('gulp-terser');
    
    // JavaScript Compression
    gulp.task('compress', () =>
        gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
            .pipe(terser())
            .pipe(gulp.dest('./public'))
    );

    // CSS Compression
    gulp.task('minify-css', () => {
        return gulp.src(['./public/**/*.css'])
            .pipe(cleanCSS({ compatibility: 'ie11' }))
            .pipe(gulp.dest('./public'));
    });

    // HTML Compression
    gulp.task('minify-html', () => {
        return gulp.src('./public/**/*.html')
            .pipe(htmlclean())
            .pipe(htmlmin({
                removeComments: true, // Remove HTML comments
                collapseWhitespace: true, // Compress HTML
                collapseBooleanAttributes: true, // Omit boolean attribute values
                removeEmptyAttributes: true, // Remove attributes with empty values
                removeScriptTypeAttributes: true, // Remove type="text/javascript" from <script>
                removeStyleLinkTypeAttributes: true, // Remove type="text/css" from <style> and <link>
                minifyJS: true, // Minify JavaScript
                minifyCSS: true, // Minify CSS
                minifyURLs: true  // Minify URLs
            }))
            .pipe(gulp.dest('./public'));
    });

    // Default task to run all tasks
    gulp.task('default', gulp.parallel('compress', 'minify-css', 'minify-html'));
    ```
3. Execute the `gulp` command:
    ```bash
    gulp
    ```