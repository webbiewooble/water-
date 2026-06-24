const interceptCode = '\\nif(n.name==="Kita Euphoria Water Ionizer")return o.jsx(EuphoriaProductDetailsComponent,{n:n});\\n';
const noStrings = interceptCode.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
let b = 0, p = 0, k = 0;
for (let i = 0; i < noStrings.length; i++) {
  if (noStrings[i] === '{') b++;
  else if (noStrings[i] === '}') b--;
  else if (noStrings[i] === '(') p++;
  else if (noStrings[i] === ')') p--;
  else if (noStrings[i] === '[') k++;
  else if (noStrings[i] === ']') k--;
}
console.log("Intercept balance:", b, p, k);
