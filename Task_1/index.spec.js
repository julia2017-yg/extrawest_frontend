import {calc} from './index.js'

describe('calc', () => {
  test('should return sum of numbers', () => {
      expect(calc('+',4,7)).toBe(11);
  });
  test('should return minus of numbers', () => {
    expect(calc('-',15,18)).toBe(-3);
  });
  test('should return multiply of numbers', () => {
    expect(calc('*',5,5)).toBe(25);
  });
  test('should return divide of numbers', () => {
    expect(calc('/',49,7)).toBe(7);
  });
  test('should return somethihg else of numbers', () => {
    expect(calc('somethihg else',45,45)).toBe(0);
  });
});
