




const produtos = [
    {
        id: 1,
        nome: "Notebook",
        preco: 3500,
        categoria: "Eletrônicos",
        tags: ["tech", "work"]
    },



    {
        id: 2,
        nome: "Cadeira Gamer",
        preco: 1200,
        categoria: "Móveis",
        tags: ["conforto", "office"]
    },


    {
        id: 3,
        nome: "Mousepad",
        preco: 50,
        categoria: "Eletrônicos",
        tags: ["acessorio"]
    },


    {
        id: 4,
        nome: "Monitor 4k",
        preco: 2500,
        categoria: "Eletrônicos",
        tags: ["tech", "work"]
    },


    {
        id: 5,
        nome: "Teclado Mecânico",
        preco: 400,
        categoria: "Eletrônicos",
        tags: ["tech"]
    },
];

// console.log(produtos)



// Crie uma função atualizarPrecos que receba o array de produtos e uma porcentagem de desconto. 
// A função deve retornar um novo array, onde produtos da categoria "Eletrônicos" e que tenham a tag "tech" recebam o desconto. 
// O preço final deve ser arredondado para duas casas decimais.






function atualizarPrecos(produtos, desconto) {
    const novoProduto = produtos.map(function(produto) {
        if(produto.categoria == "Eletrônicos" && produto.tags.includes("tech")){
            const novoPreco = produto.preco - (produto.preco * desconto / 100);
            return {
                ...produto,
                preco:Number(novoPreco.toFixed(2))
            };



        }
        return produto
    });

    return novoProduto;
}

const resultado = atualizarPrecos(produtos, 10)
console.log(resultado)







// const produtos = [
//   { id: 1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos", tags: ["tech", "work"] },
//   { id: 2, nome: "Cadeira Gamer", preco: 1200, categoria: "Móveis", tags: ["conforto", "office"] },
//   { id: 3, nome: "Mousepad", preco: 50, categoria: "Eletrônicos", tags: ["acessorio"] },
//   { id: 4, nome: "Monitor 4k", preco: 2500, categoria: "Eletrônicos", tags: ["tech", "work"] },
//   { id: 5, nome: "Teclado Mecânico", preco: 400, categoria: "Eletrônicos", tags: ["tech"] },
// ];

// function atualizarPrecos(produtos, desconto) {
//   const novosProdutos = produtos.map(produto => {
//     if (
//       produto.categoria === "Eletrônicos" &&
//       produto.tags.includes("tech")
//     ) {
//       const novoPreco =
//         produto.preco - (produto.preco * desconto / 100);

//       return {
//         ...produto,
//         preco: Number(novoPreco.toFixed(2))
//       };
//     }

//     return produto;
//   });

//   return novosProdutos;
// }

// // Testando:
// const resultado = atualizarPrecos(produtos, 10);
// console.log(resultado);



// function atualizarPrecos(produtos, desconto) {
//   const novosProdutos = produtos.map(function(produto) {
//     if (
//       produto.categoria === "Eletrônicos" &&
//       produto.tags.includes("tech")
//     ) {
//       const novoPreco =
//         produto.preco - (produto.preco * desconto / 100);

//       return {
//         ...produto,
//         preco: Number(novoPreco.toFixed(2))
//       };
//     }

//     return produto;
//   });

//   return novosProdutos;
// }

// // Testando:
// const resultado = atualizarPrecos(produtos, 10);
// console.log(resultado);