const chai = require('chai');
const assert = chai.assert;
const Tello = require('..');

const program = {};


describe('`Tello()` should work as expected.', () => {
  it('should have props as expected.', () => {
    const tello = new Tello({})
    assert.deepEqual("192.168.10.1", tello.options.ip);
    assert.deepEqual(8889, tello.options.port);
  });
  it('should pass params as expected.', () => {
    const tello = new Tello({
      ip: "192.168.1.123",
      port: 1111
    })
    assert.deepEqual("192.168.1.123", tello.options.ip);
    assert.deepEqual(1111, tello.options.port);
  });
});
