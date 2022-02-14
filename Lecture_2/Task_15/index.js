export const squareList = (array) => {
  
  const filterArray = array.filter(item => Number.isInteger(item) && item >= 0);
  const squareArrayItem = filterArray.map(item => item * item);

  return squareArrayItem;
}