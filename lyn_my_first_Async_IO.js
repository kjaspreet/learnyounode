const fs=require('fs')
var str
var str_1

fs.readFile(process.argv[2],(err,data)=>{
	if(err)
		console.log(err)
	str = data.toString()
	str_1 = str.split('\n')
	console.log(str_1.length - 1)
})

