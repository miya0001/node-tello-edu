#!/usr/bin/env node

'use strict'

const program = require('commander');
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('ap <ssid> <password> [options]', 'Set the Tello to station mode, and connect to the access point with ssid and password.')
  .command('shell', 'Launch UDP server to recieve Tello state on 0.0.0.0:8890')
  .command('state', 'Launch UDP server to recieve Tello state on 0.0.0.0:8890')
  .parse(process.argv)
