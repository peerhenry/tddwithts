var gulp = require('gulp'),
    util = require('gulp-util'),
    tsc = require('gulp-typescript'),
    mocha = require('gulp-mocha'),
    runSequence = require('run-sequence'),
    Server = require('karma').Server;

function handleError(err){
    console.log(err.toString());
    this.emit('end');
}

gulp.task('compile-ts', ['compile-server', 'compile-client', 'compile-protractor']);

gulp.task('compile-server', function(){
    return gulp.src(['./**/*.ts', '!./node_modules/**', '!./typings/**', '!./public/**', '!./test-ui/**'])
    .pipe(tsc({
        module: 'commonjs',
        target: 'ES5'
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./'));
});

gulp.task('compile-client', function(){
    return gulp.src(['./public/**/*.ts'])
    .pipe(tsc({
        module: "amd",
        target: "ES5"
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./public'));
});

gulp.task('compile-protractor',function(){
    return gulp.src(['./test-ui/*.ts'])
    .pipe(tsc({
        module: 'commonjs',
        target: 'ES5'
    }))
    .on('error', util.log)
    .pipe(gulp.dest('./test-ui'));
});

gulp.task('test', function(){
   return gulp.src('./test/*.js', { red: false })
   .pipe(mocha({ reporter: 'spec' }))
   .on('error',handleError)
});

gulp.task('karma', function(done){
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('watch', function(){
   gulp.watch(['./**/*.ts'], function(){
       runSequence('compile-ts', 'karma', 'test');
   }); 
});

gulp.task('default', function(){
    runSequence('compile-ts', 'test', 'karma');  
})