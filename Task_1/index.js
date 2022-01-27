export function calc(operation,num1,num2){

  switch(operation) {
    case'+':
      return num1+num2;
      break;
    case'-':
      return num1-num2;
      break;
    case'*':
      return num1*num2;
      break;
    case'/':
      return num1/num2;
      break;
    default:
      return 0;
  }
  
}
