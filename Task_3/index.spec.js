import {createPhoneNumber} from './index.js'

describe("Tests", () => {
  it('should return on tel number', () => {
    expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toBe("(123) 456-7890");
  });
});

