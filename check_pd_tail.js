const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

const pdIdx = content.indexOf('function Pd()');
const vgIdx = content.indexOf('function Vg()');
let toParse = content.substring(pdIdx, vgIdx);

console.log(toParse.substring(toParse.length - 200));
