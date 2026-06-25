const jsdom = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Strip out external scripts and images to prevent hanging
const cleanedHtml = html.replace(/<script src="https:\/\/cdn.tailwindcss.com"><\/script>/g, '')
                        .replace(/<link[^>]*>/g, '')
                        .replace(/<img[^>]*>/g, '');

const dom = new jsdom.JSDOM(cleanedHtml, {
  runScripts: "dangerously",
  url: "https://kitasystems.github.io/"
});

dom.window.onerror = function(msg, src, l, c, err) {
  console.log('ERROR:', msg, err);
};

dom.window.console.error = function(...args) {
  console.log('CONSOLE ERROR:', ...args);
};

setTimeout(() => {
  console.log("Root content length:", dom.window.document.getElementById('root').innerHTML.length);
}, 1000);
