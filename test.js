const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => {
  console.error("PAGE ERROR:", err);
});
virtualConsole.on("warn", (warn) => {
  console.warn("PAGE WARN:", warn);
});
virtualConsole.on("info", (info) => {
  console.log("PAGE INFO:", info);
});
virtualConsole.on("log", (log) => {
  console.log("PAGE LOG:", log);
});

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  virtualConsole
});

setTimeout(() => {
  console.log("Root HTML:", dom.window.document.getElementById('root').innerHTML.substring(0, 500));
}, 2000);
