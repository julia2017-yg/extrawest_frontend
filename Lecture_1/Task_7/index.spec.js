import {swapCase} from './index.js';

describe('swapCase', () => {
  it('should returns a string swaping the case when pass "aBc"', () => {
    expect(swapCase('aBc')).toBe('AbC');
  });

  it('should returns a string swaping the case when pass "GooD"', () => {
    expect(swapCase('GooD')).toBe('gOOd');
  });

  it('should returns a string in the lower case when pass "hello"', () => {
    expect(swapCase('hello')).toBe('HELLO');
  });
});
