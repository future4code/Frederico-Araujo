/* Exercícios de interpretação
# 1. 
1°) Matheus Nachtergaele
2°) Virginia Cavendish
3º) Canal Globo 14h

# 2. 
a) 1° - {nome: Juca, idade: 3, raca: SRD}
2° - {nome: Juba, idade: 3, raca: SRD}
3° - {nome: Jubo, idade: 3, raca: SRD}

b) Os ... copiam as informações do objeto ou array.

# 3. 
a) 1° - false
2° - undefined
b) A função procurou se tinha a informação no objeto e retornou o seu valor. No primeiro caso, havia a informação "backender" = false. No segundo, não havia "altura", logo, retornou undefined.
*/

// Exercícios de escrita de código
// 1. 
/*
let objetoPadrao = {
    nome: "",
    apelidos: []
}

const funcao = (nome, apelidos) => {
    nome = objetoPadrao.nome
    apelidos = objetoPadrao.apelidos
    console.log (`Eu sou ${nome}, mas pode me chamar de: ${apelidos [0]}, ${apelidos [1]}, ou ${apelidos [2]}.`)
}

let pessoa = {
    nome: "Frederico",
    apelidos: ["Fred", "Fredão", "Brabo dos Games"]
}

objetoPadrao = pessoa


funcao(pessoa)

let pessoa2 =  {
    ...pessoa, 
    apelidos:["A", "B", "C"]
}

objetoPadrao = pessoa2
funcao(pessoa2)
*/

// 2.
/*
const funcao = (objeto) => {
    const tamanhoNome = objeto.nome.length
    const tamanhoProfissao = objeto.profissao.length
    let array = [objeto.nome, tamanhoNome, objeto.idade, objeto.profissao, tamanhoProfissao]
    console.log(array)
    }

const objeto1 = {
    nome: "Fred",
    idade: 26,
    profissao: "Engenheiro"
}

const objeto2 = {
    nome: "Camila",
    idade: 30,
    profissao: "Pedagoga"
}

funcao(objeto1)
funcao(objeto2)
*/

// 3. 
/*
let carrinho = []

const fruta1 = {
    nome: "Banana",
    disponivel: true
}

const fruta2 = {
    nome: "Maça",
    disponivel: true
}

const fruta3 = {
    nome: "Laranja",
    disponivel: true
}

const funcao = () => {
 carrinho.push(fruta1)
 carrinho.push(fruta2)
 carrinho.push(fruta3)
console.log(carrinho)
}
funcao()
*/

//Desafios
// 1.
/*
const usuario = {
    nome: prompt("Digite seu nome:"),
    idade: prompt("Digite sua idade:"),
    profissao: prompt("Digite sua profissão:")
}

console.log(usuario, typeof(usuario))
*/

// 2.
/*
const funcao = (objeto1, objeto2) => {
    console.log("O primeiro filme foi lançado antes do segundo?", objeto1.lancamento < objeto2.lancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", objeto1.lancamento === objeto2.lancamento)
}

const filme1 = {
    nome: "Vingadores",
    lancamento: 2016
}

const filme2 = {
    nome: "O Hobbit",
    lancamento: 2011
}

funcao(filme1, filme2)
*/

// 3.
/*
let carrinho = []

const fruta1 = {
    nome: "Banana",
    disponivel: true
}

const fruta2 = {
    nome: "Maça",
    disponivel: true
}

const fruta3 = {
    nome: "Laranja",
    disponivel: true
}

const funcao = () => {
 carrinho.push(fruta1)
 carrinho.push(fruta2)
 carrinho.push(fruta3)
console.log(carrinho)
}
funcao()

const funcaoNegativa = (objeto) => {
   objeto.disponivel = false
   return objeto
}

console.log(funcaoNegativa(fruta3))
*/