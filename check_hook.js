const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

const hookIdx = content.indexOf('metaDesc.setAttribute("content",n.seoDesc||n.desc)}},[n]);');
console.log(content.substring(hookIdx - 200, hookIdx + 300));
