#!/usr/bin/env node

const PORT = 8890;
const HOST = '0.0.0.0';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('listening', () => {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', (message, remote) => {
  console.log(remote.address + ':' + remote.port +' - ' + message);
});

server.bind(PORT, HOST);
