export const moveZeros = numbers => {
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbers[i] === 0 && numbers.splice(i, 1) && numbers.push(0);
  }

  return numbers;
};