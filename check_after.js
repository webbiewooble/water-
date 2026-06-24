const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const targetStartIdx = 260084;
const newIonizerPageTextLength = 2004;

const afterIndex = targetStartIdx + newIonizerPageTextLength;

console.log(content.substring(afterIndex - 10, afterIndex + 300));
