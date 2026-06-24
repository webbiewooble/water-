const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const tStart = 260084;
const len = 2373;
const afterPage = content.substring(tStart + len);

const xgIdx = afterPage.indexOf('function Xg()');
const funcsBefore = afterPage.substring(0, xgIdx).match(/function [A-Za-z0-9_]+\s*\(/g);

console.log(funcsBefore);
