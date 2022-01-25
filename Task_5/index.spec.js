import {getTime} from './index.js'

describe("Tests", () => {
  it('should return valid first time', () => {
    expect(getTime('Breakfast at 09:00')).toBe('09:00');
  });
  it('should return valid first time', () => {
    expect(getTime('Breakfast at 09:60 , Dinner at 21:00')).toBe('21:00');
  });
  it('should return valid first time', () => {
    expect(getTime('Breakfast at 09:59 , Dinner at 21:00')).toBe('09:59');
  });
 
});
