# node-tello-edu

A client library for Tello EDU.

https://www.ryzerobotics.com/tello-edu

## How to install

```
$ npm install https://github.com/miya0001/node-tello-edu --save
```

## Example

```
const tello = require('tello')

const drone = new tello({
  ip: "192.168.43.208",
})

setTimeout(() => {
  drone.sendCommand('up 100')
}, 5000);

setTimeout(() => {
  drone.sendCommand('flip f')
}, 8000);

setTimeout(() => {
  drone.land()
}, 20000);
```

You can see command to control tello in SDK documentation.

https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf

## CLI interface

This module has a cli interface to manage your tello.

You can run cli as follows.

```
$ $(npm bin)/tello --help
Usage: tello [options] [command]

Options:
  -V, --version                   output the version number
  -h, --help                      output usage information

Commands:
  ap <ssid> <password> [options]  Set the Tello to station mode, and connect to the access point with ssid and password.
  shell                           Launch shell to control Tello.
  state                           Launch UDP server to recieve Tello state on 0.0.0.0:8890.
  help [cmd]                      display help for [cmd]
```
