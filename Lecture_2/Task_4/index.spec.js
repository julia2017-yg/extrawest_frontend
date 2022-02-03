import {moveZeros} from './index.js';

describe('moveZeros', () => {
  test('should return array and moves all of the zeros to the end when pass [false,1,0,1,2,0,1,3,"a"]', () => {
    expect(moveZeros([false,1,0,1,2,0,1,3,'a'])).toEqual([false,1,1,2,1,3,'a',0,0]);
  });
 
});
