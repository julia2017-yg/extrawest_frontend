import {calc} from './index.js'

describe('calc', () => {
  test('should return the result of sum numbers', () => {
      expect(calc('+',4,7)).toBe(11);
  });
  test('should return the result of minus numbers', () => {
    expect(calc('-',15,18)).toBe(-3);
  });
  test('should return the result of multiply numbers', () => {
    expect(calc('*',5,5)).toBe(25);
  });
  test('should return the result of divide numbers', () => {
    expect(calc('/',49,7)).toBe(7);
  });
  test('should return zero on other operations of numbers', () => {
    expect(calc('somethihg else',45,45)).toBe(0);
  });
});
