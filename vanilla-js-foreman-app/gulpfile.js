const path = require('path');
const { src, dest, task, parallel, watch, series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const { reload } = require('browser-sync');

const browserSync  = require('browser-sync').create();

const STYLE_PATH = 'assets/css/index.css';

const SRC_ROOT = './src';
const DIST_ROOT = './dist';

const ASSET_PATH_GLOB = {
  HTML: path.join(SRC_ROOT, '/**/*.html'),
  CSS: path.join(SRC_ROOT, '/**/*.css'),
};

function addCSSPrefixes (done) {
  const styleSrc = path.join(SRC_ROOT, STYLE_PATH);
  const styleDist = path.join(DIST_ROOT, STYLE_PATH);
  src(styleSrc)
    .pipe(
      autoprefixer({
        overrideBrowserslist: [ 'last 2 versions', '> 5%'] ,
      })
    )
    .pipe(dest(styleDist))
    .pipe(browserSync.stream());
  done();
}

function copyHTML () {
  return src(ASSET_PATH_GLOB.HTML)
		.pipe(plumber())
		.pipe(
      dest(DIST_ROOT)
    );
}

const runBrowserSync = () => browserSync.init({
  server: {
    baseDir: './dist/',
  },
});

function reloadBrowser (done) {
	browserSync.reload();
	done();
}

function watchFiles () {
  watch(
    ASSET_PATH_GLOB.HTML,
    series(copyHTML, reloadBrowser),
  );

  watch(
    ASSET_PATH_GLOB.CSS,
    series(addCSSPrefixes, reloadBrowser),
  );
}

task(
  'copy-html',
  copyHTML,
);

task(
  'prefix-css',
  addCSSPrefixes,
);

task(
  'default',
  parallel(
    'copy-html',
    'prefix-css',
  )
);

task(
  'watch',
  parallel(
    runBrowserSync,
    watchFiles,
  )
)