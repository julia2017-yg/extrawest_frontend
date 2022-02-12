import {frankenSplice} from './index.js';

describe('frankenSplice', () => {
  test('should return array when pass ([1, 2, 3], [4, 5], 1)', () => {
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  });
  
  test('Should return list of array', () => {
    expect(frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)).
      toEqual(['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']);
  });

  test('should return array when pass ([1, 2, 3, 4], [], 0)', () => {
    expect(frankenSplice([1, 2, 3, 4], [], 0)).toEqual([1, 2, 3, 4]);
  });
 
});