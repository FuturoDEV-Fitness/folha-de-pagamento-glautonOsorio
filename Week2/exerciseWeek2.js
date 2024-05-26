//[M2S02] - Ex 1 - Manipulação Básica de Arrays

function filtrarPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros)); // [2, 4, 6, 8, 10]

//[M2S02] - Ex 2 - Manipulação de Objetos

function filtrarAdultos(pessoas) {
  return pessoas
    .filter((pessoa) => pessoa.idade >= 18)
    .map((pessoa) => pessoa.nome);
}

let pessoas = [
  { nome: "Alice", idade: 17 },
  { nome: "Bob", idade: 22 },
  { nome: "Charlie", idade: 16 },
  { nome: "David", idade: 19 },
];

console.log(filtrarAdultos(pessoas));

//[M2S02] - Ex 3 - Agrupamento de Dados

function agruparPorCategoria(produtos) {
  return produtos.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
      acc[produto.categoria] = 0;
    }
    acc[produto.categoria] += produto.preco;
    return acc;
  }, {});
}

let produtos = [
  { categoria: "eletrônicos", preco: 99.99 },
  { categoria: "livros", preco: 19.99 },
  { categoria: "eletrônicos", preco: 199.99 },
  { categoria: "livros", preco: 29.99 },
  { categoria: "roupas", preco: 49.99 },
];

console.log(agruparPorCategoria(produtos));

//[M2S02] - Ex 4 - Funções que Retornam Funções (Closures)

function contador() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

let contador1 = contador();
console.log(contador1());
console.log(contador1());
console.log(contador1());

let contador2 = contador();
console.log(contador2());
console.log(contador2());

//[M2S02] - Ex 5 - Redução de Arrays

function calcularProduto(numeros) {
  return numeros.reduce((produto, numero) => produto * numero, 1);
}

let numerosArray = [1, 2, 3, 4, 5];
console.log(calcularProduto(numerosArray));

//[M2S02] - Ex 6 - Funções de Alta Ordem

function transformarArray(array, transformacao) {
  return array.map(transformacao);
}

function dobrar(numero) {
  return numero * 2;
}

let numerosArray3 = [1, 2, 3, 4, 5];
console.log(transformarArray(numerosArray3, dobrar));

//[M2S02] - Ex 7 - Composição de Funções

function compor(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function somar1(x) {
  return x + 1;
}

function multiplicar2(x) {
  return x * 2;
}

let funcaoComposta = compor(somar1, multiplicar2);
console.log(funcaoComposta(5));
