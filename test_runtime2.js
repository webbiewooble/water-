const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script type="module">([\s\S]*?)<\/script>/);

if (!match) process.exit(1);

const scriptContent = match[1];

// Use JSDOM just for the root element, but eval in our own context
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM('<!DOCTYPE html><div id="root"></div>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.MutationObserver = dom.window.MutationObserver;

try {
  eval(scriptContent);
  console.log('Script executed without errors');
} catch (e) {
  console.error('RUNTIME ERROR:', e.message);
}
