export function isPalindrome(str){
  const regEx = /[\W_]/g;
  const lowStr = str.toLowerCase().replace(regEx, '');
  const reverseStr = lowStr.split('').reverse().join('');
  return reverseStr === lowStr ? true : false;
    
}