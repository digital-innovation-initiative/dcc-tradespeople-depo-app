
const glob = require('glob');
const fs = require('fs');
const { parse: parseHTML } = require('node-html-parser');

const BUILD_FILES = glob.sync('build/**/*.html');

const [trial] = BUILD_FILES.map(
  (path) => {
    const contents = fs.readFileSync(
      path, {encoding: 'utf-8'}
    );
    const html = parseHTML(contents);
    html.querySelectorAll('script').forEach(t => t.remove());

    return html.toString();
  }
);

console.log(trial)