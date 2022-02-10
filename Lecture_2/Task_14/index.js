export const frankenSplice = (arr1, arr2, index) => {

  const originalArray = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    originalArray.splice(index++, 0, arr1[i]);
  }

  return originalArray;
};