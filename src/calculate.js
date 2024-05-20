const { calculateInss } = require("./calc_inss");
const { calculateTax } = require("./calc_tax");

class SalaryCalculator {
  inss(salary) {
    return calculateInss(salary);
  }
  tax(salary) {
    return calculateTax(salary);
  }

  liquid(salary) {
    const inss = calculateInss(salary);
    const tax = calculateTax(salary);

    const liquidSalary = salary - inss - tax;

    return liquidSalary;
  }
}

module.exports = new SalaryCalculator();
