const mymodule_call = require('./lyn_mymodule.js')
mymodule_call(process.argv[2],process.argv[3],function (err,data){
	if(err)
	{
		console.log(err);
	}
	else
	{
		for(var i in data)
		{
			console.log(data[i]);
		}
		
	}
});