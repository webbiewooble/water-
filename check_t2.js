const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const t2 = 257276;
console.log(content.substring(t2 - 100, t2 + 500));
