import {reverseWords} from './index.js';

describe('reverseWords', () => {
  test('should return reverses word in the string when pass "double  spaces"', () => {
    expect(reverseWords('double  spaces')).toBe('elbuod  secaps');
  });

  test('should return reverses word in the string when pass "The quick brown fox jumps over the lazy dog."', () => {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.') ).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
  });
});
