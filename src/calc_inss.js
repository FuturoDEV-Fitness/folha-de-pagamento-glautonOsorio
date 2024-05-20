module.exports.calculateInss = (grossSalary) => {
  const INSS_CEILING = 908.85;
  let inss = 0;

  if (grossSalary <= 1412) {
    inss = grossSalary * (7.5 / 100);
  } else if (grossSalary >= 1412.01 && grossSalary <= 2666.68) {
    inss = grossSalary * (9 / 100);
  } else if (grossSalary >= 2666.69 && grossSalary <= 4000.03) {
    inss = grossSalary * (12 / 100);
  } else {
    inss = grossSalary * (14 / 100);
  }

  if (inss >= INSS_CEILING) inss = INSS_CEILING;

  return inss;
};
