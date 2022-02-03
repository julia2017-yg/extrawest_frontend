import {getOperands} from './index.js';

describe('getOperands', () => {
  it('should returns operands when pass "1 + 2"', () => {
    expect(getOperands('1 + 2')).toBe('a: 1, b: 2');
  });

  it('should returns operands when pass "1.2 * -3.4"', () => {
    expect(getOperands('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
  });

  it('should returns operands when pass "1 - 2"', () => {
    expect(getOperands('1 - 2')).toBe('a: 1, b: 2');
  });

  it('should returns operands when pass "1 - -2"', () => {
    expect(getOperands('1 - -2')).toBe('a: 1, b: -2');
  });
});
