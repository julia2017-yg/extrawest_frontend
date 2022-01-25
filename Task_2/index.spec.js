import {stringMerge} from './index.js'

describe("Tests", () => {
  test('should return result concat', () => {
    expect(stringMerge("hello", "world", "l")).toBe("held");
  });
  test('should return result concat', () => {
    expect(stringMerge("coding", "anywhere", "n")).toBe("codinywhere");
  });
  test('should return result concat', () => {
    expect(stringMerge("jason", "samson", "s")).toBe("jasamson");
  });
  test('should return result concat', () => {
    expect(stringMerge("wonderful", "people", "e")).toBe("wondeople");
  });
});
