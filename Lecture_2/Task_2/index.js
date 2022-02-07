export const openOrSenior = arrayValue => {
  const member = 40;
  const workExperience = 15;
  
  return arrayValue.map(value => (value[0] >= member && value[1] > workExperience ? 'Senior' : 'Open'));
};