export const invertColor = hex => {
  const hexArray = hex.toLowerCase().replace('#','').split('');
  const colorsArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  const reverseArray = [...colorsArray].reverse();
  let inverseColor = '#';
  
  hexArray.forEach(element => {
    const index = colorsArray.indexOf(element);

    inverseColor += reverseArray[index];
  });

  return inverseColor;
};