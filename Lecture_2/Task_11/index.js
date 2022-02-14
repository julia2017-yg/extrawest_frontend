export const makeArmy = () => {
  const shooters = [];

  let count = 0;
  while (count < 10) {
    let returnCount = count;
    const shooter = () => {
      return returnCount;
    };
    shooters.push(shooter);
    count++;
  }

  return shooters;
}


