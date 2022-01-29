import {isPalindrome} from './index.js'

describe("isPalindrome", () => {
  it('should return true when pass string "Eva, can I see bees in a cave?"', () => {
    expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
  });
  it('should return false when pass string "race a car"', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });
  it('should return true when pass string "Was it a cat I saw?"', () => {
    expect(isPalindrome('Was it a cat I saw?')).toBe(true);
  });
});