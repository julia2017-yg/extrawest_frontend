import {stringMerge} from './index.js'

describe("stringMerge", () => {
  test('should have the beginning of the first word and the ending of the second with the dividing letter in the middle', () => {
    expect(stringMerge("hello", "world", "l")).toBe("held");
  });
  test('should have the beginning of the first word and the ending of the second with the dividing letter in the middle', () => {
    expect(stringMerge("coding", "anywhere", "n")).toBe("codinywhere");
  });
  test('should have the beginning of the first word and the ending of the second with the dividing letter in the middle', () => {
    expect(stringMerge("jason", "samson", "s")).toBe("jasamson");
  });
  test('should have the beginning of the first word and the ending of the second with the dividing letter in the middle', () => {
    expect(stringMerge("wonderful", "people", "e")).toBe("wondeople");
  });
});
