import {calculateRentalCost} from './index.js'

describe('calculateRentalCost', () => {
  test('should return the total rent amount for a two days', () => {
      expect(calculateRentalCost(2)).toBe(80);
  });
  test('should return the total rent amount for under three days', () => {
    expect(calculateRentalCost(3)).toBe(100);
  });
  test('should return the total rent amount for under seven days', () => {
    expect(calculateRentalCost(7)).toBe(230);
  });
});
