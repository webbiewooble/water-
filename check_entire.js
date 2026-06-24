const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

let b = 0, p = 0, k = 0;
for (let i = 0; i < content.length; i++) {
  if (content[i] === '{') b++;
  else if (content[i] === '}') b--;
  else if (content[i] === '(') p++;
  else if (content[i] === ')') p--;
  else if (content[i] === '[') k++;
  else if (content[i] === ']') k--;
}
console.log("Entire file balance: Braces", b, "Parens", p, "Brackets", k);
