const read = require("readline-sync");
const PDFKit = require("pdfkit");
const fs = require("fs");
const Calculate = require("./calculate");

const nome = read.question("Qual o nome do funcionário?");
const cpf = read.question("Qual o cpf do funcionário?");
const salario = Number(
  read.question("Qual o salario bruto do funcionário?").replace(",", ".")
);
const mes = read.question("Digite o mês do pagamento: ");

const inss = Calculate.inss(salario);
const tax = Calculate.tax(salario);
const salarioLiquido = Calculate.liquid(salario);

console.log(`Nome: ${nome}`);
console.log(`CPF: ${cpf}`);
console.log(`Salário Bruto: R$${salario.toFixed(2)}`);
console.log(`INSS: R$${inss.toFixed(2)}`);
console.log(`Imposto: R$${tax.toFixed(2)}`);
console.log(`Salário Líquido: R$${salarioLiquido.toFixed(2)}`);

gerarRelatorioPDF({ nome, cpf, mes, salario, inss, tax, salarioLiquido });

function gerarRelatorioPDF(funcionario) {
  const dataAtual = new Date();
  const pdf = new PDFKit();
  const nomeArquivo = `Folha-Pagamento-${funcionario.nome.replace(
    /\s/g,
    "-"
  )}-mes-${funcionario.mes.replace(/\//g, "-")}.pdf`;

  pdf.pipe(fs.createWriteStream(nomeArquivo));

  pdf.text("--- Folha de Pagamento ---");
  pdf.text(`Data de Geração: ${dataAtual.toLocaleDateString()}`);
  pdf.text(`Mês do pagamento: ${funcionario.mes}`);
  pdf.text(`Nome: ${funcionario.nome}`);
  pdf.text(`CPF: ${funcionario.cpf}`);
  pdf.text("--- ---");
  pdf.text(`Salario Bruto: R$ ${funcionario.salario.toFixed(2)}`);
  pdf.text("--- ---");
  pdf.text(`INSS: R$ ${funcionario.inss.toFixed(2)}`);
  pdf.text(`Imposto de Renda: R$ ${funcionario.tax.toFixed(2)}`);
  pdf.text("Outros descontos: R$ 0.00");
  pdf.text("--- ---");
  pdf.text(`Salario Líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
  pdf.text("--- ---");

  pdf.end();
}
