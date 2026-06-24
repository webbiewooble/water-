const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

try {
  new Function(content);
} catch (e) {
  console.log(e.toString());
  // Let's try to extract line/col from the stack trace if possible
  // Or just write it to a temp file and let node parse it
}
