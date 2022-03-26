const fs = require('fs')
var a = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
console.log(a)