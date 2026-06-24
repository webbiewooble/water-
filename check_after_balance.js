const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

const tStart = 260084;
const len = 2373; // length of my newIonizerPageText
const beforePage = content.substring(0, tStart);
const afterPage = content.substring(tStart + len);

const oldIonizerPageText = 'function WaterIonizersPageComponent(){const c=[{label:"Model",value:"Euphoria Alkaline water Ionizer"}'; // wait, I don't know the exact full text!

// Actually we don't need to reconstruct the original.
// Let's do `acorn` parse on `beforePage + afterPage`?
// No, the syntax error might be inside afterPage!

let openBraces = 0, openParens = 0, openBrackets = 0;
for (let i = 0; i < afterPage.length; i++) {
  if (afterPage[i] === '{') openBraces++;
  else if (afterPage[i] === '}') openBraces--;
  else if (afterPage[i] === '(') openParens++;
  else if (afterPage[i] === ')') openParens--;
  else if (afterPage[i] === '[') openBrackets++;
  else if (afterPage[i] === ']') openBrackets--;
}
console.log("afterPage balance:");
console.log("Open Braces:", openBraces);
console.log("Open Parens:", openParens);
console.log("Open Brackets:", openBrackets);
