import {vowelCount} from './index.js'

describe("vowelCount", () => {
  it('should return the count of vowels', () => {
    expect(vowelCount('abracadabra')).toBe(5);
  });
  it('should return the count of vowels', () => {
    expect(vowelCount('letter')).toBe(2);
  });
  it('should return the count of vowels', () => {
    expect(vowelCount('toy')).toBe(1);
  });
  it('should return the count of vowels', () => {
    expect(vowelCount('555')).toBe(0);
  });
});
