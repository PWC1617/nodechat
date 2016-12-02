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

// colocar servidor à escuta no porto 3000 (ou o definido pelo sistema)
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
var addr = server.address();
console.log("a escutar no endereco", addr.address + ":" + addr.port);
});