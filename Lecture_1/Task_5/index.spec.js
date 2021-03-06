import {getTime} from './index.js';

describe('getTime', () => {
  it('should return string with valid time when pass "Breakfast at 09:00"', () => {
    expect(getTime('Breakfast at 09:00')).toBe('09:00');
  });

  it('should return string with first valid time when pass "Breakfast at 09:60, Dinner at 21:00"', () => {
    expect(getTime('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
  });

  it('should return string with first valid time when pass "Breakfast at 09:59, Dinner at 21:00"', () => {
    expect(getTime('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
  });

  it('should return an empty string when pass "Breakfast at 09:69, Dinner at 21:89"', () => {
    expect(getTime('Breakfast at 09:69, Dinner at 21:89')).toBe('');
  });
 
});
