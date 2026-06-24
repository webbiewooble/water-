const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const pdi = content.indexOf('function Pd()');
const hook = 'metaDesc.setAttribute("name","description");document.head.appendChild(metaDesc)}metaDesc.setAttribute("content",n.seoDesc||n.desc)}},[n]);';

const firstHook = content.indexOf(hook);
const secondHook = content.indexOf(hook, firstHook + 1);

console.log("Pd() is at ", pdi);
console.log("Hook 1 is at ", firstHook);
console.log("Hook 2 is at ", secondHook);
