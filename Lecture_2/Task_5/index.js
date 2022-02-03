export const reverseWords = string => {
  const reverseArray = string.split(' ');
  
  return reverseArray.map(word => word.split('').reverse().join('')).join(' ');
};