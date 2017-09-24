const fs = require('fs')
var path =require('path')

fs.readdir(process.argv[2],(err,data) => {

	if(err)
		console.log(err)

	for(var i in data)
	{
		if(path.extname(data[i]) === '.' + process.argv[3])
		{
			console.log(data[i])
		}
	}
})