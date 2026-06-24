const fs = require('fs');
const acorn = require('acorn');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

try {
  acorn.parse(content, { ecmaVersion: 'latest', sourceType: 'module' });
  console.log("Parsed successfully!");
} catch (e) {
  console.log("Syntax Error at index", e.pos);
  console.log(content.substring(e.pos - 50, e.pos + 50));
}
