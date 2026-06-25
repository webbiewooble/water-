const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script type="module">([\s\S]*?)<\/script>/);

if (!match) {
  console.log('No module script found');
  process.exit(1);
}

const scriptContent = match[1];

// Mock basic browser environment
global.window = {
  location: { pathname: '/', hash: '' },
  getBasename: () => '/',
  addEventListener: () => {},
};
global.document = {
  createElement: () => ({ relList: { supports: () => true } }),
  querySelectorAll: () => [],
  getElementById: (id) => {
    if (id === 'root') return { appendChild: () => {} };
    return null;
  },
};
global.MutationObserver = class { observe() {} };
global.history = { pushState: () => {}, replaceState: () => {} };

try {
  // Execute the script
  // Since it's a module, we can't just eval it if it uses import/export, 
  // but if it's a bundled Vite script, it probably doesn't use top-level import/export
  // Let's check if it does.
  if (scriptContent.includes('import ') || scriptContent.includes('export ')) {
    console.log('Uses import/export, cant eval directly');
  }
  
  eval(scriptContent);
  console.log('Script executed without errors');
} catch (e) {
  console.error('RUNTIME ERROR:', e.message);
  console.error(e.stack);
}
