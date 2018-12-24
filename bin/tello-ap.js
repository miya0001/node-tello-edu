#!/usr/bin/env node

const program = require('commander');
const shellescape = require('shell-escape');
const Tello = require('..');

program
  .usage('<ssid> <password> [options]', 'Set the Tello to station mode, and connect to the access point with ssid and password.')
  .option('-i, --ip <ip-address>')
  .option('-p, --port <port>')
  .parse(process.argv);

const args = shellescape(program.args)

if (!args.length) {
  console.error('ssid and password required.');
  process.exit(1)
}

const params = {}

if (program.ip) {
  params.ip = program.ip
}

if (program.port) {
  params.port = program.port
}

const tello = new Tello(params)
tello.init()

tello.command(`ap ${args}`, (client) => {
  client.close()
})
