const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
const len = 2373;
const afterPage = content.substring(tStart + len);
const xgIdx = afterPage.indexOf('function Xg()');

const mockVars = "const _ = {}; const o = {}; const kv = ''; const jv = ''; const ze = ''; const _t = ''; const Ug = ''; const Pd = ''; const wg = ''; const Hg = ''; const Xg = ''; const Qg = ''; const Jg = ''; const Zg = ''; const $g = ''; const e0 = ''; const t0 = ''; const a0 = ''; const Xt = () => ({}); const Il = ''; const hg = ''; ";

try {
  const acorn = require('acorn');
  acorn.parse(mockVars + afterPage.substring(0, xgIdx), { ecmaVersion: 'latest', sourceType: 'module' });
  console.log("Success parsed before Xg");
} catch (e) {
  console.log("Error:", e.toString(), e.pos);
}
