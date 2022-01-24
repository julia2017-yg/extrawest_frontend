const operatins = require('./index');
const assert = require('assert');

describe("Tests", () => {
  it('should return on tel number', () => {
    assert.equal(operatins.createPhoneNumber([1,2,3,4,5,6,7,8,9,0]),"(123) 456-7890");
  });
});