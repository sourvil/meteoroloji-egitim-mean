console.log('Demo 1 başlıyor...');

var http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    console.log('Meteoroloji HttpServer.');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Meteorolojiye Selamlar!\n');
    
}).listen(port);