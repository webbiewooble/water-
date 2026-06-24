const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const pdi = content.indexOf('function Pd()');
console.log(content.substring(pdi, pdi + 1000));
