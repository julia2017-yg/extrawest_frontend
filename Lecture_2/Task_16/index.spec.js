import {fearNotLetter} from './index.js';

describe('fearNotLetter', () => {
  test('should return string when pass ("abce")', () => {
    expect(fearNotLetter('abce')).toBe('d');
  });
  
  test('should return string when pass ("abce")', () => {
    expect(fearNotLetter('abcdefghjklmno')).toBe('i');
  });

  test('should return string when pass ("stvwx")', () => {
    expect(fearNotLetter('stvwx')).toBe('u');
  });

  test('should return string when pass ("stvwx")', () => {
    expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
  });
 
});