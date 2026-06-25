const jsdom = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const dom = new jsdom.JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "https://example.github.io/my-repo/"
});

dom.window.onerror = function(msg, source, lineno, colno, error) {
  console.log('WINDOW ERROR:', msg, error);
};

dom.window.document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log("Root content:", dom.window.document.getElementById('root').innerHTML.substring(0, 200));
  }, 3000);
});
