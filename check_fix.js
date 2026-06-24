const fs = require('fs');
const content = fs.readFileSync('./assets/index-CWBHOOU2.js', 'utf8');
const search = "]}:null";
let index = content.indexOf(search);
while (index !== -1) {
  console.log("Found at:", index);
  console.log("Context:", content.substring(index - 50, index + 50));
  index = content.indexOf(search, index + 1);
}
