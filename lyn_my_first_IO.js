const fs = require('fs')
var str = fs.readFileSync(process.argv[2]).toString()
var str_1 = str.split('\n')
console.log(str_1.length - 1)