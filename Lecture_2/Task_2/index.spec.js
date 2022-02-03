import {openOrSenior} from './index.js';

describe('openOrSenior', () => {
  test('should return a list of string values when pass [[31, 10],[55,23],[20, 0],[41, 16]]', () => {
    expect(openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]])).toEqual(['Open','Senior','Open','Senior']);
  });

  test('should return a list of string values when pass [[34, 11],[55,7],[39, 16],[38, 14]]', () => {
    expect(openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]])).toEqual(['Open','Open','Open','Open']);
  });
});
