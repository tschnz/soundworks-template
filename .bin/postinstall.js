const path = require('path');
const fs = require('fs');

const cwd = process.cwd();

// mkdir -p .vendors/public && cp -R node_modules/@webcomponents/webcomponentsjs .vendors/public
const vendorsDirectory = path.join(cwd, '.vendors', 'public', 'webcomponentsjs');
fs.mkdirSync(vendorsDirectory, { recursive: true });

// cp -R node_modules/@webcomponents/webcomponentsjs .vendors/public
const src = path.join(cwd, 'node_modules', '@webcomponents', 'webcomponentsjs', 'webcomponents-bundle.js');
const dest = path.join(cwd, '.vendors', 'public', 'webcomponentsjs', 'webcomponents-bundle.js');
fs.copyFileSync(src, dest);
