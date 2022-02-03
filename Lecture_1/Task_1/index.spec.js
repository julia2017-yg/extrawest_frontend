import {calc} from './index.js';

describe('calc', () => {
  test('should return the result of sum numbers when pass (4,7)', () => {
    expect(calc('+',4,7)).toBe(11);
  });

  test('should return the result of minus numbers when pass (15,18)', () => {
    expect(calc('-',15,18)).toBe(-3);
  });

  test('should return the result of multiply numbers when pass(5,5)', () => {
    expect(calc('*',5,5)).toBe(25);
  });

  test('should return the result of divide numbers when pass (49,7)', () => {
    expect(calc('/',49,7)).toBe(7);
  });

  test('should return zero on other operations of numbers', () => {
    expect(calc('somethihg else',45,45)).toBe(0);
  });
});
