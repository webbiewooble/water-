const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

const pdIdx = content.indexOf('function Pd()');
const vgIdx = content.indexOf('function Vg()');
const pdContent = content.substring(pdIdx, vgIdx);

const mockVars = "const _ = {}; const o = {}; const kv = ''; const jv = ''; const ze = ''; const _t = ''; const Ug = ''; function SandFiltersPageComponent(){}; const Hg = ''; const Xg = ''; const Qg = ''; const Jg = ''; const Zg = ''; const $g = ''; const e0 = ''; const t0 = ''; const a0 = ''; const Xt = () => ({}); const Il = ''; const hg = ''; const EuphoriaProductDetailsComponent = ''; ";

try {
  const acorn = require('acorn');
  acorn.parse(mockVars + pdContent, { ecmaVersion: 'latest', sourceType: 'module' });
  console.log("Pd() parsed perfectly!");
} catch (e) {
  console.log("Pd() ERROR at pos", e.pos);
  const code = mockVars + pdContent;
  console.log(code.substring(e.pos - 50, e.pos + 50));
}
