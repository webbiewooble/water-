const fs = require('fs');
const content = fs.readFileSync('assets/index_original.js', 'utf8');

const t1 = content.indexOf('function WaterIonizersPageComponent()');
const t2 = content.indexOf('function SandFiltersPageComponent()');

const snippet = content.substring(t1, t2);

let b = 0, p = 0, k = 0;
// Note: strip strings for true balance
const noStrings = snippet.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
for (let i = 0; i < noStrings.length; i++) {
  if (noStrings[i] === '{') b++;
  else if (noStrings[i] === '}') b--;
  else if (noStrings[i] === '(') p++;
  else if (noStrings[i] === ')') p--;
  else if (noStrings[i] === '[') k++;
  else if (noStrings[i] === ']') k--;
}

console.log("Original Component length:", snippet.length);
console.log("Original Component balance: Braces", b, "Parens", p, "Brackets", k);

// Write it to a file so we can view it
fs.writeFileSync('original_water_ionizer.js', snippet);
