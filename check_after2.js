const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const targetStartIdx = 260084;
const len = 2373;

console.log(content.substring(targetStartIdx + len, targetStartIdx + len + 300));
