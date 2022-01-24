const operatins = require('./index');
const assert = require('assert');

describe("Tests", () => {
  it('should return result concat', () => {
    assert.equal(operatins.stringMerge("hello", "world", "l"),"held");
  });
  it('should return result concat', () => {
    assert.equal(operatins.stringMerge("coding", "anywhere", "n"),"codinywhere");
  });
  it('should return result concat', () => {
    assert.equal(operatins.stringMerge("jason", "samson", "s"),"jasamson");
  });
  it('should return result concat', () => {
    assert.equal(operatins.stringMerge("wonderful", "people", "e"),"wondeople");
  });
});