const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
const len = 2373;
const afterPage = content.substring(tStart + len);

const ggIdx = afterPage.indexOf('function Gg()');
const xgIdx = afterPage.indexOf('function Xg()');
const ggCode = afterPage.substring(ggIdx, xgIdx);

let b = 0, p = 0, k = 0;
for (let i = 0; i < ggCode.length; i++) {
  if (ggCode[i] === '{') b++;
  else if (ggCode[i] === '}') b--;
  else if (ggCode[i] === '(') p++;
  else if (ggCode[i] === ')') p--;
  else if (ggCode[i] === '[') k++;
  else if (ggCode[i] === ']') k--;
}
console.log("Balance of Gg(): Braces", b, "Parens", p, "Brackets", k);
