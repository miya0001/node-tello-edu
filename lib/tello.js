'use strict'

const dgram = require('dgram');

module.exports = class Tello {

  constructor(options = {}) {
    this.client = dgram.createSocket('udp4');

    const params = {
      ip: "192.168.10.1",
      port: 8889,
    }

    this.options = Object.assign(params, options)

    this.sendCommand('command')
  }

  sendCommand(command, callback = () => {} ) {
    const message = Buffer.from(command);

    this.client.send(message, 0, message.length, this.options.port, this.options.ip, (err) => {
      if (err) throw err;
      callback(this.client)
    });
  }

  takeoff() {
    this.sendCommand('takeoff')
  }

  land() {
    this.sendCommand('land')
  }
}
