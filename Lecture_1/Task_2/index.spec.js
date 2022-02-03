import {stringMerge} from './index.js';

describe('stringMerge', () => {
  test('should return word with a string merge of both words when pass ("hello", "world", "l")', () => {
    expect(stringMerge('hello', 'world', 'l')).toBe('held');
  });

  test('should return word with a string merge of both words when pass ("coding","anywhere","n")', () => {
    expect(stringMerge('coding', 'anywhere', 'n')).toBe('codinywhere');
  });

  test('should return word with a string merge of both words when pass ("jason", "samson", "s")', () => {
    expect(stringMerge('jason', 'samson', 's')).toBe('jasamson');
  });

  test('should return word with a string merge of both words when pass ("wonderful", "people", "e")', () => {
    expect(stringMerge('wonderful', 'people', 'e')).toBe('wondeople');
  });
});
