var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifycss=require('gulp-minify-css'),
    concat=require('gulp-concat'),
    htmlmin=require('gulp-htmlmin');
    
gulp.task('default',function(){
    gulp.start('minifycss','minifyjs','htmlmin')
});

gulp.task('minifycss',function(){
    return gulp.src('*.css')
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
})

gulp.task('minifyjs',function(){
    return gulp.src(['snake.js','snow.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('htmlmin',function(){
    var options={
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'));
})


   