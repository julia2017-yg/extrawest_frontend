const operatins = require('./index');
const assert = require('assert');

describe("Tests", () => {
  it('should return valid first time', () => {
    assert.equal(operatins.getTime('Breakfast at 09:00'),'09:00');
  });
  it('should return valid first time', () => {
    assert.equal(operatins.getTime('Breakfast at 09:60 , Dinner at 21:00'),'21:00');
  });
  it('should return valid first time', () => {
    assert.equal(operatins.getTime('Breakfast at 09:59 , Dinner at 21:00'),'09:59');
  });
});