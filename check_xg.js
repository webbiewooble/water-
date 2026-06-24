const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
const len = 2373;
const afterPage = content.substring(tStart + len);
const xgIdx = afterPage.indexOf('function Xg()');
console.log(afterPage.substring(xgIdx - 50, xgIdx + 50));
