export function calc(o,a,b){

  switch(o) {
    case'+':
      return a+b;
      break;
    case'-':
      return a-b;
      break;
    case'*':
      return a*b;
      break;
    case'/':
      return a/b;
      break;
    default:
      return 0;
  }
  
}
