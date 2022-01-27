export function isPalindrome(str){
  let regEx = /[\W_]/g;
  let lowStr = str.toLowerCase().replace(regEx, '');
  let reverseStr = lowStr.split('').reverse().join('');
    if(reverseStr === lowStr){
      return true;
    }else {
      return false
    }
}