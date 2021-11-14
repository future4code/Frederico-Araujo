/* Exercícios de interpretação
1. A função copiou um array para cada item do array inicial, além de mostral qual é o item e o índice.

2. A função faz com que a nova array só possua os nomes da array inicial.

3. A função retorna uma nova array com os itens da array original que não possuam "Chijo"
*/

// Exercícios de escrita
// 1.
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const somenteNome = pets.map((item) => {
     return item.nome
 } )
 console.log(somenteNome)

 const somenteSalsicha = pets.filter((item) => {
return item.raca === "Salsicha"
 } )
 console.log(somenteSalsicha)

 const somentePoodle = pets.filter((item) => {
    return item.raca === "Poodle"
     } )
const mensagemPoodle = somentePoodle.map((item) => {
return "Você ganhou um cupom de 10% para tosar o/a " + item.nome
})
console.log(mensagemPoodle)
*/

// 2.
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const somenteNome = produtos.map((item) => {
    return  item.nome
 })
 console.log(somenteNome)

 const nomePreco = produtos.map((item) => {
    delete item.categoria
    let preco  = item.preco * 0.95
    item.preco = preco.toFixed(2)
    return item
 })
console.log(nomePreco)

const apenasBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(apenasBebidas)

const apenasYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
    
})
apenasYpe.map((item) => {
    console.log("Compre " + item.nome + " por " + item.preco)
})
*/

