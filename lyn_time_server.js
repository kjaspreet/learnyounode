const net = require('net')

var server = net.createServer(function (socket){
	var date = new Date()
	var month = date.getMonth() + 1 //because getMonth starts from 0.
	if(month < 10)
		month = '0' + month;
	var data = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' +  date.getHours() + ':' + date.getMinutes()
	socket.write(data);
	socket.write('\n');
	socket.end();
});

server.listen(process.argv[2]);
