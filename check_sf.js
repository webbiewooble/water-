const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const sfIdx = content.indexOf('function SandFiltersPageComponent()');

console.log(content.substring(sfIdx - 50, sfIdx + 50));
