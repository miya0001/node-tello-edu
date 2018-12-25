#!/usr/bin/env node

const program = require('commander');
const shellescape = require('shell-escape');
const Tello = require('..');
const shell = require('shell')

program
  .option('-i, --ip <ip-address>', 'IP address.')
  .option('-p, --port <port>', 'Port.')
  .parse(process.argv);

const params = {}

if (program.ip) {
  params.ip = program.ip
}

if (program.port) {
  params.port = program.port
}

const tello = new Tello(params)

//delete process.argv

const app = new shell({
  isShell: true,
})

app.configure(() => {
  app.use(shell.completer({
    shell: app
  }));
  app.use(shell.router({
    shell: app
  }));
  app.use(shell.help({
    shell: app,
    introduction: true
  }));
});

app.cmd('takeoff', 'Auto takeoff.', (req, res, next) => {
  tello.takeoff();
  res.prompt();
});

app.cmd('land', 'Auto landing.', (req, res, next) => {
  tello.land();
  res.prompt();
});

app.cmd('cw :x', 'Rotate “x” degrees clockwise.', (req, res, next) => {
  tello.sendCommand(`cw ${parseInt(req.params.x)}`);
  res.prompt();
});

app.cmd('ccw :x', 'Rotate “x” degrees counter-clockwise.', (req, res, next) => {
  tello.sendCommand(`cw ${parseInt(req.params.x)}`);
  res.prompt();
});
