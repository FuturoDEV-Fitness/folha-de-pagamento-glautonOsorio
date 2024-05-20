const { calculateInss } = require("./calc_inss");
const { calculateTax } = require("./calc_tax");

class SalaryCalculator {
  inss(grossSalary) {
    return calculateInss(grossSalary);
  }
  tax(salary) {
    return calculateTax(salary);
  }
}

module.exports = new SalaryCalculator();
