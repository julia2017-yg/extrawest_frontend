import {squareList} from './index.js';

describe('squareList', () => {
  test('should return a new array when pass [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]', () => {
    expect(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])).toEqual([16, 1764, 36]);
  });

  test('should return a new array when pass [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]', () => {
    expect(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) ).toEqual([9, 100, 49]);
  });
});

