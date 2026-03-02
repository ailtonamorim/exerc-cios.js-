// // Exercício 1: Manipulação de Array - parte 1
// // a. Crie um array chamado produtos contendo três nomes de produtos.
// // b. Acesse e imprima o segundo produto.
// // c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.

let produtos = ["teclado", "computador", "mouse"];
// console.log(produtos[1]);
produtos[2] = "Notebook";
// console.log(produtos)





// // Exercício 2: Manipulação de Array - parte 2
// // a. Crie um array chamado clientes contendo três nomes de clientes.
// // b. Adicione um quarto cliente ao array.
// // c. Remova o último cliente e imprima o array atualizado.


let clientes = ['zaira','ailton','família']
clientes.push('contas');
clientes.pop();
// console.log(clientes);


// // Exercício 3: Manipulação de Objetos - parte 1
// // a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
// // b. Acesse e imprima o nome do produto.
// // c. Modifique o preço do produto e imprima o objeto atualizado.


let produto = {
    nome: 'impressora',
    preco: 1500,
    quantidade: 20
};

console.log(produto.nome);
produto.preco = 2000;
// console.log({... produto,preco:produto.preco.toFixed(2)});



// // Exercício 4: Manipulação de Objetos - parte 2
// // a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
// // b. Adicione a propriedade data ao objeto.
// // c. Remova a propriedade produto e imprima o objeto atualizado.

let venda = {
    cliente: 'Ailton',
    produto: 'carro',
    valor: 200000
};

venda.data = '01/03/2026';
delete venda.produto;

// console.log({... venda,
//     valor:venda.valor.toFixed(2)
// });




// // Exercício 5: Manipulação dos Tipos Referências
// // a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
// // b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
// // c. Crie um objeto funcionario e atribua seus valores para um novo objeto
// // novoFuncionario.
// // d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
// // alterado.


// let estoque = [1,2,6];
// let novoEstoque = [...estoque];
// novoEstoque[1] = 10;

// console.log(estoque)


// let funcionario =  {
//     nomeNovo: "Ailton"

// }

// let novoFuncionario =  {...funcionario}

// novoFuncionario["nomeNovo"] = "Zaira"


// console.log(funcionario)






// Exercício 1: Manipulação de Array - parte 1
// a. Crie um array chamado produtos contendo três nomes de produtos.
// b. Acesse e imprima o segundo produto.
// c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.






// Exercício 2: Manipulação de Array - parte 2
// a. Crie um array chamado clientes contendo três nomes de clientes.
// b. Adicione um quarto cliente ao array.
// c. Remova o último cliente e imprima o array atualizado.






// Exercício 3: Manipulação de Objetos - parte 1
// a. Crie um objeto chamado produtosObjeto com as propriedades nome, preco e quantidade.
// b. Acesse e imprima o nome do produtosObjeto.
// c. Modifique o preço do produtosObjeto e imprima o objeto atualizado.









// Exercício 4: Manipulação de Objetos - parte 2
// a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
// b. Adicione a propriedade data ao objeto.
// c. Remova a propriedade produto e imprima o objeto atualizado.







// Exercício 5: Manipulação dos Tipos Referências
// a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
// b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.







// c. Crie um objeto funcionario e atribua seus valores para um novo objeto
// novoFuncionario.
// d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
// alterado.



// function saudacao(n1 , n2){
//     return  `O resultado da soma é: ${n1 + n2}`
// }

// function pedirNumeros(){
//     let n1 = Number(prompt("Digite primeiro numero"));
//     let n2 = Number(prompt("Digite primeiro numero"));
//     let resultado = saudacao(n1, n2);

//     alert(resultado);
//     console.logo(resultado);
// }



