const gradeCalc = function (score, totalScor) {
  const percrent = (score / totalScor) * 100;
  if (percrent >= 0 && percrent <= 59) console.log(`you get f ${percrent}`);
  else if (percrent >= 60 && percrent <= 69)
    console.log(`you get d ${percrent}`);
  else if (percrent >= 70 && percrent <= 79)
    console.log(`you get c ${percrent}`);
  else if (percrent >= 80 && percrent <= 89)
    console.log(`you get b ${percrent}`);
  else if (percrent >= 90 && percrent <= 100)
    console.log(`you get a ${percrent}`);
};
gradeCalc(490, 750);
