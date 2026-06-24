const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
const beforePage = content.substring(0, tStart);

let openBraces = 0, openParens = 0, openBrackets = 0;
for (let i = 0; i < beforePage.length; i++) {
  if (beforePage[i] === '{') openBraces++;
  else if (beforePage[i] === '}') openBraces--;
  else if (beforePage[i] === '(') openParens++;
  else if (beforePage[i] === ')') openParens--;
  else if (beforePage[i] === '[') openBrackets++;
  else if (beforePage[i] === ']') openBrackets--;
}
console.log("beforePage balance:");
console.log("Open Braces:", openBraces);
console.log("Open Parens:", openParens);
console.log("Open Brackets:", openBrackets);
