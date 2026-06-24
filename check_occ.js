const fs = require('fs');

const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');

const t1 = content.indexOf('function WaterIonizersPageComponent()');
console.log("t1: ", t1);

const t2 = content.indexOf('Alkaline Ionic Water');
console.log("t2:", t2);

