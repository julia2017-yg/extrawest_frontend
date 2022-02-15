import { createPrevArgSaver } from './index.js';


describe('createPrevArgSaver', () => {
  const argSaver = createPrevArgSaver();
  test('should return undefined', () => {
    expect(argSaver(123)).toBe(undefined);
  }); 
  test('should return 123', () => {
    expect(argSaver(456)).toBe(123);
  }); 

  test('should return 456', () => {
    expect(argSaver(100, 200, 300)).toBe(456);
  }); 

  test('should return 100', () => {
    expect(argSaver()).toBe(100);
  }); 
  test('should return undefined', () => {
    expect(argSaver(741)).toBe(undefined);
  }); 
});