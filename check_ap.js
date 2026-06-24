const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
const len = 2373;
const afterPage = content.substring(tStart + len);

try {
  const acorn = require('acorn');
  // Need to mock _, o, etc as variable declarations to make it parseable
  const mockVars = "const _ = {}; const o = {}; const kv = ''; const jv = ''; const ze = ''; const _t = ''; const Ug = ''; const Pd = ''; const wg = ''; const Hg = ''; const Xg = ''; const Qg = ''; const Jg = ''; const Zg = ''; const $g = ''; const e0 = ''; const t0 = ''; const a0 = ''; function SandFiltersPageComponent(){}; function wg(){}; function Hg(){}; function Xg(){}; function Qg(){}; function Jg(){}; function Zg(){}; function $g(){}; function e0(){}; function t0(){}; function a0(){}; const Xt = () => ({}); const Il = ''; ";
  
  acorn.parse(mockVars + afterPage, { ecmaVersion: 'latest', sourceType: 'module' });
  console.log("afterPage parsed perfectly!");
} catch (e) {
  console.log("afterPage ERROR at pos", e.pos);
  const code = mockVars + afterPage;
  console.log(code.substring(e.pos - 50, e.pos + 50));
}
