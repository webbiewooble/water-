const fs = require('fs');
const content = fs.readFileSync('assets/index_original.js', 'utf8');

const t1 = content.indexOf('WaterIonizersPageComponent');
console.log("t1 occurs at:", t1);
