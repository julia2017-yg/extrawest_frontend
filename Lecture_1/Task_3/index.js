export function createPhoneNumber(num) {
  // eslint-disable-next-line no-param-reassign
  num = num.join('');

  return '('+num.substring(0,3)+')'+' '+num.substring(3,6)+'-'+num.substring(6);
}
