const eggLife = (power, isGourou) => {
  if (isGourou) {
    return 42;
  }
  let totPoint = 2 * Number(power.charAt(power.length - 1));
  return totPoint;
}

export default eggLife;