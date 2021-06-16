const path = require('path');
const { src, dest, task, parallel, watch, series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

const browserSync  = require('browser-sync').create();

const ASSETS_ROOT = 'assets';

const STYLE_PATH = path.join(ASSETS_ROOT, 'css');

const SRC_ROOT = './src';
const DIST_ROOT = './dist';

const ASSET_PATH_GLOB = {
  HTML: path.join(SRC_ROOT, '/**/*.html'),
  CSS: path.join(SRC_ROOT, '/**/*.css'),
};


function copyVendorStyles (done) {
  const bootstrapPath = './node_modules/bootstrap/dist/css/bootstrap.min.css';
  src(bootstrapPath)
    .pipe(plumber())
    .pipe(
      dest(path.join(DIST_ROOT, STYLE_PATH)),
    )
  done();
}

function addCSSPrefixes (done) {
  const styleSrc = path.join(SRC_ROOT, STYLE_PATH, 'index.css');
  const styleDist = path.join('.', DIST_ROOT, STYLE_PATH);
  console.log({ styleDist })
  src(styleSrc)
    .pipe(
      autoprefixer({
        overrideBrowserslist: [ 'last 2 versions', '> 5%'],
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
    series(copyVendorStyles, addCSSPrefixes, reloadBrowser),
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
  'copy-vendor-styles',
  copyVendorStyles
)

task(
  'default',
  parallel(
    'copy-html',
    'copy-vendor-styles',
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