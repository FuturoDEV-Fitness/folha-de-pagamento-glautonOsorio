const read = require("readline-sync");
const Calculate = require("./calculate");

const nome = read.question("Qual o nome do funcionário?");
const cpf = read.question("Qual o cpf do funcionário?");
const salario = Number(
  read.question("Qual o salario bruto do funcionário?").replace(",", ".")
);

const inss = Calculate.inss(salario);
const tax = Calculate.tax(salario);
const salarioLiquido = Calculate.liquid(salario);

console.log(`Nome: ${nome}`);
console.log(`CPF: ${cpf}`);
console.log(`Salário Bruto: R$${salario.toFixed()}`);
console.log(`INSS: R$${inss.toFixed()}`);
console.log(`Imposto: R$${tax.toFixed()}`);
console.log(`Salário Líquido: R$${salarioLiquido.toFixed()}`);
