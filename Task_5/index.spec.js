import {getTime} from './index.js'

describe("getTime", () => {
  it('should returns first valid time in this string', () => {
    expect(getTime('Breakfast at 09:00')).toBe('09:00');
  });
  it('should returns first valid time in this string', () => {
    expect(getTime('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
  });
  it('should returns first valid time in this string', () => {
    expect(getTime('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
  });
  it('should returns empty string if correct time not found', () => {
    expect(getTime('Breakfast at 09:69, Dinner at 21:89')).toBe('');
  });
 
});
