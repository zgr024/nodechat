var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('/home/nodechat/application/index.html');
});


io.on('connection', function(socket){
 	io.emit('chat message', 'A user has joined');
  	socket.on('disconnect', function(){
		console.log('user disconnected');
  	});
  	socket.on('chat message', function(msg){
    	io.emit('chat message', msg);
 	});
});

http.listen(81, function() {
  console.log('HTTP Server Running... Listening On *81');
});
