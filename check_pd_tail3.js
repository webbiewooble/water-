const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const pIdx = content.indexOf('function Pd()');
const vIdx = content.indexOf('function Vg()');
const str = content.substring(vIdx - 200, vIdx);
console.log(str);
