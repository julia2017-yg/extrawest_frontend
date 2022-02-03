import {calculateRentalCost} from './index.js';

describe('calculateRentalCost', () => {
  test('should return the total rent amount for a 2 days', () => {
    expect(calculateRentalCost(2)).toBe(80);
  });

  test('should return the total rent amount for under 3 days', () => {
    expect(calculateRentalCost(3)).toBe(100);
  });

  test('should return the total rent amount for under 7 days', () => {
    expect(calculateRentalCost(7)).toBe(230);
  });
});
