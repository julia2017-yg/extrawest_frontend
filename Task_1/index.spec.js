const operatins = require('./index');
const assert = require('assert');


describe("Tests", () => {
  it('should return sum of numbers', () => {
    assert.equal(operatins.calc('+',4,7),11);
  });
  it('should return minus of numbers', () => {
    assert.equal(operatins.calc('-',15,18),-3);
  });
  it('should return multiply of numbers', () => {
    assert.equal(operatins.calc('*',5,5),25);
  });
  it('should return divide of numbers', () => {
    assert.equal(operatins.calc('/',49,7),7);
  });
  it('should return divide of numbers', () => {
    assert.equal(operatins.calc('somethihg else',45, 45),0);
  });
});

