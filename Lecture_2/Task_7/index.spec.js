import {invertColor} from './index.js'

describe('invertColor', () => {
  test('should return invert color when pass "#000000"', () => {
      expect(invertColor('#000000')).toBe('#ffffff');
  });
  test('should return invert color when pass "#DDEEAA"', () => {
    expect(invertColor('#DDEEAA')).toBe('#221155');
  });
  test('should return invert color when pass "#012345"', () => {
    expect(invertColor('#012345')).toBe('#fedcba');
  });
});