const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const pos = 392073;
console.log("Char at pos:", content[pos]);
console.log("Context:");
console.log(content.substring(pos - 20, pos + 20));
