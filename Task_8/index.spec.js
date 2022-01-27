import {countOccurrences} from './index.js'

describe("countOccurrences", () => {
  it('should returns number of times the letter appears in the phrase', () => {
    expect(countOccurrences('ability', 'i')).toBe(2);
  });
  it('should returns number of times the letter appears in the phrase', () => {
    expect(countOccurrences('abc', 'a')).toBe(1);
  });
  it('should returns number of times the letter appears in the phrase', () => {
    expect(countOccurrences('ABC', 'a')).toBe(1);
  });
});