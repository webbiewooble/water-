const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const vdIdx = content.indexOf('function Vg()');
console.log(content.substring(vdIdx - 1000, vdIdx + 200));
