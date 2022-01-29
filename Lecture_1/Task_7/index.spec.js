import {swapCase} from './index.js'

describe("swapCase", () => {
  it('should returns a string swaps the case for each of the letters', () => {
    expect(swapCase('aBc')).toBe('AbC');
  });
  it('should returns a string swaps the case for each of the letters', () => {
    expect(swapCase('GooD')).toBe('gOOd');
  });
  it('should returns a string in the lower case', () => {
    expect(swapCase('hello')).toBe('HELLO');
  });
});
