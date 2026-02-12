// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
// cálculo).



function notas(n1, n2, n3){
    const media = ((n1 + n2 + n3) /3).toFixed(2);
    return Number(media);
}

// console.log(notas(5,5,7))





// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final.



// Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
// necessário.



function notas(n1, n2, n3){
    const media = ((n1 + n2 + n3) /3).toFixed(2);
    return Number(media);
}



function recuperacao(n1, n2, n3, n4){
    const media = notas(n1, n2, n3);
    const mediaFinal = (media + n4) / 2;
    return Number(mediaFinal.toFixed(2))

}
// console.log(`a média final desse aluno é: ${recuperacao(5,5,7,9)}`)




// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
// tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
// Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32



function temperaturaGrausCelsius(valor){
    let fahrenheit = (9/5) * (valor) + 32;
    return fahrenheit;

}

// console.log(`a temperatura correspondente em Farenheit é de: ${temperaturaGrausCelsius(32)}ºF`)




// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:
// O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).


function produto(valor){
    const imposto = valor * 0.08875;
    const resultado = imposto + valor
    return Number(resultado).toFixed(2);
}

// console.log(`O valor a ser pago é: ${produto(100)}`);





// Faça uma função que receba o valor de um produto e calcule um desconto de 12% sobre ele.
// Mostre na tela:

// O valor com desconto é x


// function produtos2(valorProduto){
//     const desconto = (12 / 100) * valorProduto;
//     const valorDesconto = valorProduto - desconto;

//     console.log(`O valor com desconto é: R$ ${valorDesconto.toFixed(2)}`);
// }

// produtos2(100);




// ✅ Exercício 2 — Média ponderada

// Crie uma função que receba duas notas:

// Prova (peso 7)

// Trabalho (peso 3)

// Calcule a média ponderada e mostre:

// A média final é x



function notas(nota1, nota2){
    const media = (((nota1 * 7) + (nota2 * 3)) / 10);
    return media;
     

};

// console.log(`A média final é: ${notas(5,4)}`)






// ✅ Exercício 3 — Conversão km → milhas

// Faça uma função que receba uma distância em quilômetros.
// Sabendo que:

// 👉 1 km = 0,621371 milhas

// Mostre:

// A distância em milhas é x



function conversaoKm(quilometros){
    const km = quilometros * 0.621371;
    return   Number(km.toFixed(2));

}

// console.log(`A distância em milhas é : ${conversaoKm(10)}`)

// console.log(typeof conversaoKm(10))





// ✅ Exercício 4 — Aumento salarial

// Faça uma função que receba um salário e aplique um aumento de 15%.
// Exiba:

// O novo salário é x

function aumentoSalario(salario){
    const aumento = (salario * 0.15) + salario
    return Number(aumento.toFixed(2))
}

// console.log(`O novo salário é: ${aumentoSalario(50000)}`)











// ✅ Exercício 5 — Consumo de combustível

// Crie uma função que receba:

// distância percorrida (km)

// litros de combustível gastos

// Calcule o consumo médio (km por litro) e mostre:

// O consumo médio é x km/l


function consumoDeCombustivel(distancia, combustivelConsumido){
    const kmPorLitro = distancia / combustivelConsumido;
    return Number(kmPorLitro.toFixed(2));
}


console.log(`O consumo médio é ${consumoDeCombustivel(1000,50)} km/l`)