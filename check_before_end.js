const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
console.log(content.substring(tStart - 100, tStart));
