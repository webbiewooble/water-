const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

// Strip all strings
const noStrings = content.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
let b = 0, p = 0, k = 0;
for (let i = 0; i < noStrings.length; i++) {
  if (noStrings[i] === '{') b++;
  else if (noStrings[i] === '}') b--;
  else if (noStrings[i] === '(') p++;
  else if (noStrings[i] === ')') p--;
  else if (noStrings[i] === '[') k++;
  else if (noStrings[i] === ']') k--;
}
console.log("Entire file stripped balance:", b, p, k);
