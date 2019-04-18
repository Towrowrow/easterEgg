const characterLife = (skills) => {
  let totPoint = 0;
  skills.map(skill => {
    return totPoint += Number(skill.charAt(skill.length - 1));
  });
  return totPoint;
}

export default characterLife;