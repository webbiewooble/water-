const fs = require('fs');
const acorn = require('acorn');
const originalContent = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

try {
  acorn.parse(originalContent, { ecmaVersion: 'latest', sourceType: 'module' });
} catch (e) {
  const code = originalContent.substring(0, e.pos);
  let openBraces = 0, openParens = 0, openBrackets = 0;
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '{') openBraces++;
    else if (code[i] === '}') openBraces--;
    else if (code[i] === '(') openParens++;
    else if (code[i] === ')') openParens--;
    else if (code[i] === '[') openBrackets++;
    else if (code[i] === ']') openBrackets--;
  }
  console.log("At syntax error pos:", e.pos);
  console.log("Open Braces:", openBraces);
  console.log("Open Parens:", openParens);
  console.log("Open Brackets:", openBrackets);
}
