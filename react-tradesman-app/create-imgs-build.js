
const glob = require('glob');
const fs = require('fs').promises;
const { parse: parseHTML } = require('node-html-parser');
const { html: beautifyHTML } = require('js-beautify');
const rimraf = require('rimraf');
const path = require('path');

const HTML_BUILD_FILES = glob.sync('build/**/*.html');
const JS_FILES_DIRECTORY = path.resolve('./build/static/js');

const shippableHTMLCode = HTML_BUILD_FILES.map(
  async (path) => {
    const contents = await fs.readFile(
      path, {encoding: 'utf-8'}
    );
    const html = parseHTML(contents);
    html
      .querySelectorAll('script')
      .forEach(t => t.remove());
      
    const shippableHTML = beautifyHTML(
      html.toString(),
      { indent_size: 2 }
    );

    return fs.writeFile(path, shippableHTML);
  }
);

// remove js files
rimraf.sync(JS_FILES_DIRECTORY);

//run for all files
Promise.all(
  shippableHTMLCode,
);


