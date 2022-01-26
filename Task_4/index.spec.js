import {getOperands} from './index.js'

describe("getOperands", () => {
  it('should returns operands in the next format: "a: <first_operand>, b: <second_operand>"', () => {
    expect(getOperands('1 + 2')).toBe('a: 1, b: 2');
  });
  it('should returns operands in the next format: "a: <first_operand>, b: <second_operand>"', () => {
    expect(getOperands('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
  });
  it('should returns operands in the next format: "a: <first_operand>, b: <second_operand>"', () => {
    expect(getOperands('1 - 2')).toBe('a: 1, b: 2');
  });
  it('should returns operands in the next format: "a: <first_operand>, b: <second_operand>"', () => {
    expect(getOperands('1 - -2')).toBe('a: 1, b: -2');
  });
});
