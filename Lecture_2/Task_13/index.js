export const createAdder = (initialValue = 0) => {
  return function(...operands) {
    for (let i = 0; i < operands.length; i++) {
      initialValue += Number(operands[i]);
    }
    return initialValue;
  };
}