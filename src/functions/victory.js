const victory = (egg, character) => {
  let isWinner;
  if (egg >= character) {
    isWinner = true;
  } else {
    isWinner = false;
  }
  return isWinner;
}

export default victory;