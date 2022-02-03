import {isPrime} from './index.js';

describe('isPrime', () => {
  test('should return true when integer pass is 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('should return true when integer pass is 73', () => {
    expect(isPrime(73)).toBe(true);
  });

  test('should return false when integer pass is 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  test('should return false when integer pass is 75', () => {
    expect(isPrime(75)).toBe(false);
  });

  test('should return false when integer pass is not a prime', () => {
    expect(isPrime(-1)).toBe(false);
  });
});
