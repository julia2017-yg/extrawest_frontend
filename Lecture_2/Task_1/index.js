export const calculateRentalCost = days => {
  const rentCosts = 40;

  if (days >= 7) {
    return days * rentCosts - 50;
  }

  if (days >= 3) {
    return days * rentCosts - 20;
  }

  return days * rentCosts;
};