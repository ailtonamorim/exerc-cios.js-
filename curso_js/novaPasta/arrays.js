// Exercício 1: Manipulação de Array - parte 1
// a. Crie um array chamado produtos contendo três nomes de produtos.
// b. Acesse e imprima o segundo produto.
// c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.




let produtos = ["televisão","computador","celular"];
console.log(produtos[1]);
produtos[2] = "Notebook"
// console.log(produtos)


// Exercício 2: Manipulação de Array - parte 2
// a. Crie um array chamado clientes contendo três nomes de clientes.
// b. Adicione um quarto cliente ao array.
// c. Remova o último cliente e imprima o array atualizado.


let clientes = ["Ailton","Zaira","Anna Vitória"];
// clientes[3] = "César Vinícius";
clientes[clientes.length] = "César Vinícius";
console.log(clientes)
clientes.length = clientes.length - 1;
console.log(clientes.length)
console.log(clientes)