import {createPhoneNumber} from './index.js';

describe('createPhoneNumber', () => {
  it('should returns a string of those numbers in the form of a phone number when pass [1,2,3,4,5,6,7,8,9,0]', () => {
    expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toBe('(123) 456-7890');
  });
});

