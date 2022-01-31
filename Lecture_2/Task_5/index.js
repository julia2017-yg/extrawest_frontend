export const reverseWords = string => {
    let reverseArray = string.split(' ');
  
    return reverseArray.map(word => word.split('').reverse().join('')).join(' ');
}