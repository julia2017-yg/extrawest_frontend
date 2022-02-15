import { createAdder } from './index.js';

describe('frankenSplice', () => {
  const adder1 = createAdder();
  const adder2 = createAdder(100);

  test('Should return 0 by default', () => {
    expect(adder1())
      .toBe(0);
  });

  test('Should return sum of default\n'
    + ' * value and passed argument', () => {
    expect(adder1(10, 20))
      .toBe(30);
  });

  test('Should return sum of previous\n'
    + ' * result and all passed arguments', () => {
    expect(adder1(30, 40))
      .toBe(100);
  });

  test('Should return passed initial value', () => {
    expect(adder2(10))
      .toBe(110);
  });

  test('Should return sum of\n'
    + ' * initial value and passed argument', () => {
    expect(adder2(20, 30, 40))
      .toBe(200);
  });

  test('Should return previous result', () => {
    expect(adder2())
      .toBe(200);
  });
});