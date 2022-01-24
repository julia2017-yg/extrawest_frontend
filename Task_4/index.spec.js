const operatins = require('./index');
const assert = require('assert');

describe("Tests", () => {
  it('should return operands', () => {
    assert.equal(operatins.getOperands('1 + 2'),'a: 1, b: 2');
  });
  it('should return operands', () => {
    assert.equal(operatins.getOperands('1.2 * -3.4'),'a: 1.2, b: -3.4');
  });
  it('should return operands', () => {
    assert.equal(operatins.getOperands('1 - 2'),'a: 1, b: 2');
  });
  it('should return operands', () => {
    assert.equal(operatins.getOperands('1 - -2'),'a: 1, b: -2');
  });
}); 