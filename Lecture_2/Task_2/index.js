export const openOrSenior = arrayValue => {
  return arrayValue.map(value => (value[0] >= 40 && value[1] > 15 ? 'Senior' : 'Open'));
}