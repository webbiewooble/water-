const fs = require('fs');
console.log(fs.readdirSync('.'));
if (fs.existsSync('./assets')) {
  console.log(fs.readdirSync('./assets'));
}
