import {stringMerge} from './index.js'

describe("stringMerge", () => {
  test('should return word with a string merge of both words', () => {
    expect(stringMerge("hello", "world", "l")).toBe("held");
  });
  test('should return word with a string merge of both words', () => {
    expect(stringMerge("coding", "anywhere", "n")).toBe("codinywhere");
  });
  test('should return word with a string merge of both words', () => {
    expect(stringMerge("jason", "samson", "s")).toBe("jasamson");
  });
  test('should return word with a string merge of both words', () => {
    expect(stringMerge("wonderful", "people", "e")).toBe("wondeople");
  });
});
