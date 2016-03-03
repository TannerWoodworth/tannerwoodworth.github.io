//----------------------------------//
//    Include Required Plugins      //
//----------------------------------//

var browserSync = require('browser-sync'),
    del = require('del'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    runSequence = require('run-sequence'),
    shell = require('gulp-shell'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    runTimestamp = Math.round(Date.now()/1000);



//----------------------------------//
//         Set Global Vars          //
//----------------------------------//

/* The environment state (dev, prod) */
var envstate = 'dev';

var onError = function (err) { console.log(err); notify({ message: 'Error!' }); };

//----------------------------------//
//             SERVE                //
//----------------------------------//

/* Function runs the basic dev server */
gulp.task('srv', ['cleanroot', 'jekyllb'], function() {
  envstate = 'dev';
  runSequence('css',
    'js',
    'jslib',
    'jslint',
    'html',
    'images',
    'fonts',
    'files',
    'browser-sync');
});

/* Function runs the production server */
/* Used For testing not editing */
gulp.task('srvp', ['cleanroot', 'jekyllb'], function() {
  envstate = 'prod';
  runSequence('css',
    'js',
    'jslib',
    'jslint',
    'html',
    'images',
    'fonts',
    'files',
    'browser-sync');
});



//----------------------------------//
//         BASIC BUILDS             //
//----------------------------------//

/* Function runs the basic dev build only */
gulp.task('bld', ['jekyllb'], function() {
  envstate = 'dev';
  runSequence('css',
    'js',
    'jslib',
    'jslint',
    'images',
    'fonts',
    'files',
    'html');
});

/* Function runs the production build only */
gulp.task('bldp', ['jekyllb'], function() {
  envstate = 'prod';
  runSequence('css',
    'js',
    'jslib',
    'jslint',
    'images',
    'fonts',
    'files',
    'html');
});



//----------------------------------//
//        Server Task Runners       //
//----------------------------------//

/* Production function for server deploy */
gulp.task('prod', function () {
  envstate = 'prod';
  runSequence('js',
    'jslib',
    'css',
    'images',
    'fonts',
    'files',
    'html');
});



//----------------------------------//
//          BROWSERSYNC             //
//----------------------------------//

/* Function runs the browser-sync functionality */
gulp.task('browser-sync', ['watch'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    },
    host: 'localhost',
    port: 8081,
    ui: {
      port: 8082
    }
  });
});

/* Function reloads browser-sync with jekyll build */
gulp.task('bsreload', ['jekyllrb'], function () {
  browserSync.reload();
});

/* Function reloads browser-sync with jekyll clean & build */
gulp.task('bsreloadc', ['jekyllrbc'], function () {
  browserSync.reload();
});



//----------------------------------//
//             JEKYLL               //
//----------------------------------//

/* Function runs jekyll clean and build */
gulp.task('jekyllb', ['jekyllc'], function () {
  return gulp.src('index.html', {read:false})
  .pipe(shell([
    'bundle exec jekyll build'
  ]));
});

/* Function runs jekyll clean */
gulp.task('jekyllc', function () {
  return gulp.src('index.html', {read:false})
  .pipe(shell([
    'bundle exec jekyll clean'
  ]));
});

/* Function runs jekyll build on gulp watch */
gulp.task('jekyllrb', function () {
  return gulp.src('index.html', {read:false})
  .pipe(shell([
    'bundle exec jekyll build'
  ]));
});

/* Function runs jekyll clean and build on gulp watch */
gulp.task('jekyllrbc', function () {
  return gulp.src('index.html', {read:false})
  .pipe(shell([
    'bundle exec jekyll clean',
    'bundle exec jekyll build'
  ]));
});



//----------------------------------//
//        CSS GULP TASK             //
//----------------------------------//

/* Function compiles less based on envstate variable */
gulp.task('css', function() {
  if (envstate == 'dev') {
    //Development
    return gulp.src('_build/less/screen.less')
      .pipe(plumber({ errorHandler: onError }))
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(autoprefixer('last 2 version', 'ie 9'))
      .pipe(rename("styles.css"))
      .pipe(gulp.dest('css'))
      .pipe(gulp.dest('_site/css'))
      .pipe(browserSync.reload({stream:true}));
  } else {
    //Production
    return gulp.src('_build/less/screen.less')
      .pipe(plumber({ errorHandler: onError }))
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(autoprefixer('last 2 version', 'ie 9'))
      .pipe(cssnano())
      .pipe(rename("styles.css"))
      .pipe(gulp.dest('css'))
      .pipe(gulp.dest('_site/css'))
      .pipe(browserSync.reload({stream:true}));
  }
});



//----------------------------------//
//          JS GULP TASK            //
//----------------------------------//

