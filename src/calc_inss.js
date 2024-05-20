module.exports.calculateInss = (salary) => {
  const INSS_CEILING = 908.85;
  let inss = 0;

  if (salary <= 1412) {
    inss = salary * (7.5 / 100);
  } else if (salary >= 1412.01 && salary <= 2666.68) {
    inss = salary * (9 / 100);
  } else if (salary >= 2666.69 && salary <= 4000.03) {
    inss = salary * (12 / 100);
  } else {
    inss = salary * (14 / 100);
  }

  if (inss >= INSS_CEILING) inss = INSS_CEILING;

  return inss;
};
