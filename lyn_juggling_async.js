const http = require('http')
const bl = require('bl')
var my_data1 = ''
var my_data2 = ''
var my_data3 = ''

http.get(process.argv[2],function callback(response){
	response.pipe(bl(function(err,data) {
		if (err) 
		{ 
			console.error(err)
		}
		else
		{
			my_data1 = data.toString();			
			console.log(my_data1);
			http.get(process.argv[3],function callback(response){
				response.pipe(bl(function(err,data) {
				if (err) 
				{ 
					console.error(err)
				}
				else
				{
					my_data2 = data.toString();			
					console.log(my_data2);
					http.get(process.argv[4],function callback(response){
						response.pipe(bl(function(err,data) {
						if (err) 
						{ 
							console.error(err)
						}
						else
						{
							my_data3 = data.toString();			
							console.log(my_data3);
						}
		
						}))
					})
				}
		
				}))
			})
		}
		
	}))
})







