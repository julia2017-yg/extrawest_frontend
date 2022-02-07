export const calculateRentalCost = days => {
  const rentCosts = 40;
  const totalOffsevenDays = 50;
  const totalOffthreeDays = 20;

  if (days >= 7) {
    return days * rentCosts - totalOffsevenDays;
  }

  if (days >= 3) {
    return days * rentCosts - totalOffthreeDays;
  }

  return days * rentCosts;
};