/* Function compiles js based on envstate variable */
gulp.task('js', function() {
  if (envstate == 'dev') {
    //Development
    return gulp.src('_build/js/src/*.js')
      .pipe(plumber({ errorHandler: onError }))
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js'))
      .pipe(gulp.dest('_site/js'))
      .pipe(browserSync.reload({stream:true}));
  } else {
    //Production
    return gulp.src('_build/js/src/*.js')
      .pipe(plumber({ errorHandler: onError }))
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js'))
      .pipe(gulp.dest('_site/js'))
      .pipe(browserSync.reload({stream:true}));
  }
});

/* Function to copy the js lib folder to the _site folder */
gulp.task('jslib', function () {
    return gulp.src(['_build/js/lib/**/*'], {
        base: '_build/js/lib'
    })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest('js/lib'))
    .pipe(gulp.dest('_site/js/lib'));
});

/* Function runs js linting */
gulp.task('jslint', function() {
  return gulp.src('_build/js/src/*.js')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



//----------------------------------//
//        IMAGE GULP TASKS          //
//----------------------------------//

/* Function to optimize all images */
gulp.task('images', function() {
  return gulp.src('_build/images/**/*')
    .pipe(plumber({ errorHandler: onError }))
		.pipe(imagemin({
			progressive: false,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('images'))
		.pipe(gulp.dest('_site/images'));
});



//----------------------------------//
//        FILES GULP TASKS          //
//----------------------------------//

/* Function to copy the files folder to the _site folder */
gulp.task('files', function () {
    return gulp.src(['_build/files/**/*'], {
        base: '_build/files'
    })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest('files'))
    .pipe(gulp.dest('_site/files'));
});



//----------------------------------//
//        FONTS GULP TASKS          //
//----------------------------------//

/* Function to output icon fonts to the site. */
gulp.task('fonts', function(){
  return gulp.src(['_build/fonts/svg/*.svg'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(iconfont({
      fontName: 'iconfont',
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'svg'], // 'woff2' is available
      timestamp: runTimestamp,
    }))
    .on('glyphs', function(glyphs, options) {
      options = {
        glyphs: glyphs.map(function(glyph) {
          // this line is needed because gulp-iconfont has changed the api from 2.0
          // example (https://github.com/cognitom/symbols-for-sketch/blob/master/gulpfile.js#L17)
          return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) };
        }),
        fontName: 'iconfont',
        fontPath: '../fonts/',
        className: 'i'
      };
      gulp.src('_build/fonts/iconfont.less')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename:'iconfont' }))
        .pipe(gulp.dest('fonts'))
        .pipe(gulp.dest('_site/fonts'));
    })
    .pipe(gulp.dest('fonts'))
    .pipe(gulp.dest('_site/fonts'));
});



//----------------------------------//
//        HTML GULP TASKS           //
//----------------------------------//

/* Function compiles html based on env variable */
gulp.task('html', function() {
  if (envstate == 'dev') {
    //Development
    var htmlDest = '_site/';
    var htmlPaths = '_site/**/*.html';
    var minifyOptions = {
      collapseWhitespace: true,
      removeComments: true
    };
    if (envstate == 'dev') {
      //Do nothing
    } else {
      return gulp.src(htmlPaths)
        .pipe(htmlmin(minifyOptions))
        .pipe(gulp.dest(htmlDest));
    }
  } else {
    //Production
    var htmlDest = '_site/';
    var htmlPaths = '_site/**/*.html';
    var minifyOptions = {
      collapseWhitespace: true,
      removeComments: true
    };
    if (envstate == 'dev') {
      //Do nothing
    } else {
      return gulp.src(htmlPaths)
        .pipe(htmlmin(minifyOptions))
        .pipe(gulp.dest(htmlDest));
    }
  }
});



//----------------------------------//
//        CLEAN GULP TASKS          //
//----------------------------------//

/* Function deletes folders in the root created by gulp */
gulp.task('cleanroot', function() {
  del(['css', 'files', 'fonts', 'images', 'js', '_site']);
  console.log('Cleaned Root Folders');
});



//----------------------------------//
//        WATCH GULP TASKS          //
//----------------------------------//

/* Watch FUnction watches js, less and site files seperately */
gulp.task('watch', function() {
  // Watch .less files
  gulp.watch('_build/less/**/*.less', ['css']);
  // Watch .js files
  gulp.watch('_build/js/src/*.js', ['js']);
  // Watch js lib files
  gulp.watch('_build/js/lib/**/*.js', ['jslib']);
  // Watch files
  gulp.watch('_build/files/**/*', ['files']);
  // Watch fonts
  gulp.watch('_build/fonts/svg/*.svg', ['fonts']);
  // Watch Images
  gulp.watch('_build/images/**/*', ['images']);
  // Watch all files and folders and build
  gulp.watch(['_includes/**/*','_layouts/**/*','_pages/**/*','_posts/**/*','index.html','./*.ico'], ['bsreload']);
  // Watch data files and folder and build with clean
  gulp.watch(['_data/**/*','./_config.yml'], ['bsreloadc']);
});



//----------------------------------//
//       DEFAULT GULP TASK          //
//----------------------------------//

/* just running gulp will run the gulp dev server */
gulp.task('default', function() {
  gulp.start('srv');
});
