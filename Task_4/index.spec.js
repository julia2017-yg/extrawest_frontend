import {getOperands} from './index.js'

describe("Tests", () => {
  it('should return operands', () => {
    expect(getOperands('1 + 2')).toBe('a: 1, b: 2');
  });
  it('should return operands', () => {
    expect(getOperands('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
  });
  it('should return operands', () => {
    expect(getOperands('1 - 2')).toBe('a: 1, b: 2');
  });
  it('should return operands', () => {
    expect(getOperands('1 - -2')).toBe('a: 1, b: -2');
  });
});
