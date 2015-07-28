var net = require('net');

var port = 3000;

var clients = [];
var messages = [];

var server = net.createServer(function(c){
	c.write(messages+"\r\n");
  	c.write("Welcome to the chat, millenial!\r\n");
  	clients.push(c)

    c.on("data", function(data){
    messages.push(data.toString().trim())
	for (var i = 0; i < clients.length; i++){
		 if (c !== clients[i]){
		users[i].write(data);
		}
		}
	});


	c.on("end"){
	for (var i = 0; i < clients.length; i++){
		 if (c === clients[i]){
        clients.splice(i,1);
    	};
	}
});

server.listen(port, function(){
    console.log('listening on ' + port);
});