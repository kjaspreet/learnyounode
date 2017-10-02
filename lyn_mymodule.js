const fs = require('fs')
var path =require('path')
var my_data = []

module.exports = function (my_fname,my_extname,callback)
{
	
		fs.readdir(my_fname,(err,data) => {

			if(err)
				return callback(err)

			for(var i in data)
			{
				if(path.extname(data[i]) === '.' + my_extname)
				{
					my_data.push(data[i])
				}
			}
			
				callback(null,my_data)
		})
	
}

