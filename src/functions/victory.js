const victory = (egg, monster) => {
  let isWinner;
  if (egg >= monster) {
    isWinner = true;
  } else {
    isWinner = false;
  }
  return isWinner;
}

export default victory;