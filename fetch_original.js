const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("assets/index_original.js");
https.get("https://ais-pre-tkdum3ma74puzizqpu6wsy-1014886438581.asia-southeast1.run.app/assets/index-CWBHOOU2.js", function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close();  
    console.log("Download completed");
  });
}).on('error', function(err) {
  fs.unlink("assets/index_original.js");
  console.error("Error:", err);
});
