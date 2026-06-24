const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const pdIdx = content.indexOf('function Pd()');
const vgIdx = content.indexOf('function Vg()');
const pdContent = content.substring(pdIdx, vgIdx);

const stripped = pdContent.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
let b = 0, p = 0, k = 0;
for (let i = 0; i < stripped.length; i++) {
  if (stripped[i] === '{') b++;
  else if (stripped[i] === '}') b--;
  else if (stripped[i] === '(') p++;
  else if (stripped[i] === ')') p--;
  else if (stripped[i] === '[') k++;
  else if (stripped[i] === ']') k--;
}
console.log("Stripped balance of Pd(): Braces", b, "Parens", p, "Brackets", k);
