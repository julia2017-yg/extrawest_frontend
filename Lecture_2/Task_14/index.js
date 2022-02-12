export const frankenSplice = (arr1, arr2, index) => {

  const originalArray = arr2.slice();

  originalArray.splice(index, 0, ...arr1);

  return originalArray;
};