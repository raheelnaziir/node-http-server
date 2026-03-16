const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
console.log(a);

console.log(path.extname(__filename));
