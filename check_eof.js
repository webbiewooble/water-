const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
console.log("File len:", content.length);
console.log("End of file:", content.substring(content.length - 200, content.length));
