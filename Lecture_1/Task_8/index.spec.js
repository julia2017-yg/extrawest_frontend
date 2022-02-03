import {countOccurrences} from './index.js';

describe('countOccurrences', () => {
  it('should returns count occurrenced when the letter occurs in the phrase when pass ("ability", "i")', () => {
    expect(countOccurrences('ability', 'i')).toBe(2);
  });

  it('should returns count occurrenced when the letter occurs in the phrase when pass ("abc", "a")', () => {
    expect(countOccurrences('abc', 'a')).toBe(1);
  });

  it('should returns count occurrenced when the letter occurs in the phrase when pass ("ABC", "a")', () => {
    expect(countOccurrences('ABC', 'a')).toBe(1);
  });
});