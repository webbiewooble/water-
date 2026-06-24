const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

const pdIdx = content.indexOf('function Pd()');
const vgIdx = content.indexOf('function Vg()');
let pdContent = content.substring(pdIdx, vgIdx);

// pdContent ends with:  idx))})]}):null]}):null]})]}):null]})]})})}
// Let's try to remove combinations of } ) ]

console.log("Original tail:", pdContent.substring(pdContent.length - 100));

// Let's try replacing "]})]}):null" with "}:null"
// or removing the last ]})]})
// Actually, let's just make a loop that removes tokens from the end until it parses!

const mockVars = "const _ = {}; const o = {}; const kv = ''; const jv = ''; const ze = ''; const _t = ''; const Ug = ''; function SandFiltersPageComponent(){}; const Hg = ''; const Xg = ''; const Qg = ''; const Jg = ''; const Zg = ''; const $g = ''; const e0 = ''; const t0 = ''; const a0 = ''; const Xt = () => ({}); const Il = ''; const hg = ''; const EuphoriaProductDetailsComponent = ''; ";

const acorn = require('acorn');

let currentStr = pdContent;

function tryParse(str) {
  try {
    acorn.parse(mockVars + str, { ecmaVersion: 'latest', sourceType: 'module' });
    return true;
  } catch(e) {
    return false;
  }
}

// We know it needs to end with `}`
// Let's try removing instances of ]}) from the suffix
const suffix = pdContent.substring(pdContent.length - 200);
// We want to turn   ):null]}:null]})]}):null]})]})})}  into something valid!
// But wait, the error is at the `}:null`!
// What if we change `]}:null` to `]}):null`? (adding paren)

if (tryParse(pdContent.replace("]}:null", "]}):null"))) {
  console.log("Parsed by adding ) !");
} else {
  console.log("Failed to parse by adding )");
}

