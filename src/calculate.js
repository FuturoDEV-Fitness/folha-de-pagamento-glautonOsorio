const { calculateInss } = require("./calc_inss");

class SalaryCalculator {
  inss(grossSalary) {
    calculateInss(grossSalary);
  }
}

module.exports = new SalaryCalculator();
