import {isPalindrome} from './index.js'

describe("isPalindrome", () => {
  it('should returns a string, determine if it is a palindromes', () => {
    expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
  });
  it('should returns a string, determine if it is a palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });
  it('should returns a string, determine if it is a palindrome', () => {
    expect(isPalindrome('Was it a cat I saw?')).toBe(true);
  });
});