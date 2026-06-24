const fs = require('fs');
const content = fs.readFileSync('assets/index_original.js', 'utf8');

// I don't have the exact strings targetStartIdx / oldIonizerPageEnd, I can grep the original to find them!
const oldIonizerPageStart = 'function WaterIonizersPageComponent(){const c=[{label:"Model",value:"Euphoria Alkaline water Ionizer"}';
const targetStartIdx = content.indexOf(oldIonizerPageStart);

const oldEndStr = 'Alkaline Ionic Water"].map((r,d)=>o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(hg,{className:"h-5 w-5 text-green-600"}),o.jsx("span",{className:"text-gray-700 font-medium",children:r})]},d))})]})]})]})})}';
const targetEndIdx = content.indexOf(oldEndStr);

if (targetStartIdx === -1 || targetEndIdx === -1) {
  console.log("Could not find start/end in original!");
} else {
  const deletedStr = content.substring(targetStartIdx, targetEndIdx + oldEndStr.length);
  const stripped = deletedStr.replace(/"(?:[^"\\]|\\.)*"/g, '').replace(/'(?:[^'\\]|\\.)*'/g, '').replace(/`(?:[^`\\]|\\.)*`/g, '');
  let b = 0, p = 0, k = 0;
  for (let i = 0; i < stripped.length; i++) {
    if (stripped[i] === '{') b++;
    else if (stripped[i] === '}') b--;
    else if (stripped[i] === '(') p++;
    else if (stripped[i] === ')') p--;
    else if (stripped[i] === '[') k++;
    else if (stripped[i] === ']') k--;
  }
  console.log("Deleted balance:", b, p, k);
}
