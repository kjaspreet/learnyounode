const http = require('http')
const url = require('url')

function parsetime(time)
{
	 return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
}

function unixtime(time)
{
	return{
		unixtime: time.getTime()
	}
}

const server = http.createServer(function(request,response){
	if(request.method != 'GET')
	{
		return response.end('Send GET Request')
	}
	var parseurl = url.parse(request.url,true)
	var time = new Date(parseurl.query.iso)
	var finaldata
	if(/^\/api\/parsetime/.test(request.url))
	{
		finaldata = parsetime(time)
	}
	else if(/^\/api\/unixtime/.test(request.url))
	{
		finaldata = unixtime(time)
	}
	if(finaldata)
	{
		response.writeHead(200,{'Content-type':'application/json'})
		response.end(JSON.stringify(finaldata))
	}
	else
	{
		response.writeHead(404)
		response.end()
	}

}).listen(process.argv[2])


