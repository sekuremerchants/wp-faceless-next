// const fs = require('fs');
import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulpSass from 'gulp-sass';
import sassCompiler from 'sass';
import sassGlob from 'gulp-sass-glob';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';

const { dest, series, parallel } = gulp;

const sass = gulpSass(sassCompiler);
// Production flag
let isProduction = false;
let doCache = false;

// File paths
const paths = {
  scss: {
    general: {
      src: ['assets/scss/style.scss', 'assets/scss/general/**/*.scss'],
      dest: 'assets/css/styles/',
    },
    blocks: {
      src: [
        'assets/scss/blocks/**/*.scss',
        'assets/scss/blocks/*.scss',
        'assets/scss/blocks.scss',
      ],
      dest: 'assets/css/styles/blocks/',
    },
    pages: {
      src: ['assets/scss/pages/**/*.scss', 'assets/scss/pages/*.scss'],
      dest: 'assets/css/styles/pages/',
    },
    post: {
      src: ['assets/scss/post/**/*.scss', 'assets/scss/post/*.scss'],
      dest: 'assets/css/styles/post/',
    },
    lander: {
      src: ['assets/scss/landers.scss', 'assets/scss/lander/**/*.scss'],
      dest: 'assets/css/styles/',
    },
    blogs: {
      src: ['assets/scss/blogs.scss', 'assets/scss/blog/**/*.scss'],
      dest: 'assets/css/styles/',
    },
    other: {
      src: [
        'assets/scss/bootstrap.scss',
        'assets/scss/common/**/*.scss',
        'assets/scss/animations/**/*.scss',
        'assets/scss/case-studies.scss',
        'assets/scss/admin/**/*.scss',
        'assets/scss/case-studies/**/*.scss',
      ],
      dest: 'assets/css/styles/',
    },
  },
};

const postCssPlugins = [
  autoprefixer({
    remove: true,
    grid: false,
    flexbox: true,
    supports: true,
    overrideBrowserslist: ['> 0.5%, last 2 versions'],
  }),
  cssnano(),
];

const includePaths = [
  './node_modules/',
  './node_modules/bootstrap/',
  './assets/scss/',
];

// Enable production mode
function enableProduction(cb) {
  isProduction = true;
  cb();
}

function enableRemember(cb) {
  doCache = true;
  cb();
}

function scssTask($glob) {
  const compiledStream = gulp
    .src($glob.src)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ includePaths }).on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(dest($glob.dest))

  return compiledStream;
}

// Watch task: watch SCSS and JS files for changes
const scssGlob = paths.scss;
function watchTask() {
  gulp.watch(scssGlob.general.src, compileGeneralSCSS);
  gulp.watch(scssGlob.blocks.src, compileBlocksSCSS);
  gulp.watch(scssGlob.pages.src, compilePagesSCSS);
  gulp.watch(scssGlob.post.src, compilePostSCSS);
  gulp.watch(scssGlob.lander.src, compileLanderSCSS);
  gulp.watch(scssGlob.blogs.src, compileBlogsSCSS);
  gulp.watch(scssGlob.other.src, compileOtherSCSS);
}

function compileGeneralSCSS() {
  return scssTask(scssGlob.general);
}
compileGeneralSCSS.displayName = 'General SCSS';

function compileBlocksSCSS() {
  return scssTask(scssGlob.blocks);
}
compileBlocksSCSS.displayName = 'Blocks SCSS';

function compilePagesSCSS() {
  return scssTask(scssGlob.pages);
}
compilePagesSCSS.displayName = 'Pages SCSS';

function compilePostSCSS() {
  return scssTask(scssGlob.post);
}
compilePostSCSS.displayName = 'Post SCSS';

function compileLanderSCSS() {
  return scssTask(scssGlob.lander);
}
compileLanderSCSS.displayName = 'Lander SCSS';

function compileBlogsSCSS() {
  return scssTask(scssGlob.blogs);
}
compileBlogsSCSS.displayName = 'Blogs SCSS';

function compileOtherSCSS() {
  return scssTask(scssGlob.other);
}
compileOtherSCSS.displayName = 'Other SCSS';

export const watch = series(
  enableRemember,
  parallel(
    compileGeneralSCSS,
    compileBlocksSCSS,
    compilePagesSCSS,
    compilePostSCSS,
    compileLanderSCSS,
    compileBlogsSCSS,
    compileOtherSCSS,
  ),
  watchTask,
);

export const production = series(
  enableProduction,
  parallel(
    compileGeneralSCSS,
    compileBlocksSCSS,
    compilePagesSCSS,
    compilePostSCSS,
    compileLanderSCSS,
    compileBlogsSCSS,
    compileOtherSCSS,
  ),
);

export const prod = production;
