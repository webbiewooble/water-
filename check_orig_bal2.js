const fs = require('fs');
const content = fs.readFileSync('assets/index_original.js', 'utf8');

const stripped = content.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
let b = 0, p = 0, k = 0;
for (let i = 0; i < stripped.length; i++) {
  if (stripped[i] === '{') b++;
  else if (stripped[i] === '}') b--;
  else if (stripped[i] === '(') p++;
  else if (stripped[i] === ')') p--;
  else if (stripped[i] === '[') k++;
  else if (stripped[i] === ']') k--;
}
console.log("Original file balance:", b, p, k);

// Also check Pd() in original
const pdIdx = content.indexOf('function Pd()');
const vgIdx = content.indexOf('function Vg()');
const pdContent = content.substring(pdIdx, vgIdx);
const pdStripped = pdContent.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
let b2 = 0, p2 = 0, k2 = 0;
for (let i = 0; i < pdStripped.length; i++) {
  if (pdStripped[i] === '{') b2++;
  else if (pdStripped[i] === '}') b2--;
  else if (pdStripped[i] === '(') p2++;
  else if (pdStripped[i] === ')') p2--;
  else if (pdStripped[i] === '[') k2++;
  else if (pdStripped[i] === ']') k2--;
}
console.log("Original Pd() balance:", b2, p2, k2);

