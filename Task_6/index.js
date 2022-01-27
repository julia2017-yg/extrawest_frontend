export function isPalindrome(str){
  const regEx = /[\W_]/g;
  const lowStr = str.toLowerCase().replace(regEx, '');
  const reverseStr = lowStr.split('').reverse().join('');
    if(reverseStr === lowStr){
      return true;
    }else {
      return false
    }
}