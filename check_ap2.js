const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
const len = 2373;
const afterPage = content.substring(tStart + len);

const mockVars = "const _ = {}; const o = {}; const kv = ''; const jv = ''; const ze = ''; const _t = ''; const Ug = ''; const Pd = ''; const wg = ''; const Hg = ''; const Xg = ''; const Qg = ''; const Jg = ''; const Zg = ''; const $g = ''; const e0 = ''; const t0 = ''; const a0 = ''; const Xt = () => ({}); const Il = ''; ";

try {
  const acorn = require('acorn');
  acorn.parse(mockVars + afterPage, { ecmaVersion: 'latest', sourceType: 'module' });
  console.log("afterPage parsed perfectly!");
} catch (e) {
  console.log("afterPage ERROR at pos", e.pos);
  const code = mockVars + afterPage;
  console.log(code.substring(e.pos - 50, e.pos + 50));
}
