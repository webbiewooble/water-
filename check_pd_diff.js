const fs = require('fs');

const o_content = fs.readFileSync('assets/index_original.js', 'utf8');
const o_pdIdx = o_content.indexOf('function Pd()');
const o_vgIdx = o_content.indexOf('function Vg()');
const o_pdContent = o_content.substring(o_pdIdx, o_vgIdx);
console.log("Original Pd() len:", o_pdContent.length);

const m_content = fs.readFileSync('assets/index-CWBHOOU2.js', 'utf8');
const m_pdIdx = m_content.indexOf('function Pd()');
const m_vgIdx = m_content.indexOf('function Vg()');
const m_pdContent = m_content.substring(m_pdIdx, m_vgIdx);
console.log("Modified Pd() len:", m_pdContent.length);

console.log("Expected new length:", o_pdContent.length + 986 /*catalog entry*/ + 98 /* hook */);
