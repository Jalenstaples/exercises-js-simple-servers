let net = require('net');
let serverLog = require('./lib/serverLog');
let SERVER_PORT = 2004;
const fs = require('fs');
let text = fs.readFileSync('./files/randomfiles.txt');
let server = net.createServer(function(connection) {
  let clientAddress = connection.remoteAddress;
  serverLog('CONNECT', `Client at ${clientAddress} connected`);
  connection.write(text);
  connection.end();
});

server.listen(SERVER_PORT, function() {
  serverLog('LISTENING', `MOTD server listening on port ${SERVER_PORT}`);
});
