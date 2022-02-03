import {reverseWords} from './index.js';

describe('reverseWords', () => {
  test('should return reverses word in the string when pass string "double  spaces"', () => {
    expect(reverseWords('double  spaces')).toBe('elbuod  secaps');
  });

  test('should return reverses word in the string when pass string "The quick brown fox jumps over the lazy dog."', () => {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.') ).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
  });
});
