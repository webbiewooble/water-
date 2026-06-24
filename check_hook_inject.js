const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const hookIdx = content.indexOf('metaDesc.setAttribute("name","description");document.head.appendChild(metaDesc)}metaDesc.setAttribute("content",n.seoDesc||n.desc)}},[n]);');
console.log(content.substring(hookIdx, hookIdx + 1000));
