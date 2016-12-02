// usar a framework express para web apps
var express = require('express');

// criar uma app com base no express
var app = express();

// usar um servidor http
var http = require('http');

// criar um servidor http para a app/router
var server = http.createServer(app);

// responder com 'ola mundo' ao pedido get
app.get('/', function(req, res){
res.send('<h1>Ola PWC</h1>');
});

// usar o módulo path (utilidades de caminhos)
var path = require('path');
// usar o servidor de static do express
app.use(express.static(path.resolve(__dirname, 'static')));


//integrar sockets
var socketio = require("socket.io");

var io = socketio.listen(server);
// connection e uma mensagem por defeito de conexao

io.on('connection', function(socket){
	console.log('temos um cliente ligado');
	socket.on("chat",function (mensagem) {
		console.log(mensagem);
		io.emit("new",mensagem);
	});
});



// colocar servidor à escuta no porto 3000 (ou o definido pelo sistema)
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
var addr = server.address();
console.log("a escutar no endereco", addr.address + ":" + addr.port);
});