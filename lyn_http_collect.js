const http = require('http')
const bl = require('bl')

http.get(process.argv[2],function callback(response){
	response.pipe(bl(function(err,data) {
		if (err) 
		{ 
			console.error(err)
		}
		else
		{
			var my_data = data.toString();
			console.log(my_data.length);
			console.log(my_data);
		}
		
	}))
})