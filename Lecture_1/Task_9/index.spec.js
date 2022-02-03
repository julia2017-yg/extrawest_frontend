import {vowelCount} from './index.js';

describe('vowelCount', () => {
  it('should return the count of vowels when pass "abracadabra"', () => {
    expect(vowelCount('abracadabra')).toBe(5);
  });

  it('should return the count of vowels when pass "letter"', () => {
    expect(vowelCount('letter')).toBe(2);
  });

  it('should return the count of vowels when pass "toy"', () => {
    expect(vowelCount('toy')).toBe(1);
  });

  it('should return zero if vowels does not found when pass "555"', () => {
    expect(vowelCount('555')).toBe(0);
  });
});
